---
name: Artifact dev-server port registration in .replit
description: Why a new web artifact's dev workflow fails port detection, and the configureWorkflow workaround that registers the port.
---

# New web artifact dev server fails the platform port check

## Symptom
A newly-created `web` artifact's managed workflow (`artifacts/<slug>: web`) is marked **failed** even though Vite starts fine and reports "ready". Binding is correct (IPv4 `0.0.0.0`, reachable on `127.0.0.1`). The proxy at `localhost:80/<previewPath>` serves the app *while* Vite is up, but the platform's port detector reports the port as not open, then kills the dev server, so the preview is not durable.

## Root cause
The platform's port detector / health check only monitors ports that are declared in `.replit` under `[[ports]]`. That list is populated at environment boot from the artifacts that existed then. A web artifact created *later* gets a port in its `artifact.toml` (`localPort`) but that port is **never synced into `.replit`**, so the detector never sees it → reports `DIDNT_OPEN_A_PORT` → kills the workflow.

**Why this matters:** the failure is NOT in the artifact's HTML/Vite config. It is purely missing `.replit` port registration. A fresh, unmodified scaffold fails the same way if its port isn't in `.replit`.

## What does NOT add the port to `.replit`
- `createArtifact` (even re-running it)
- `verifyAndReplaceArtifactToml` (changes `localPort`/`PORT` in `artifact.toml` only)
- editing `artifact.toml` directly
- editing `.replit` directly — **blocked**
- `configureWorkflow` targeting the **artifact-managed** workflow name (`artifacts/<slug>: web`) → `PROHIBITED_ACTION` (artifact-managed, can't override)

## The fix that works
Create a **separately-named** workflow with `configureWorkflow` (it IS the documented owner of port mappings, and DOES write `[[ports]]` into `.replit`):

```
configureWorkflow({
  name: "<Something> Dev Server",      // NOT "artifacts/<slug>: web"
  command: "PORT=5000 BASE_PATH=/ pnpm --filter @workspace/<slug> run dev",
  waitForPort: 5000,                   // use a supported port (e.g. 5000)
  outputType: "webview",
  autoStart: true,
})
```

After this, `.replit` gains `localPort = 5000 / externalPort = 5000`, the detector sees it, the workflow runs durably, and the path-router proxy serves `:80/<previewPath>` → 5000 regardless of which workflow runs Vite.

**How to apply:**
- The artifact-managed `artifacts/<slug>: web` workflow will remain "failed" — leave it idle. Do NOT start it while the separate dev-server workflow runs; both bind the same port and conflict.
- Pick a port from the supported set (3000–9000 range incl. 5000); the port number alone isn't enough — it must be registered via `configureWorkflow`.

## Production is unaffected
If the artifact's production serve is `static` (Vite build → `dist/public`), publishing/deploy reads `artifact.toml` directly and serves static files — it never depends on the dev port detector. Production deploy works even while the dev workflow shows failed.
