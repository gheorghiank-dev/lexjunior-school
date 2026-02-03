// Present Continuous section->page components registry
// Mirrors the Present Simple registry, but for Present Continuous.

import PcAffirmativeTheoryPage from "./pages/PcAffirmativeTheoryPage.jsx";
import PcNegativeTheoryPage from "./pages/PcNegativeTheoryPage.jsx";
import PcInterrogativeTheoryPage from "./pages/PcInterrogativeTheoryPage.jsx";
import PcUsesTheoryPage from "./pages/PcUsesTheoryPage.jsx";
import PcUsesSensoryTheoryPage from "./pages/PcUsesSensoryTheoryPage.jsx";
import PcTimeExpressionsTheoryPage from "./pages/PcTimeExpressionsTheoryPage.jsx";

/** Read-only mapping of section -> page components. */
export const PC_SECTION_PAGES = {
  affirmative: {
    theory: PcAffirmativeTheoryPage,
    rooms: [],
  },
  negative: {
    theory: PcNegativeTheoryPage,
    rooms: [],
  },
  interrogative: {
    theory: PcInterrogativeTheoryPage,
    rooms: [],
  },
  uses: {
    theory: PcUsesTheoryPage,
    // Uses has an extra sensory theory route.
    sensoryTheory: PcUsesSensoryTheoryPage,
    rooms: [],
  },
  "time-expressions": {
    theory: PcTimeExpressionsTheoryPage,
    rooms: [],
  },
};
