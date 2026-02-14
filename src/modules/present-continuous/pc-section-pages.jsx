// Present Continuous section->page components registry
// Mirrors the Present Simple registry, but for Present Continuous.

// Section pages
import PcAffirmativeTheoryPage from "./theory/PcAffirmativeTheoryPage.jsx";
import PcNegativeTheoryPage from "./theory/PcNegativeTheoryPage.jsx";
import PcInterrogativeTheoryPage from "./theory/PcInterrogativeTheoryPage.jsx";
import PcUsesTheoryPage from "./theory/PcUsesTheoryPage.jsx";
import PcUsesSensoryTheoryPage from "./theory/PcUsesSensoryTheoryPage.jsx";
import PcTimeExpressionsTheoryPage from "./theory/PcTimeExpressionsTheoryPage.jsx";

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
    // Uses are special: they also have a sensory theory page.
    sensoryTheory: PcUsesSensoryTheoryPage,
    rooms: [],
  },
  "time-expressions": {
    theory: PcTimeExpressionsTheoryPage,
    rooms: [],
  },
};
