// Restores missing workspace folders from .git/objects (no Git CLI required).
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const RESTORE_TOP_LEVEL = new Set([
  "artifacts",
  "lib",
  "scripts",
  "attached_assets",
]);
const RESTORE_FILES = new Set(["pnpm-lock.yaml"]);

function readObj(hash) {
  const objPath = path.join(".git/objects", hash.slice(0, 2), hash.slice(2));
  const raw = zlib.inflateSync(fs.readFileSync(objPath));
  const nul = raw.indexOf(0);
  const body = raw.slice(nul + 1);
  return body;
}

function shouldRestore(filePath) {
  const normalized = filePath.split(path.sep).join("/");
  if (RESTORE_FILES.has(normalized)) return true;
  const top = normalized.split("/")[0];
  return RESTORE_TOP_LEVEL.has(top);
}

function walkTree(hash, prefix = "") {
  const body = readObj(hash);
  let i = 0;
  let restored = 0;

  while (i < body.length) {
    const sp = body.indexOf(" ", i);
    const mode = body.slice(i, sp).toString();
    const nul = body.indexOf(0, sp);
    const name = body.slice(sp + 1, nul).toString();
    const objHash = body.slice(nul + 1, nul + 21).toString("hex");
    const fullPath = prefix ? path.join(prefix, name) : name;

    if (mode.startsWith("40")) {
      restored += walkTree(objHash, fullPath);
    } else if (shouldRestore(fullPath)) {
      fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      fs.writeFileSync(fullPath, readObj(objHash));
      restored += 1;
      console.log("restored:", fullPath);
    }

    i = nul + 21;
  }

  return restored;
}

function getHeadCommitHash() {
  const head = fs.readFileSync(".git/HEAD", "utf8").trim();
  if (head.startsWith("ref:")) {
    return fs.readFileSync(path.join(".git", head.slice(5).trim()), "utf8").trim();
  }
  return head;
}

const commitHash = getHeadCommitHash();
const commitBody = readObj(commitHash).toString();
const treeHash = commitBody
  .split("\n")
  .find((line) => line.startsWith("tree "))
  .slice(5)
  .trim();

const count = walkTree(treeHash);
console.log(`Done. Restored ${count} files from git.`);
