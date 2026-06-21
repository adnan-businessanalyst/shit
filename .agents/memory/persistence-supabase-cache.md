---
name: Persistence — Supabase _cache overrides localStorage
description: How the Ofoq app actually persists data (not purely client-side) and how to seed test data despite it.
---

# Persistence is NOT purely client-side

`replit.md` says the app is "100% client-side" (localStorage/IndexedDB). In reality the running app, when Supabase constants are configured, creates a Supabase client at load and pulls the `oad_kv` table into an in-memory object `_cache` (see the `[OAD] Supabase ready` console log). Both `DB.load(key)` and `Prefs.get(key)` read from `_cache` first and only fall back to `localStorage`.

**Consequence:** seeding `localStorage` (e.g. `oad_hotels`, `oad_lookups`) before/at load is IGNORED — `_cache` (from Supabase) wins. Reloading does not help.

**Why it matters:** any e2e test or manual repro that relies on injecting browser storage will silently use the real synced data instead.

## How to seed test data for e2e

Inject directly into the running app's in-memory globals via page `evaluate` (they are top-level `let`/`const` bindings, reachable by bare name in the page realm — same as the DevTools console):

- Hotels list: mutate the global `hotels` array in place, e.g. `hotels.length=0; hotels.push({...})`. Do not reassign.
- Lookups (room-type / view / meal dropdown sources): set `_cache['pref_lookups'] = JSON.stringify({types:[...]})`. `getLookupList('types')` reads this.

**Booking-modal room-type dropdown comes from `getLookupList('types')`, NOT from the selected hotel's `roomTypes`.** The hotel's `roomTypes[].type` strings must match the lookup `types` values, or the app can't find the room config (`h.roomTypes.find(r=>r.type===selected)` fails) and falls back to contractType `none`. This is the #1 cause of "the contract selector shows none / disabled" in tests.

## Safety for tests

The testing browser context is isolated from the user's browser, BUT the app writes through to the shared Supabase `oad_kv` on save. So in tests, NEVER click save / call `saveB2CBooking` etc. — replicate collector logic read-only instead if you only need to inspect what would be saved.
