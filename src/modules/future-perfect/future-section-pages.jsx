// Future Perfect section->page components registry

import FuturePerfectAffirmativeTheoryPage from "./theory/FuturePerfectAffirmativeTheoryPage.jsx";
import FuturePerfectNegativeTheoryPage from "./theory/FuturePerfectNegativeTheoryPage.jsx";
import FuturePerfectInterrogativeTheoryPage from "./theory/FuturePerfectInterrogativeTheoryPage.jsx";
import FuturePerfectUsesTheoryPage from "./theory/FuturePerfectUsesTheoryPage.jsx";
import FuturePerfectTimeExpressionsTheoryPage from "./theory/FuturePerfectTimeExpressionsTheoryPage.jsx";

export const FUTURE_PERFECT_SECTION_PAGES = {
  affirmative: {
    theory: FuturePerfectAffirmativeTheoryPage,
    rooms: [],
  },
  negative: {
    theory: FuturePerfectNegativeTheoryPage,
    rooms: [],
  },
  interrogative: {
    theory: FuturePerfectInterrogativeTheoryPage,
    rooms: [],
  },
  uses: {
    theory: FuturePerfectUsesTheoryPage,
    rooms: [],
  },
  "time-expressions": {
    theory: FuturePerfectTimeExpressionsTheoryPage,
    rooms: [],
  },
};
