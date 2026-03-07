import { createSectionRoomRoute } from "../../tenses/createSectionRoomRoute.jsx";
import { BE_GOING_TO_BASE_PATH } from "../be-paths.js";
import {
  BE_GOING_TO_ROOMS_PER_SECTION,
  BE_GOING_TO_SECTIONS,
} from "../be-core/config.js";

import BeGoingToAffirmativeRoomFromRegistry from "../BeGoingToAffirmativeRoomFromRegistry.jsx";
import BeGoingToNegativeRoomFromRegistry from "../BeGoingToNegativeRoomFromRegistry.jsx";
import BeGoingToInterrogativeRoomFromRegistry from "../BeGoingToInterrogativeRoomFromRegistry.jsx";
import BeGoingToUsesRoomFromRegistry from "../BeGoingToUsesRoomFromRegistry.jsx";
import BeGoingToTimeExpressionsRoomFromRegistry from "../BeGoingToTimeExpressionsRoomFromRegistry.jsx";

const SECTION_COMPONENTS = {
  affirmative: BeGoingToAffirmativeRoomFromRegistry,
  negative: BeGoingToNegativeRoomFromRegistry,
  interrogative: BeGoingToInterrogativeRoomFromRegistry,
  uses: BeGoingToUsesRoomFromRegistry,
  "time-expressions": BeGoingToTimeExpressionsRoomFromRegistry,
};

const BeGoingToRoomRoute = createSectionRoomRoute({
  basePath: BE_GOING_TO_BASE_PATH,
  sections: BE_GOING_TO_SECTIONS,
  roomsPerSection: BE_GOING_TO_ROOMS_PER_SECTION,
  sectionComponents: SECTION_COMPONENTS,
});

export default BeGoingToRoomRoute;
