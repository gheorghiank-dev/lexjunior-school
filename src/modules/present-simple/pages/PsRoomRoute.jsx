import { createSectionRoomRoute } from "../../tenses/createSectionRoomRoute.jsx";
import { PS_BASE_PATH } from "../ps-paths.js";
import { PS_ROOMS_PER_SECTION, PS_SECTIONS } from "../ps-core/config.js";

import PsAffirmativeRoomFromRegistry from "../PsAffirmativeRoomFromRegistry.jsx";
import PsNegativeRoomFromRegistry from "../PsNegativeRoomFromRegistry.jsx";
import PsInterrogativeRoomFromRegistry from "../PsInterrogativeRoomFromRegistry.jsx";
import PsUsesRoomFromRegistry from "../PsUsesRoomFromRegistry.jsx";
import PsTimeExpressionsRoomFromRegistry from "../PsTimeExpressionsRoomFromRegistry.jsx";

const SECTION_COMPONENTS = {
  affirmative: PsAffirmativeRoomFromRegistry,
  negative: PsNegativeRoomFromRegistry,
  interrogative: PsInterrogativeRoomFromRegistry,
  uses: PsUsesRoomFromRegistry,
  "time-expressions": PsTimeExpressionsRoomFromRegistry,
};

const PsRoomRoute = createSectionRoomRoute({
  basePath: PS_BASE_PATH,
  sections: PS_SECTIONS,
  roomsPerSection: PS_ROOMS_PER_SECTION,
  sectionComponents: SECTION_COMPONENTS,
});

export default PsRoomRoute;
