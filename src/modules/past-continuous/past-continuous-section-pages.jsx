// Past Continuous section->page components registry

import PastContinuousAffirmativeTheoryPage from "./theory/PastContinuousAffirmativeTheoryPage.jsx";
import PastContinuousNegativeTheoryPage from "./theory/PastContinuousNegativeTheoryPage.jsx";
import PastContinuousInterrogativeTheoryPage from "./theory/PastContinuousInterrogativeTheoryPage.jsx";
import PastContinuousUsesTheoryPage from "./theory/PastContinuousUsesTheoryPage.jsx";
import PastContinuousTimeExpressionsTheoryPage from "./theory/PastContinuousTimeExpressionsTheoryPage.jsx";

export const PAST_CONTINUOUS_SECTION_PAGES = {
  affirmative: {
    theory: PastContinuousAffirmativeTheoryPage,
    rooms: [],
  },
  negative: {
    theory: PastContinuousNegativeTheoryPage,
    rooms: [],
  },
  interrogative: {
    theory: PastContinuousInterrogativeTheoryPage,
    rooms: [],
  },
  uses: {
    theory: PastContinuousUsesTheoryPage,
    rooms: [],
  },
  "time-expressions": {
    theory: PastContinuousTimeExpressionsTheoryPage,
    rooms: [],
  },
};
