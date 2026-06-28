---
name: VARIABLES.md maintenance
description: User requires VARIABLES.md at project root to be kept current after any structural change to the app.
---

# VARIABLES.md Maintenance Rule

The file `VARIABLES.md` at the project root is a living reference document the user reads to understand and control the app's data structures. It must be kept accurate.

## The rule

After completing any task that touches data structure — update `VARIABLES.md` before finishing. This includes:

- Adding, removing, or renaming a field on any data entity (hotel, voucher, mutamer, reservation, bus company, tour, provider, client company, ticket, settings)
- Adding or removing a sub-array or nested object (e.g. a new sub-table inside a hotel)
- Adding, removing, or renaming a JavaScript global variable or module-level counter
- Adding or renaming a CSS custom property (design token)
- Adding or removing a lookup list key

## What NOT to update for

- Pure UI / label / copy changes (no data structure change)
- Bug fixes that don't add/remove fields
- Logic changes inside functions that don't affect the saved object shape

## How to apply

1. Identify which section(s) of `VARIABLES.md` are affected.
2. Edit only those sections — do not rewrite the whole file unless a major restructure happened.
3. Keep the same table format (Field / Type / Description).

**Why:** The user explicitly requested this as a persistent preference (added to `replit.md` User preferences section). Failing to update the file after structural changes breaks the user's ability to use it as a control reference.
