import { createSectionRoomRoute } from "../../tenses/createSectionRoomRoute.jsx";
import { PC_BASE_PATH } from "../pc-paths.js";
import { PC_ROOMS_PER_SECTION, PC_SECTIONS } from "../pc-core/config.js";

import PcAffirmativeRoomFromRegistry from "../PcAffirmativeRoomFromRegistry.jsx";
import PcNegativeRoomFromRegistry from "../PcNegativeRoomFromRegistry.jsx";
import PcInterrogativeRoomFromRegistry from "../PcInterrogativeRoomFromRegistry.jsx";
import PcUsesRoomFromRegistry from "../PcUsesRoomFromRegistry.jsx";
import PcTimeExpressionsRoomFromRegistry from "../PcTimeExpressionsRoomFromRegistry.jsx";

const SECTION_COMPONENTS = {
  affirmative: PcAffirmativeRoomFromRegistry,
  negative: PcNegativeRoomFromRegistry,
  interrogative: PcInterrogativeRoomFromRegistry,
  uses: PcUsesRoomFromRegistry,
  "time-expressions": PcTimeExpressionsRoomFromRegistry,
};

const PcRoomRoute = createSectionRoomRoute({
  basePath: PC_BASE_PATH,
  sections: PC_SECTIONS,
  roomsPerSection: PC_ROOMS_PER_SECTION,
  sectionComponents: SECTION_COMPONENTS,
});

export default PcRoomRoute;
