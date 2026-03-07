import { createSectionRoomRoute } from "../../tenses/createSectionRoomRoute.jsx";
import { PAST_PERFECT_BASE_PATH } from "../past-perfect-paths.js";
import {
  PAST_PERFECT_ROOMS_PER_SECTION,
  PAST_PERFECT_SECTIONS,
} from "../past-perfect-core/config.js";

import PastPerfectAffirmativeRoomFromRegistry from "../PastPerfectAffirmativeRoomFromRegistry.jsx";
import PastPerfectNegativeRoomFromRegistry from "../PastPerfectNegativeRoomFromRegistry.jsx";
import PastPerfectInterrogativeRoomFromRegistry from "../PastPerfectInterrogativeRoomFromRegistry.jsx";
import PastPerfectUsesRoomFromRegistry from "../PastPerfectUsesRoomFromRegistry.jsx";
import PastPerfectTimeExpressionsRoomFromRegistry from "../PastPerfectTimeExpressionsRoomFromRegistry.jsx";

const SECTION_COMPONENTS = {
  affirmative: PastPerfectAffirmativeRoomFromRegistry,
  negative: PastPerfectNegativeRoomFromRegistry,
  interrogative: PastPerfectInterrogativeRoomFromRegistry,
  uses: PastPerfectUsesRoomFromRegistry,
  "time-expressions": PastPerfectTimeExpressionsRoomFromRegistry,
};

const PastPerfectRoomRoute = createSectionRoomRoute({
  basePath: PAST_PERFECT_BASE_PATH,
  sections: PAST_PERFECT_SECTIONS,
  roomsPerSection: PAST_PERFECT_ROOMS_PER_SECTION,
  sectionComponents: SECTION_COMPONENTS,
});

export default PastPerfectRoomRoute;
