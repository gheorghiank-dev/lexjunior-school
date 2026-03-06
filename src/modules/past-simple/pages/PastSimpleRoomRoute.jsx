import { createSectionRoomRoute } from "../../tenses/createSectionRoomRoute.jsx";
import { PAST_SIMPLE_BASE_PATH } from "../past-paths.js";
import {
  PAST_SIMPLE_ROOMS_PER_SECTION,
  PAST_SIMPLE_SECTIONS,
} from "../past-core/config.js";

import PastSimpleAffirmativeRoomFromRegistry from "../PastSimpleAffirmativeRoomFromRegistry.jsx";
import PastSimpleNegativeRoomFromRegistry from "../PastSimpleNegativeRoomFromRegistry.jsx";
import PastSimpleInterrogativeRoomFromRegistry from "../PastSimpleInterrogativeRoomFromRegistry.jsx";
import PastSimpleUsesRoomFromRegistry from "../PastSimpleUsesRoomFromRegistry.jsx";
import PastSimpleTimeExpressionsRoomFromRegistry from "../PastSimpleTimeExpressionsRoomFromRegistry.jsx";

const SECTION_COMPONENTS = {
  affirmative: PastSimpleAffirmativeRoomFromRegistry,
  negative: PastSimpleNegativeRoomFromRegistry,
  interrogative: PastSimpleInterrogativeRoomFromRegistry,
  uses: PastSimpleUsesRoomFromRegistry,
  "time-expressions": PastSimpleTimeExpressionsRoomFromRegistry,
};

const PastSimpleRoomRoute = createSectionRoomRoute({
  basePath: PAST_SIMPLE_BASE_PATH,
  sections: PAST_SIMPLE_SECTIONS,
  roomsPerSection: PAST_SIMPLE_ROOMS_PER_SECTION,
  sectionComponents: SECTION_COMPONENTS,
});

export default PastSimpleRoomRoute;
