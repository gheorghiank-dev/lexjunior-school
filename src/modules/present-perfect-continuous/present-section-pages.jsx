// Present Perfect Continuous section->page components registry

import PresentPerfectContinuousAffirmativeTheoryPage from "./theory/PresentPerfectContinuousAffirmativeTheoryPage.jsx";
import PresentPerfectContinuousNegativeTheoryPage from "./theory/PresentPerfectContinuousNegativeTheoryPage.jsx";
import PresentPerfectContinuousInterrogativeTheoryPage from "./theory/PresentPerfectContinuousInterrogativeTheoryPage.jsx";
import PresentPerfectContinuousUsesTheoryPage from "./theory/PresentPerfectContinuousUsesTheoryPage.jsx";
import PresentPerfectContinuousTimeExpressionsTheoryPage from "./theory/PresentPerfectContinuousTimeExpressionsTheoryPage.jsx";

export const PRESENT_PERFECT_CONTINUOUS_SECTION_PAGES = {
  affirmative: {
    theory: PresentPerfectContinuousAffirmativeTheoryPage,
    rooms: [],
  },
  negative: {
    theory: PresentPerfectContinuousNegativeTheoryPage,
    rooms: [],
  },
  interrogative: {
    theory: PresentPerfectContinuousInterrogativeTheoryPage,
    rooms: [],
  },
  uses: {
    theory: PresentPerfectContinuousUsesTheoryPage,
    rooms: [],
  },
  "time-expressions": {
    theory: PresentPerfectContinuousTimeExpressionsTheoryPage,
    rooms: [],
  },
};
