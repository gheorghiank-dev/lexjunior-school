import { createSectionRoomRoute } from "../../tenses/createSectionRoomRoute.jsx";
import { PAST_CONTINUOUS_BASE_PATH } from "../past-continuous-paths.js";
import {
  PAST_CONTINUOUS_ROOMS_PER_SECTION,
  PAST_CONTINUOUS_SECTIONS,
} from "../past-continuous-core/config.js";

import PastContinuousAffirmativeRoomFromRegistry from "../PastContinuousAffirmativeRoomFromRegistry.jsx";
import PastContinuousNegativeRoomFromRegistry from "../PastContinuousNegativeRoomFromRegistry.jsx";
import PastContinuousInterrogativeRoomFromRegistry from "../PastContinuousInterrogativeRoomFromRegistry.jsx";
import PastContinuousUsesRoomFromRegistry from "../PastContinuousUsesRoomFromRegistry.jsx";
import PastContinuousTimeExpressionsRoomFromRegistry from "../PastContinuousTimeExpressionsRoomFromRegistry.jsx";

const SECTION_COMPONENTS = {
  affirmative: PastContinuousAffirmativeRoomFromRegistry,
  negative: PastContinuousNegativeRoomFromRegistry,
  interrogative: PastContinuousInterrogativeRoomFromRegistry,
  uses: PastContinuousUsesRoomFromRegistry,
  "time-expressions": PastContinuousTimeExpressionsRoomFromRegistry,
};

const PastContinuousRoomRoute = createSectionRoomRoute({
  basePath: PAST_CONTINUOUS_BASE_PATH,
  sections: PAST_CONTINUOUS_SECTIONS,
  roomsPerSection: PAST_CONTINUOUS_ROOMS_PER_SECTION,
  sectionComponents: SECTION_COMPONENTS,
});

export default PastContinuousRoomRoute;
