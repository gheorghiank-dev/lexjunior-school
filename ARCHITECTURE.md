# Lex Junior English Lab – Architecture Notes (Baseline Sprint 9)

Acest document descrie structura proiectului **React + Vite** și regulile de separare (boundaries) stabilite în sprinturile 1–9.

## Obiectiv

- **Engine reutilizabil** (agnostic de timp verbal) în `src/core/**`.
- **Timpurile verbale** sunt module în `src/modules/*` (ex: Present Simple, Present Continuous).
- UI (Home/Grammar/Tenses/Nav) este **driven-by-registry**: paginile nu mai hardcodează liste.
- În sprinturile următoare, vom adăuga **Modes** (School/Production) fără să stricăm engine-ul sau schema localStorage.

## Folder map

### `src/core/**` (TENSA-AGNOSTIC)
Conține logica de joc reutilizabilă pentru orice timp:
- progress manager (chei, încercări, passed, overview)
- gating „theory done”
- storage helpers (namespaced localStorage)
- room engine (normalize, HUD helpers etc.)

**Regulă:** `src/core/**` NU trebuie să importe din `src/modules/**`.

### `src/modules/**` (FEATURES / MODULES)

#### Tenses
- `src/modules/present-simple/**` – pagini + conținut specific Present Simple
- `src/modules/present-continuous/**` – skeleton/preview (pe core engine)
- `src/modules/tenses/**` – pagini/komponente reutilizabile pentru hub-ul Tenses

Fiecare tense are un „manifest” (module file) care declară:
- `id`, `label`, `basePath`, `routes`
- metadata UI: `status`, `order`, `description`
- UI/theming: `themeClass`
- assets: `assetsBase`, `brandAvatarSrc`

#### Registries (single source of truth)
- `src/modules/tenses/registry.js` – timpuri + rute + cards
- `src/modules/grammar-hub/registry.js` – cards pentru pagina Grammar
- `src/modules/app-nav/registry.js` – meniul de sus

Utilitare comune pentru registries:
- `src/modules/registry-utils/**`

### `src/pages/**` (PAGES)
Paginile de nivel 1 (Home, Grammar, Tenses). Ele **nu hardcodează** liste; primesc datele din registry.

### `src/present-simple-core/**` (COMPAT LAYER)
Fațadă/shims pentru compatibilitate cu vechiul import structure din Present Simple.
Scop: minimizarea schimbărilor în paginile PS, păstrând comportamentul identic.


## Content registries (rooms)
Conținutul camerelor (exerciții, glosar, intro, hints) stă în module, ca registries (arrays de room definitions).

- Validare dev-only: `src/core/registry/validate-room-registry.js`
- Builder opțional (reduce repetiția pe secțiuni/rooms): `src/core/registry/room-registry-builder.js`
  - `createSectionRoomRegistry({ registryName, sectionId, sectionLabel, rooms, expectedRoomNumbers })`
  - `range1to(n)` (helper pentru expectedRoomNumbers)

Guardrail: core rămâne agnostic (builderul doar combină obiecte + rulează validarea în DEV).

## Cum adaugi un timp nou (ex: Past Simple)
1) Creezi folderul: `src/modules/past-simple/**`
2) Creezi manifest: `src/modules/past-simple/past-simple.module.jsx`
   - definești `id`, `label`, `basePath`, `routes`, `status`, `order`
   - (opțional) `themeClass`, `assetsBase`, `brandAvatarSrc`
3) Îl înregistrezi în `src/modules/tenses/registry.js`.
4) UI se actualizează automat în:
   - Grammar hub (dacă există card pentru Tenses)
   - Tenses page (auto din registry)
   - Theme (auto prin `getTenseThemeClassForPath`)

## Modes (urmează)
Vom introduce un layer nou: `src/modes/**`:
- `src/modes/production/**`
- `src/modes/school/**`

**Regulă:** logica School Mode trebuie izolată în `src/modes/school/**` și integrată în UI printr-un flag global (ex: `BUILD_MODE`).

## Guardrails
Proiectul include un script de verificare boundary:
- `npm run guard:core-boundaries`

Acesta verifică faptul că `src/core/**` nu importă nimic din `src/modules/**`.
