# LexJunior – Universal Room Content Validator

This repo already has dev-only runtime checks (`validateRoomRegistry(...)`) inside some room modules. Those checks are great for local dev, but they run **inside the app**.

This validator is different: it runs **as a standalone Node script** and validates **only content fields**.

## What it validates (only)

For each room it checks:

- `exercises`
- `dictionaryItems`
- `lexHints`

It intentionally ignores JSX (`cardIntro`, `renderBody`), components, routes, gating/keys, and any UX wiring.

## How it discovers registries

It scans `src/**` for `*_ROOMS` arrays that include `exercises:` in the room objects.

It then loads those modules through **esbuild** (JSX-safe), forcing `import.meta.env.DEV=false` so that dev-only throwers don't explode in Node.

Some registries are not exported (example: `PS_TIME_EXPRESSIONS_ROOMS` is `const` only). The validator wraps the source and exports internal registries via `__VALIDATOR_CAPTURE__`.

## Run it

From the project root:

```bash
node scripts/validate-room-content.mjs
```

### JSON output

```bash
node scripts/validate-room-content.mjs --json
```

### Filter to a subset of files

```bash
# Only validate Present Simple content files
node scripts/validate-room-content.mjs --only "present-simple/ps-content"
```

### CI-friendly (strict)

```bash
node scripts/validate-room-content.mjs --strict
```

Exit codes:
- `0` = OK (no ERROR)
- `2` = ERROR found

## Notes

- The validator relies on `esbuild`, which is already a dependency of Vite (installed after `npm install`).
- It never mutates app code or registries.
