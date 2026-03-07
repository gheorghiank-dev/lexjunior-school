import { createSectionRoomRoute } from "../../tenses/createSectionRoomRoute.jsx";
import { PRESENT_PERFECT_CONTINUOUS_BASE_PATH } from "../present-paths.js";
import {
  PRESENT_PERFECT_CONTINUOUS_ROOMS_PER_SECTION,
  PRESENT_PERFECT_CONTINUOUS_SECTIONS,
} from "../present-core/config.js";

import PresentPerfectContinuousAffirmativeRoomFromRegistry from "../PresentPerfectContinuousAffirmativeRoomFromRegistry.jsx";
import PresentPerfectContinuousNegativeRoomFromRegistry from "../PresentPerfectContinuousNegativeRoomFromRegistry.jsx";
import PresentPerfectContinuousInterrogativeRoomFromRegistry from "../PresentPerfectContinuousInterrogativeRoomFromRegistry.jsx";
import PresentPerfectContinuousUsesRoomFromRegistry from "../PresentPerfectContinuousUsesRoomFromRegistry.jsx";
import PresentPerfectContinuousTimeExpressionsRoomFromRegistry from "../PresentPerfectContinuousTimeExpressionsRoomFromRegistry.jsx";

const SECTION_COMPONENTS = {
  affirmative: PresentPerfectContinuousAffirmativeRoomFromRegistry,
  negative: PresentPerfectContinuousNegativeRoomFromRegistry,
  interrogative: PresentPerfectContinuousInterrogativeRoomFromRegistry,
  uses: PresentPerfectContinuousUsesRoomFromRegistry,
  "time-expressions": PresentPerfectContinuousTimeExpressionsRoomFromRegistry,
};

const PresentPerfectContinuousRoomRoute = createSectionRoomRoute({
  basePath: PRESENT_PERFECT_CONTINUOUS_BASE_PATH,
  sections: PRESENT_PERFECT_CONTINUOUS_SECTIONS,
  roomsPerSection: PRESENT_PERFECT_CONTINUOUS_ROOMS_PER_SECTION,
  sectionComponents: SECTION_COMPONENTS,
});

export default PresentPerfectContinuousRoomRoute;
