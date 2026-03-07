import { createSectionRoomRoute } from "../../tenses/createSectionRoomRoute.jsx";
import { PRESENT_PERFECT_BASE_PATH } from "../present-paths.js";
import {
  PRESENT_PERFECT_ROOMS_PER_SECTION,
  PRESENT_PERFECT_SECTIONS,
} from "../present-core/config.js";

import PresentPerfectAffirmativeRoomFromRegistry from "../PresentPerfectAffirmativeRoomFromRegistry.jsx";
import PresentPerfectNegativeRoomFromRegistry from "../PresentPerfectNegativeRoomFromRegistry.jsx";
import PresentPerfectInterrogativeRoomFromRegistry from "../PresentPerfectInterrogativeRoomFromRegistry.jsx";
import PresentPerfectUsesRoomFromRegistry from "../PresentPerfectUsesRoomFromRegistry.jsx";
import PresentPerfectTimeExpressionsRoomFromRegistry from "../PresentPerfectTimeExpressionsRoomFromRegistry.jsx";

const SECTION_COMPONENTS = {
  affirmative: PresentPerfectAffirmativeRoomFromRegistry,
  negative: PresentPerfectNegativeRoomFromRegistry,
  interrogative: PresentPerfectInterrogativeRoomFromRegistry,
  uses: PresentPerfectUsesRoomFromRegistry,
  "time-expressions": PresentPerfectTimeExpressionsRoomFromRegistry,
};

const PresentPerfectRoomRoute = createSectionRoomRoute({
  basePath: PRESENT_PERFECT_BASE_PATH,
  sections: PRESENT_PERFECT_SECTIONS,
  roomsPerSection: PRESENT_PERFECT_ROOMS_PER_SECTION,
  sectionComponents: SECTION_COMPONENTS,
});

export default PresentPerfectRoomRoute;
