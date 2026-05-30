# Ofoq Al Diafah — أفق الضيافة

A self-contained Arabic (RTL) Umrah / hospitality operations dashboard served as a web app. The entire application is a single, client-side HTML file (24 pages) with no backend dependency — data lives in the browser via IndexedDB and localStorage.

## Run & Operate

- **Web app (dev):** workflow `artifacts/ofoq-al-diafah: web` runs the Vite dev server on port 5000 — `PORT=5000 BASE_PATH=/ pnpm --filter @workspace/ofoq-al-diafah run dev`
- `pnpm --filter @workspace/api-server run dev` — run the API server (scaffold only; the app does not use it)
- `pnpm run typecheck` — full typecheck across all packages
- Production build: `PORT=5000 BASE_PATH=/ NODE_ENV=production pnpm --filter @workspace/ofoq-al-diafah run build` → static output in `dist/public/`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Web artifact: Vite 7 serving a single static `index.html` (no framework runtime)
- API scaffold: Express 5 (present but unused by the app)
- Build: Vite (static), production serve is `static` from `dist/public`

## Where things live

- `artifacts/ofoq-al-diafah/index.html` — the entire application (~13.9k lines): all 24 pages, styles, scripts, data-URL images. Source of truth for all app behavior.
- `artifacts/ofoq-al-diafah/vite.config.ts` — Vite config. **Throws if `PORT` or `BASE_PATH` env vars are missing** — always set both for any manual build/run.
- `artifacts/ofoq-al-diafah/.replit-artifact/artifact.toml` — artifact config (localPort 5000, production serve = static).

## Architecture decisions

- **Served as-is, not rebuilt in React.** The app is a complete, working self-contained HTML file. It is served verbatim for full fidelity rather than being ported to a framework.
- **100% client-side persistence.** State is stored in the browser using IndexedDB and localStorage (keys prefixed `oad_`). There is no server-side database for app data.
- **Only external dependency is the Google Fonts CDN.** All images are inlined as data-URLs.
- **Dev server runs under the artifact-managed `artifacts/ofoq-al-diafah: web` workflow** on port 5000 (registered in `.replit`) — see Gotchas.

## Product

A hospitality operations platform for managing Umrah/pilgrimage guest services: sign-in/sign-up, agency management, and ~24 operational pages. Arabic-first, right-to-left UI with a gold/dark visual identity.

## User preferences

- Keep the app as a single served HTML file — do not rebuild it in a frontend framework.

## Gotchas

- **The dev workflow needs its port registered in `.replit`.** A newly-created web artifact's port (here 5000) is not auto-synced into `.replit`, so the platform's port detector marks the workflow "failed" and kills Vite. Once port 5000 is present under `[[ports]]` in `.replit`, the artifact workflow `artifacts/ofoq-al-diafah: web` runs healthy. See `.agents/memory/artifact-port-registration.md` for how the port got registered if it ever drops out.
- `vite.config.ts` throws without `PORT` and `BASE_PATH` — set both for any build or run outside the workflow.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- See `.agents/memory/` for the platform port-registration finding behind the workflow setup
