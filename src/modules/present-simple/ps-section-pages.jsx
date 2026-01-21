// Present Simple section->page components registry
// Kept separate from ps-manifest to avoid circular imports with generic routes.

// Section pages
import PsAffirmativeTheoryPage from "./PsAffirmativeTheoryPage.jsx";

import PsNegativeTheoryPage from "./PsNegativeTheoryPage.jsx";

import PsInterrogativeTheoryPage from "./PsInterrogativeTheoryPage.jsx";

import PsUsesTheoryPage from "./PsUsesTheoryPage.jsx";
import PsUsesSensoryTheoryPage from "./PsUsesSensoryTheoryPage.jsx";

import PsTimeExpressionsTheoryPage from "./PsTimeExpressionsTheoryPage.jsx";

/** Read-only mapping of section -> page components. */
export const PS_SECTION_PAGES = {
  affirmative: {
    theory: PsAffirmativeTheoryPage,
    rooms: [],
  },
  negative: {
    theory: PsNegativeTheoryPage,
    rooms: [],
  },
  interrogative: {
    theory: PsInterrogativeTheoryPage,
    rooms: [],
  },
  uses: {
    theory: PsUsesTheoryPage,
    // note: Uses has an extra sensory theory route (kept as-is)
    sensoryTheory: PsUsesSensoryTheoryPage,
    rooms: [],
  },
  "time-expressions": {
    theory: PsTimeExpressionsTheoryPage,
    rooms: [],
  },
};
