---
name: Artifact dev-server port registration in .replit
description: Why a new web artifact's dev workflow fails port detection, and how to register the port so the artifact's own workflow runs healthy.
---

# New web artifact dev server fails the platform port check

## Symptom
A newly-created `web` artifact's managed workflow (`artifacts/<slug>: web`) is marked **failed** even though Vite starts fine and reports "ready". Binding is correct (IPv4 `0.0.0.0`, reachable on `127.0.0.1`). The proxy at `localhost:80/<previewPath>` serves the app *while* Vite is up, but the platform's port detector reports the port as not open, then kills the dev server, so the preview is not durable. In the artifact dropdown the app shows as "failed to run".

## Root cause
The platform's port detector / health check only monitors ports that are declared in `.replit` under `[[ports]]`. That list is populated at environment boot from the artifacts that existed then. A web artifact created *later* gets a port in its `artifact.toml` (`localPort`) but that port is **never synced into `.replit`**, so the detector never sees it → reports `DIDNT_OPEN_A_PORT` → kills the workflow.

**Why this matters:** the failure is NOT in the artifact's HTML/Vite config. It is purely missing `.replit` port registration. A fresh, unmodified scaffold fails the same way if its port isn't in `.replit`.

## What does NOT add the port to `.replit`
- `createArtifact` (even re-running it)
- `verifyAndReplaceArtifactToml` (changes `localPort`/`PORT` in `artifact.toml` only)
- editing `artifact.toml` directly
- editing `.replit` directly — **blocked**
- `configureWorkflow` targeting the **artifact-managed** workflow name (`artifacts/<slug>: web`) → `PROHIBITED_ACTION` (artifact-managed, can't override)

## The fix that works (two steps)
1. **Register the port** by creating a temporary, separately-named workflow with `configureWorkflow` (it IS the documented owner of port mappings and DOES write `[[ports]]` into `.replit`):
   ```
   configureWorkflow({
     name: "Temp Port Register",          // NOT "artifacts/<slug>: web"
     command: "PORT=5000 BASE_PATH=/ pnpm --filter @workspace/<slug> run dev",
     waitForPort: 5000,                    // a supported port, e.g. 5000
     outputType: "webview",
     autoStart: true,
   })
   ```
   This adds `localPort = 5000 / externalPort = 5000` to `.replit`.

2. **Hand serving back to the artifact's own workflow.** The `.replit` port entry **persists after the temp workflow is removed** (confirmed). So:
   - `removeWorkflow({ name: "Temp Port Register" })` to free the port,
   - `restart_workflow("artifacts/<slug>: web")` — it now passes detection (port is in `.replit` and free) and runs healthy.

End state: only the artifact-managed workflow runs, no "failed" badge, no extra workflow.

## Pitfalls
- Don't run two workflows bound to the same port at once — they conflict. Remove the temp one before starting the artifact workflow.
- Pick a port from the supported set (3000–9000 incl. 5000); the number alone isn't enough — it must be in `.replit [[ports]]`.

## Production is unaffected
If the artifact's production serve is `static` (Vite build → `dist/public`), publishing/deploy reads `artifact.toml` directly and serves static files — it never depends on the dev port detector. Production deploy works even if the dev workflow is misconfigured.
