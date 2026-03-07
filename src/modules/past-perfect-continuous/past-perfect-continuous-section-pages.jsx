// Past Perfect Continuous section->page components registry

import PastPerfectContinuousAffirmativeTheoryPage from "./theory/PastPerfectContinuousAffirmativeTheoryPage.jsx";
import PastPerfectContinuousNegativeTheoryPage from "./theory/PastPerfectContinuousNegativeTheoryPage.jsx";
import PastPerfectContinuousInterrogativeTheoryPage from "./theory/PastPerfectContinuousInterrogativeTheoryPage.jsx";
import PastPerfectContinuousUsesTheoryPage from "./theory/PastPerfectContinuousUsesTheoryPage.jsx";
import PastPerfectContinuousTimeExpressionsTheoryPage from "./theory/PastPerfectContinuousTimeExpressionsTheoryPage.jsx";

export const PAST_PERFECT_CONTINUOUS_SECTION_PAGES = {
  affirmative: {
    theory: PastPerfectContinuousAffirmativeTheoryPage,
    rooms: [],
  },
  negative: {
    theory: PastPerfectContinuousNegativeTheoryPage,
    rooms: [],
  },
  interrogative: {
    theory: PastPerfectContinuousInterrogativeTheoryPage,
    rooms: [],
  },
  uses: {
    theory: PastPerfectContinuousUsesTheoryPage,
    rooms: [],
  },
  "time-expressions": {
    theory: PastPerfectContinuousTimeExpressionsTheoryPage,
    rooms: [],
  },
};
