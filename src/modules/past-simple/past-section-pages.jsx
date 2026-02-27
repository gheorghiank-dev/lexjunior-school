// Past Simple section->page components registry

import PastSimpleAffirmativeTheoryPage from "./theory/PastSimpleAffirmativeTheoryPage.jsx";
import PastSimpleNegativeTheoryPage from "./theory/PastSimpleNegativeTheoryPage.jsx";
import PastSimpleInterrogativeTheoryPage from "./theory/PastSimpleInterrogativeTheoryPage.jsx";
import PastSimpleUsesTheoryPage from "./theory/PastSimpleUsesTheoryPage.jsx";
import PastSimpleTimeExpressionsTheoryPage from "./theory/PastSimpleTimeExpressionsTheoryPage.jsx";

export const PAST_SIMPLE_SECTION_PAGES = {
  affirmative: {
    theory: PastSimpleAffirmativeTheoryPage,
    rooms: [],
  },
  negative: {
    theory: PastSimpleNegativeTheoryPage,
    rooms: [],
  },
  interrogative: {
    theory: PastSimpleInterrogativeTheoryPage,
    rooms: [],
  },
  uses: {
    theory: PastSimpleUsesTheoryPage,
    rooms: [],
  },
  "time-expressions": {
    theory: PastSimpleTimeExpressionsTheoryPage,
    rooms: [],
  },
};
