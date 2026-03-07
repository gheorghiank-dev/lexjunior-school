// Be Going To section->page components registry

import BeGoingToAffirmativeTheoryPage from "./theory/BeGoingToAffirmativeTheoryPage.jsx";
import BeGoingToNegativeTheoryPage from "./theory/BeGoingToNegativeTheoryPage.jsx";
import BeGoingToInterrogativeTheoryPage from "./theory/BeGoingToInterrogativeTheoryPage.jsx";
import BeGoingToUsesTheoryPage from "./theory/BeGoingToUsesTheoryPage.jsx";
import BeGoingToTimeExpressionsTheoryPage from "./theory/BeGoingToTimeExpressionsTheoryPage.jsx";

export const BE_GOING_TO_SECTION_PAGES = {
  affirmative: {
    theory: BeGoingToAffirmativeTheoryPage,
    rooms: [],
  },
  negative: {
    theory: BeGoingToNegativeTheoryPage,
    rooms: [],
  },
  interrogative: {
    theory: BeGoingToInterrogativeTheoryPage,
    rooms: [],
  },
  uses: {
    theory: BeGoingToUsesTheoryPage,
    rooms: [],
  },
  "time-expressions": {
    theory: BeGoingToTimeExpressionsTheoryPage,
    rooms: [],
  },
};
