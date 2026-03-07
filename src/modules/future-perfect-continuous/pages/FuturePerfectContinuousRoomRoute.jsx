import { createSectionRoomRoute } from "../../tenses/createSectionRoomRoute.jsx";
import { FUTURE_PERFECT_CONTINUOUS_BASE_PATH } from "../future-paths.js";
import {
  FUTURE_PERFECT_CONTINUOUS_ROOMS_PER_SECTION,
  FUTURE_PERFECT_CONTINUOUS_SECTIONS,
} from "../future-core/config.js";

import FuturePerfectContinuousAffirmativeRoomFromRegistry from "../FuturePerfectContinuousAffirmativeRoomFromRegistry.jsx";
import FuturePerfectContinuousNegativeRoomFromRegistry from "../FuturePerfectContinuousNegativeRoomFromRegistry.jsx";
import FuturePerfectContinuousInterrogativeRoomFromRegistry from "../FuturePerfectContinuousInterrogativeRoomFromRegistry.jsx";
import FuturePerfectContinuousUsesRoomFromRegistry from "../FuturePerfectContinuousUsesRoomFromRegistry.jsx";
import FuturePerfectContinuousTimeExpressionsRoomFromRegistry from "../FuturePerfectContinuousTimeExpressionsRoomFromRegistry.jsx";

const SECTION_COMPONENTS = {
  affirmative: FuturePerfectContinuousAffirmativeRoomFromRegistry,
  negative: FuturePerfectContinuousNegativeRoomFromRegistry,
  interrogative: FuturePerfectContinuousInterrogativeRoomFromRegistry,
  uses: FuturePerfectContinuousUsesRoomFromRegistry,
  "time-expressions": FuturePerfectContinuousTimeExpressionsRoomFromRegistry,
};

const FuturePerfectContinuousRoomRoute = createSectionRoomRoute({
  basePath: FUTURE_PERFECT_CONTINUOUS_BASE_PATH,
  sections: FUTURE_PERFECT_CONTINUOUS_SECTIONS,
  roomsPerSection: FUTURE_PERFECT_CONTINUOUS_ROOMS_PER_SECTION,
  sectionComponents: SECTION_COMPONENTS,
});

export default FuturePerfectContinuousRoomRoute;
