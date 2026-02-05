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

- `src/modules/present-simple/**` – pagini + conținut specific Present Simple (arhitectură completă, data-driven).
- `src/modules/present-continuous/**` – preview/skeleton pe același engine, cu content inline în pagini (în curs de migrare spre registries).
- `src/modules/tenses/**` – contractul TenseKit + UI comun pentru hub-ul /tenses.

Fiecare timp are acum două nivele clare:

1. **Manifest** (read-only data)

   Exemple:
   - `src/modules/present-simple/ps-manifest.jsx`
   - `src/modules/present-continuous/pc-manifest.jsx`

   Manifestul descrie:
   - identitate:
     - `id`, `label`, `status`, `order`, `description`
   - routing:
     - `basePath`
     - `routes` (prin `buildPresentSimpleRoutes()` / `buildPresentContinuousRoutes()`)
   - progres:
     - `storagePrefix`
     - `roomsPerSection`
     - `sections` (cele 5 ramuri standard: affirmative, negative, interrogative, uses, time-expressions)
     - `sectionsMeta` (titlu + descriere per secțiune)
   - content:
     - `roomRegistries` – liste de camere pe ramuri:
       - complet data-driven pentru Present Simple (PS\_\*\_ROOMS)
       - legat de `PC_SECTION_PAGES` pentru Present Continuous (preview)
   - Lex Junior:
     - `hintsRegistry` – hints organizate pe ramuri + badge (complet pentru Present Simple, placeholder pentru PC)
   - HUD:
     - `hudText` – mesaje fixe pentru HUD, consumate de engine
   - theming & assets:
     - `themeClass` – clasa CSS aplicată pe `.app-shell` când tensul e activ
     - `assetsBase`, `brandAvatarSrc` – bază pentru assets și avatar Lex

2. **Tense module** (TenseKit)

   Exemple:
   - `src/modules/present-simple/present-simple.module.jsx`
   - `src/modules/present-continuous/present-continuous.module.jsx`

   Fiecare module arată, în esență, așa:

   ```js
   import {
     PRESENT_SIMPLE_MANIFEST,
     buildPresentSimpleRoutes,
   } from "./ps-manifest.jsx";
   import { createTenseModule } from "../../core/tense/tense-kit.js";

   export default createTenseModule(
     PRESENT_SIMPLE_MANIFEST,
     buildPresentSimpleRoutes(),
   );
   ```

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

Scop: să poți porni un nou timp (ex. Past Simple) pe aceeași arhitectură, fără să copiezi engine-ul.

1. Creezi folderul de modul:
   - `src/modules/past-simple/**`

2. Definiție de manifest (ex. `src/modules/past-simple/ps-manifest.jsx`):

   Pornești de la `ps-manifest.jsx` (Present Simple) ca șablon și adaptezi:
   - `id`: `"past-simple"`
   - `label`: `"Past Simple"`
   - `basePath`: `"/grammar/tenses/past-simple"`
   - `storagePrefix`: ex. `"ljel/past-simple"`
   - `roomsPerSection`: obiect cu 5 ramuri × 7 camere (aceeași matrice ca la Present Simple):
     - `affirmative: 7`, `negative: 7`, `interrogative: 7`, `uses: 7`, `"time-expressions": 7`
   - `sections`: array cu cele 5 ramuri standard (poți copia din PS)
   - `sectionsMeta`: titlu + descriere pentru fiecare ramură (vizibile în overview / map, pe viitor)
   - `roomRegistries`:
     - la început poți seta `null` sau `{}` (preview-only),
     - când ești gata, muți conținutul camerelor într-un registry data-driven (ca `PS_AFFIRMATIVE_ROOMS` în Present Simple)
   - `hintsRegistry`:
     - începi cu `{}` sau doar cu `badge`,
     - apoi adaugi LexHints per ramură (respectând regula: task → rule (exemple noi) → strategie → motivare)
   - `hudText`:
     - textele HUD specifice timpului (copiat/adaptat după PS/PC)
   - `themeClass`, `assetsBase`, `brandAvatarSrc`:
     - definești tema de culoare pentru timp (gradiente, chips, butoane)
     - seturi de assets (SVG Lex pentru Past Simple, pdf-uri etc.)

3. Definiție de rute:

   În același fișier sau într-un fișier separat (similar cu PS/PC) definești:

   ```js
   export function buildPastSimpleRoutes() {
     const routes = [
       // modul root, overview, map, badge etc.
     ];

     // rute de teorie per secțiune
     // rute de room generic: `${BASE_PATH}/${sectionId}/:roomSlug`

     return routes;
   }
   ```

## Modes (urmează)

Vom introduce un layer nou: `src/modes/**`:

- `src/modes/production/**`
- `src/modes/school/**`

**Regulă:** logica School Mode trebuie izolată în `src/modes/school/**` și integrată în UI printr-un flag global (ex: `BUILD_MODE`).

## Guardrails

Proiectul include un script de verificare boundary:

- `npm run guard:core-boundaries`

Acesta verifică faptul că `src/core/**` nu importă nimic din `src/modules/**`.
