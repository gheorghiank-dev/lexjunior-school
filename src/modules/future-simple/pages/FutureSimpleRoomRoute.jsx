import { createSectionRoomRoute } from "../../tenses/createSectionRoomRoute.jsx";
import { FUTURE_SIMPLE_BASE_PATH } from "../future-paths.js";
import {
  FUTURE_SIMPLE_ROOMS_PER_SECTION,
  FUTURE_SIMPLE_SECTIONS,
} from "../future-core/config.js";

import FutureSimpleAffirmativeRoomFromRegistry from "../FutureSimpleAffirmativeRoomFromRegistry.jsx";
import FutureSimpleNegativeRoomFromRegistry from "../FutureSimpleNegativeRoomFromRegistry.jsx";
import FutureSimpleInterrogativeRoomFromRegistry from "../FutureSimpleInterrogativeRoomFromRegistry.jsx";
import FutureSimpleUsesRoomFromRegistry from "../FutureSimpleUsesRoomFromRegistry.jsx";
import FutureSimpleTimeExpressionsRoomFromRegistry from "../FutureSimpleTimeExpressionsRoomFromRegistry.jsx";

const SECTION_COMPONENTS = {
  affirmative: FutureSimpleAffirmativeRoomFromRegistry,
  negative: FutureSimpleNegativeRoomFromRegistry,
  interrogative: FutureSimpleInterrogativeRoomFromRegistry,
  uses: FutureSimpleUsesRoomFromRegistry,
  "time-expressions": FutureSimpleTimeExpressionsRoomFromRegistry,
};

const FutureSimpleRoomRoute = createSectionRoomRoute({
  basePath: FUTURE_SIMPLE_BASE_PATH,
  sections: FUTURE_SIMPLE_SECTIONS,
  roomsPerSection: FUTURE_SIMPLE_ROOMS_PER_SECTION,
  sectionComponents: SECTION_COMPONENTS,
});

export default FutureSimpleRoomRoute;
