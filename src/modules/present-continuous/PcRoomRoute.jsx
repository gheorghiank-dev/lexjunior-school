import React from "react";

import { TenseRoomRoute } from "../tenses/ui/TenseRoomRoute.jsx";
import { PC_BASE_PATH } from "./pc-paths.js";
import {
  PC_ROOMS_PER_SECTION,
  PC_SECTIONS,
} from "./pc-core/config.js";

import PcAffirmativeRoomFromRegistry from "./PcAffirmativeRoomFromRegistry.jsx";
import PcNegativeRoomFromRegistry from "./PcNegativeRoomFromRegistry.jsx";
import PcInterrogativeRoomFromRegistry from "./PcInterrogativeRoomFromRegistry.jsx";
import PcUsesRoomFromRegistry from "./PcUsesRoomFromRegistry.jsx";
import PcTimeExpressionsRoomFromRegistry from "./PcTimeExpressionsRoomFromRegistry.jsx";

// Mapping helper by sectionId, to keep all routing in one place.
const SECTION_COMPONENTS = {
  affirmative: PcAffirmativeRoomFromRegistry,
  negative: PcNegativeRoomFromRegistry,
  interrogative: PcInterrogativeRoomFromRegistry,
  uses: PcUsesRoomFromRegistry,
  "time-expressions": PcTimeExpressionsRoomFromRegistry,
};

const SECTION_IDS = PC_SECTIONS.map((section) => section.id);

/**
 * Present Continuous room route
 *
 * Delegates to the generic TenseRoomRoute with Present Continuous config.
 */
export default function PcRoomRoute({ sectionId }) {
  return (
    <TenseRoomRoute
      basePath={PC_BASE_PATH}
      sections={SECTION_IDS}
      roomsPerSection={PC_ROOMS_PER_SECTION}
      sectionComponents={SECTION_COMPONENTS}
      sectionId={sectionId}
    />
  );
}
