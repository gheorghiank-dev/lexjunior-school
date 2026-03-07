// Future Simple section->page components registry

import FutureSimpleAffirmativeTheoryPage from "./theory/FutureSimpleAffirmativeTheoryPage.jsx";
import FutureSimpleNegativeTheoryPage from "./theory/FutureSimpleNegativeTheoryPage.jsx";
import FutureSimpleInterrogativeTheoryPage from "./theory/FutureSimpleInterrogativeTheoryPage.jsx";
import FutureSimpleUsesTheoryPage from "./theory/FutureSimpleUsesTheoryPage.jsx";
import FutureSimpleTimeExpressionsTheoryPage from "./theory/FutureSimpleTimeExpressionsTheoryPage.jsx";

export const FUTURE_SIMPLE_SECTION_PAGES = {
  affirmative: {
    theory: FutureSimpleAffirmativeTheoryPage,
    rooms: [],
  },
  negative: {
    theory: FutureSimpleNegativeTheoryPage,
    rooms: [],
  },
  interrogative: {
    theory: FutureSimpleInterrogativeTheoryPage,
    rooms: [],
  },
  uses: {
    theory: FutureSimpleUsesTheoryPage,
    rooms: [],
  },
  "time-expressions": {
    theory: FutureSimpleTimeExpressionsTheoryPage,
    rooms: [],
  },
};
