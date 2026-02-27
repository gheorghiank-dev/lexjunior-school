# Tense Module Blueprint (LJEL)

Scop: orice timp nou (ex: Future Simple) trebuie să respecte aceeași structură ca:

- Present Simple (`src/modules/present-simple`)
- Present Continuous (`src/modules/present-continuous`)
- Past Simple (`src/modules/past-simple`)

Obiectiv: pentru un timp nou, schimbăm DOAR conținutul (exerciții, texte, teorie, hints), nu logica.

---

## 1. Structura de foldere pentru un timp

Un modul de timp trăiește în:

`src/modules/<tense-id>/`

Exemple:

- `src/modules/present-simple/`
- `src/modules/present-continuous/`
- `src/modules/past-simple/`
- în viitor: `src/modules/future-simple/`, etc.

În interior, trebuie să existe:

- `components/` – componente specifice timpului (structure blocks, exerciții speciale care NU sunt globale)
- `<tense>-core/` – config, storage, progress, HUD & room engine
- `rooms/` – registrii de camere (datele exercițiilor)
- `theory/` – pagini de teorie pentru fiecare secțiune
- `pages/` – paginile de routare (overview, map, badge, etc.)
- `<tense>-manifest.jsx` – conectează rooms + theory + lex-hints + pages la TenseKit
- `<tense>-paths.js` – definește căile interne pentru rute
- `<tense>-theme.css` – tema vizuală pentru timp (culori, accente)
- `<tense>.module.jsx` – exportă modulul de timp pentru registrul global

---

## 2. Contractul pentru `<tense>-core/`

Folder: `src/modules/<tense>/<tense>-core/`

Fișiere obligatorii:

### 2.1. `config.js`

Definește aliasuri neutre pentru TenseKit:

    export const STORAGE_PREFIX = "<short_prefix>_";
    export const ROOMS_PER_SECTION = 7;

    export const SECTIONS = [
      { id: "affirmative", title: "...", description: "..." },
      { id: "negative", title: "...", description: "..." },
      { id: "interrogative", title: "...", description: "..." },
      { id: "uses", title: "...", description: "..." },
      { id: "time-expressions", title: "...", description: "..." },
    ];

    export const HUD_TEXT = {
      keyObtainedLabel: "...",
      // restul etichetelor de HUD pentru acest timp
    };

(opțional pot exista și constante specifice, ex: `PS_SECTIONS`, dar TenseKit lucrează cu `STORAGE_PREFIX`, `SECTIONS`, `ROOMS_PER_SECTION`, `HUD_TEXT`)

### 2.2. `storage.js`

Definește storage-ul pentru progresul pe timp:

    import { createTenseStorage } from "../../tenses/core/tense-progress-kit.js";
    import { STORAGE_PREFIX } from "./config.js";

    export const storage = createTenseStorage(STORAGE_PREFIX);

### 2.3. `progress-manager.js`

Managerul de progres pentru camerele acestui timp:

    import { ROOMS_PER_SECTION, SECTIONS } from "./config.js";
    import { storage } from "./storage.js";
    import { createTenseProgressManager } from "../../tenses/core/tense-progress-kit.js";

    // Room-level progress manager (per section / room)
    export const progressManager = createTenseProgressManager({
      storage,
      roomsPerSection: ROOMS_PER_SECTION,
      sections: SECTIONS,
    });

### 2.4. `normalize-answer.js`

De obicei re-exportă normalizarea globală, dar permite override pe timp dacă e nevoie:

    export { normalizeAnswer } from "../../../core/room-engine/normalize-answer.js";

### 2.5. `useRoomEngine.js`

Leagă engine-ul global de configurarea acestui timp:

    import { createUseTenseRoomEngine } from "../../tenses/core/useTenseRoomEngine.js";
    import { normalizeAnswer } from "./normalize-answer.js";
    import { progressManager } from "./progress-manager.js";
    import { HUD as CoreHUD } from "../../../core/room-engine/hud.js";
    import { HUD_TEXT } from "./config.js";

    const BoundHUD = class extends CoreHUD {
      constructor(root) {
        super(root, HUD_TEXT);
      }
    };

    export const useRoomEngine = createUseTenseRoomEngine({
      normalizeAnswer,
      progressManager,
      HUD: BoundHUD,
    });

---

## 3. Contractul pentru `rooms/`

Folder: `src/modules/<tense>/rooms/`

Pattern: câte un fișier pentru fiecare secțiune + eventual pentru badge / time-expressions speciale.

Exemple de nume (generic):

- `<TENSE>_AFFIRMATIVE_ROOMS`
- `<TENSE>_NEGATIVE_ROOMS`
- `<TENSE>_INTERROGATIVE_ROOMS`
- `<TENSE>_USES_ROOMS`
- `<TENSE>_TIME_EXPRESSIONS_ROOMS`
- `<TENSE>_BADGE_ROOMS` (dacă e nevoie)

Fiecare fișier exportă:

- `<TENSE>_<SECTION>_EXERCISES_BY_ROOM` – map: `roomNumber -> [exerciții]`
- `<TENSE>_<SECTION>_ROOMS` – array de camere (id, roomNumber, exercises, etc.)

Opțional: `rooms/index.js` care re-exportă toate `*_ROOMS` și `*_EXERCISES_BY_ROOM` pentru import mai curat în manifest.

IMPORTANT: AICI se schimbă exercițiile când clonăm un timp nou.

---

## 4. Contractul pentru `theory/`

Folder: `src/modules/<tense>/theory/`

Paginile principale (minim):

- `<Tense>AffirmativeTheoryPage.jsx`
- `<Tense>NegativeTheoryPage.jsx`
- `<Tense>InterrogativeTheoryPage.jsx`
- `<Tense>UsesTheoryPage.jsx`
- `<Tense>TimeExpressionsTheoryPage.jsx`

Opțional (recomandat pentru simetrie):

- `<Tense>UsesSensoryTheoryPage.jsx` – sensory theory pentru secțiunea Uses.

Toate paginile de teorie trebuie să folosească componenta globală:

- `TenseTheoryPageShell`
- `TenseTheorySectionCard`
- `TenseTheoryNextSteps`
- `TenseTheoryCommonMistakesCard`
- `TenseLexStudyTipCard`

IMPORTANT: AICI se schimbă conținutul de teorie (texte, exemple, structuri).

---

## 5. Contractul pentru `pages/`

Folder: `src/modules/<tense>/pages/`

Paginile standard pentru orice timp:

- `<Tense>OverviewPage.jsx` – overview-ul timpului
- `<Tense>MapPage.jsx` – harta camerelor pentru timp
- `<Tense>BadgePage.jsx` – pagina de badge / progres global
- `<Tense>RoomRoute.jsx` sau `<Tense>RoomsRoute.jsx` – wrapper de route, dacă e nevoie
- alte pagini speciale (Downloads / Notes etc.) – opționale, nu obligatorii pentru toate timpurile

Aceste pagini folosesc UI-ul global din `modules/tenses/ui`:

- `TenseMapPage`
- `TenseBadgeRoom`
- `TenseRoomRoute`
- etc.

---

## 6. Manifestul de timp: `<tense>-manifest.jsx`

Fișier: `src/modules/<tense>/<tense>-manifest.jsx`

Responsabilități:

1. Importă:
   - registrii de camere (`*_ROOMS` / `*_ROOMS_CONFIG`)
   - paginile de teorie
   - paginile de overview / map / badge
   - lex-hints pentru acest timp
   - `useRoomEngine` din `<tense>-core/useRoomEngine.js`
   - `ROOMS_PER_SECTION`, `SECTIONS`, `HUD_TEXT` din `config.js`

2. Construiește un obiect de configurare pentru TenseKit:

   import { defineTenseModule } from "../tenses/core/defineTenseModule.js";

   export const <TENSE>\_MODULE = defineTenseModule({
   id: "<tense-id>", // ex: "present-simple"
   title: "...",
   shortTitle: "...",
   colorToken: "--ps-accent", // variabilă CSS din <tense>-theme.css
   sections: SECTIONS,
   roomsPerSection: ROOMS_PER_SECTION,
   useRoomEngine,
   roomsConfig: <TENSE>\_ROOMS_CONFIG,
   theoryPages: {
   affirmative: <Tense>AffirmativeTheoryPage,
   negative: <Tense>NegativeTheoryPage,
   interrogative: <Tense>InterrogativeTheoryPage,
   uses: <Tense>UsesTheoryPage,
   timeExpressions: <Tense>TimeExpressionsTheoryPage,
   },
   mapPage: <Tense>MapPage,
   overviewPage: <Tense>OverviewPage,
   badgePage: <Tense>BadgePage,
   lexHints: <TENSE>\_LEX_HINTS,
   });

3. Exportă modulul pentru registrul global:

   export default <TENSE>\_MODULE;

---

## 7. Modulul de top: `<tense>.module.jsx`

Fișier: `src/modules/<tense>/<tense>.module.jsx`

Poate fie să re-exporte manifestul:

    import <TENSE>_MODULE from "./<tense>-manifest.jsx";

    export default <TENSE>_MODULE;

sau să facă doar:

    export { <TENSE>_MODULE as default } from "./<tense>-manifest.jsx";

Important este să existe un `default` folosit în registry.

---

## 8. Integrarea în registrul de timpuri

Fișier: `src/modules/tenses/registry.js`

Pentru un timp nou, trebuie:

1. Să importăm modulul:

   import futureSimpleModule from "../future-simple/future-simple.module.jsx";

2. Să îl adăugăm în array-ul `modules`:

   const modules = [
   presentSimpleModule,
   presentContinuousModule,
   pastSimpleModule,
   futureSimpleModule,
   ];

Fișier: `src/access/passwords/config.js`

Adăugăm cheia de mediu pentru parolă:

    const TENSE_ENV_KEYS = {
      "present-simple": "VITE_PASSWORD_PRESENT_SIMPLE",
      "present-continuous": "VITE_PASSWORD_PRESENT_CONTINUOUS",
      "past-simple": "VITE_PASSWORD_PAST_SIMPLE",
      "future-simple": "VITE_PASSWORD_FUTURE_SIMPLE",
    };

---

## 9. Lex Hints pe timp

Folder: `src/modules/lex-hints/<tense>/`

Structură recomandată:

- `affirmative.js`
- `negative.js`
- `interrogative.js`
- `uses.js`
- `time-expressions.js`
- `badge.js`
- `index.js` – reexportă toate ca un singur obiect `<TENSE>_LEX_HINTS`.

IMPORTANT: AICI se schimbă textele de hint pentru fiecare cameră și secțiune.

---

## 10. “Surface-ul oficial” unde se schimbă conținutul pentru un timp nou

Când clonăm un timp nou, regula este:

> Logica rămâne neatinsă. Modificăm doar conținutul în fișierele de mai jos.

1. `src/modules/<tense>/<tense>-core/config.js`
   - `SECTIONS` (titluri, descrieri)
   - `HUD_TEXT` (texte HUD specifice timpului)

2. `src/modules/<tense>/theory/*.jsx`
   - conținut teoretic (explicații, exemple, structuri)
   - sensory theory (dacă există)

3. `src/modules/<tense>/rooms/*.jsx`
   - exerciții pe camere (MCQ, gap-fill, text input, sentence builder, etc.)
   - dictionaryItems, instructions, room intro texts

4. `src/modules/lex-hints/<tense>/*.js`
   - toate hint-urile Lex Junior pentru acest timp

5. `src/modules/<tense>/<tense>-theme.css`
   - culorile / accentele specifice timpului (păstrând variabilele și structura CSS globală)

Restul fișierelor (engine, HUD, TenseKit, UI shell, map, badge) sunt considerate stabile și nu se modifică atunci când creăm un timp nou.
