import { createSectionRoomRoute } from "../../tenses/createSectionRoomRoute.jsx";
import { FUTURE_PERFECT_BASE_PATH } from "../future-paths.js";
import {
  FUTURE_PERFECT_ROOMS_PER_SECTION,
  FUTURE_PERFECT_SECTIONS,
} from "../future-core/config.js";

import FuturePerfectAffirmativeRoomFromRegistry from "../FuturePerfectAffirmativeRoomFromRegistry.jsx";
import FuturePerfectNegativeRoomFromRegistry from "../FuturePerfectNegativeRoomFromRegistry.jsx";
import FuturePerfectInterrogativeRoomFromRegistry from "../FuturePerfectInterrogativeRoomFromRegistry.jsx";
import FuturePerfectUsesRoomFromRegistry from "../FuturePerfectUsesRoomFromRegistry.jsx";
import FuturePerfectTimeExpressionsRoomFromRegistry from "../FuturePerfectTimeExpressionsRoomFromRegistry.jsx";

const SECTION_COMPONENTS = {
  affirmative: FuturePerfectAffirmativeRoomFromRegistry,
  negative: FuturePerfectNegativeRoomFromRegistry,
  interrogative: FuturePerfectInterrogativeRoomFromRegistry,
  uses: FuturePerfectUsesRoomFromRegistry,
  "time-expressions": FuturePerfectTimeExpressionsRoomFromRegistry,
};

const FuturePerfectRoomRoute = createSectionRoomRoute({
  basePath: FUTURE_PERFECT_BASE_PATH,
  sections: FUTURE_PERFECT_SECTIONS,
  roomsPerSection: FUTURE_PERFECT_ROOMS_PER_SECTION,
  sectionComponents: SECTION_COMPONENTS,
});

export default FuturePerfectRoomRoute;
