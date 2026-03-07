// Past Perfect section->page components registry

import PastPerfectAffirmativeTheoryPage from "./theory/PastPerfectAffirmativeTheoryPage.jsx";
import PastPerfectNegativeTheoryPage from "./theory/PastPerfectNegativeTheoryPage.jsx";
import PastPerfectInterrogativeTheoryPage from "./theory/PastPerfectInterrogativeTheoryPage.jsx";
import PastPerfectUsesTheoryPage from "./theory/PastPerfectUsesTheoryPage.jsx";
import PastPerfectTimeExpressionsTheoryPage from "./theory/PastPerfectTimeExpressionsTheoryPage.jsx";

export const PAST_PERFECT_SECTION_PAGES = {
  affirmative: {
    theory: PastPerfectAffirmativeTheoryPage,
    rooms: [],
  },
  negative: {
    theory: PastPerfectNegativeTheoryPage,
    rooms: [],
  },
  interrogative: {
    theory: PastPerfectInterrogativeTheoryPage,
    rooms: [],
  },
  uses: {
    theory: PastPerfectUsesTheoryPage,
    rooms: [],
  },
  "time-expressions": {
    theory: PastPerfectTimeExpressionsTheoryPage,
    rooms: [],
  },
};
