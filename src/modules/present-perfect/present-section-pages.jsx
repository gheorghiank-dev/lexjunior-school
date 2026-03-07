// Present Perfect section->page components registry

import PresentPerfectAffirmativeTheoryPage from "./theory/PresentPerfectAffirmativeTheoryPage.jsx";
import PresentPerfectNegativeTheoryPage from "./theory/PresentPerfectNegativeTheoryPage.jsx";
import PresentPerfectInterrogativeTheoryPage from "./theory/PresentPerfectInterrogativeTheoryPage.jsx";
import PresentPerfectUsesTheoryPage from "./theory/PresentPerfectUsesTheoryPage.jsx";
import PresentPerfectTimeExpressionsTheoryPage from "./theory/PresentPerfectTimeExpressionsTheoryPage.jsx";

export const PRESENT_PERFECT_SECTION_PAGES = {
  affirmative: {
    theory: PresentPerfectAffirmativeTheoryPage,
    rooms: [],
  },
  negative: {
    theory: PresentPerfectNegativeTheoryPage,
    rooms: [],
  },
  interrogative: {
    theory: PresentPerfectInterrogativeTheoryPage,
    rooms: [],
  },
  uses: {
    theory: PresentPerfectUsesTheoryPage,
    rooms: [],
  },
  "time-expressions": {
    theory: PresentPerfectTimeExpressionsTheoryPage,
    rooms: [],
  },
};
