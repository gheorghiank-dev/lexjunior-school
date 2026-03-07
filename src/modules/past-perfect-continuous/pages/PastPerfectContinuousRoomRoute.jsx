import { createSectionRoomRoute } from "../../tenses/createSectionRoomRoute.jsx";
import { PAST_PERFECT_CONTINUOUS_BASE_PATH } from "../past-perfect-continuous-paths.js";
import {
  PAST_PERFECT_CONTINUOUS_ROOMS_PER_SECTION,
  PAST_PERFECT_CONTINUOUS_SECTIONS,
} from "../past-perfect-continuous-core/config.js";

import PastPerfectContinuousAffirmativeRoomFromRegistry from "../PastPerfectContinuousAffirmativeRoomFromRegistry.jsx";
import PastPerfectContinuousNegativeRoomFromRegistry from "../PastPerfectContinuousNegativeRoomFromRegistry.jsx";
import PastPerfectContinuousInterrogativeRoomFromRegistry from "../PastPerfectContinuousInterrogativeRoomFromRegistry.jsx";
import PastPerfectContinuousUsesRoomFromRegistry from "../PastPerfectContinuousUsesRoomFromRegistry.jsx";
import PastPerfectContinuousTimeExpressionsRoomFromRegistry from "../PastPerfectContinuousTimeExpressionsRoomFromRegistry.jsx";

const SECTION_COMPONENTS = {
  affirmative: PastPerfectContinuousAffirmativeRoomFromRegistry,
  negative: PastPerfectContinuousNegativeRoomFromRegistry,
  interrogative: PastPerfectContinuousInterrogativeRoomFromRegistry,
  uses: PastPerfectContinuousUsesRoomFromRegistry,
  "time-expressions": PastPerfectContinuousTimeExpressionsRoomFromRegistry,
};

const PastPerfectContinuousRoomRoute = createSectionRoomRoute({
  basePath: PAST_PERFECT_CONTINUOUS_BASE_PATH,
  sections: PAST_PERFECT_CONTINUOUS_SECTIONS,
  roomsPerSection: PAST_PERFECT_CONTINUOUS_ROOMS_PER_SECTION,
  sectionComponents: SECTION_COMPONENTS,
});

export default PastPerfectContinuousRoomRoute;
