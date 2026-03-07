// Future Continuous section->page components registry

import FutureContinuousAffirmativeTheoryPage from "./theory/FutureContinuousAffirmativeTheoryPage.jsx";
import FutureContinuousNegativeTheoryPage from "./theory/FutureContinuousNegativeTheoryPage.jsx";
import FutureContinuousInterrogativeTheoryPage from "./theory/FutureContinuousInterrogativeTheoryPage.jsx";
import FutureContinuousUsesTheoryPage from "./theory/FutureContinuousUsesTheoryPage.jsx";
import FutureContinuousTimeExpressionsTheoryPage from "./theory/FutureContinuousTimeExpressionsTheoryPage.jsx";

export const FUTURE_CONTINUOUS_SECTION_PAGES = {
  affirmative: {
    theory: FutureContinuousAffirmativeTheoryPage,
    rooms: [],
  },
  negative: {
    theory: FutureContinuousNegativeTheoryPage,
    rooms: [],
  },
  interrogative: {
    theory: FutureContinuousInterrogativeTheoryPage,
    rooms: [],
  },
  uses: {
    theory: FutureContinuousUsesTheoryPage,
    rooms: [],
  },
  "time-expressions": {
    theory: FutureContinuousTimeExpressionsTheoryPage,
    rooms: [],
  },
};
