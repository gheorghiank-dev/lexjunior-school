import { createSectionRoomRoute } from "../../tenses/createSectionRoomRoute.jsx";
import { FUTURE_CONTINUOUS_BASE_PATH } from "../future-paths.js";
import {
  FUTURE_CONTINUOUS_ROOMS_PER_SECTION,
  FUTURE_CONTINUOUS_SECTIONS,
} from "../future-core/config.js";

import FutureContinuousAffirmativeRoomFromRegistry from "../FutureContinuousAffirmativeRoomFromRegistry.jsx";
import FutureContinuousNegativeRoomFromRegistry from "../FutureContinuousNegativeRoomFromRegistry.jsx";
import FutureContinuousInterrogativeRoomFromRegistry from "../FutureContinuousInterrogativeRoomFromRegistry.jsx";
import FutureContinuousUsesRoomFromRegistry from "../FutureContinuousUsesRoomFromRegistry.jsx";
import FutureContinuousTimeExpressionsRoomFromRegistry from "../FutureContinuousTimeExpressionsRoomFromRegistry.jsx";

const SECTION_COMPONENTS = {
  affirmative: FutureContinuousAffirmativeRoomFromRegistry,
  negative: FutureContinuousNegativeRoomFromRegistry,
  interrogative: FutureContinuousInterrogativeRoomFromRegistry,
  uses: FutureContinuousUsesRoomFromRegistry,
  "time-expressions": FutureContinuousTimeExpressionsRoomFromRegistry,
};

const FutureContinuousRoomRoute = createSectionRoomRoute({
  basePath: FUTURE_CONTINUOUS_BASE_PATH,
  sections: FUTURE_CONTINUOUS_SECTIONS,
  roomsPerSection: FUTURE_CONTINUOUS_ROOMS_PER_SECTION,
  sectionComponents: SECTION_COMPONENTS,
});

export default FutureContinuousRoomRoute;
