import React from "react";

import { TenseRoomRoute } from "../../tenses/ui/TenseRoomRoute.jsx";
import { PS_BASE_PATH } from "../ps-paths.js";
import { PS_ROOMS_PER_SECTION, PS_SECTIONS } from "../ps-core/config.js";

import PsAffirmativeRoomFromRegistry from "../PsAffirmativeRoomFromRegistry.jsx";
import PsNegativeRoomFromRegistry from "../PsNegativeRoomFromRegistry.jsx";
import PsInterrogativeRoomFromRegistry from "../PsInterrogativeRoomFromRegistry.jsx";
import PsUsesRoomFromRegistry from "../PsUsesRoomFromRegistry.jsx";
import PsTimeExpressionsRoomFromRegistry from "../PsTimeExpressionsRoomFromRegistry.jsx";

// Mapping helper by sectionId, to keep all routing in one place.
const SECTION_COMPONENTS = {
  affirmative: PsAffirmativeRoomFromRegistry,
  negative: PsNegativeRoomFromRegistry,
  interrogative: PsInterrogativeRoomFromRegistry,
  uses: PsUsesRoomFromRegistry,
  "time-expressions": PsTimeExpressionsRoomFromRegistry,
};

const SECTION_IDS = PS_SECTIONS.map((section) => section.id);

/**
 * Present Simple room route
 *
 * Delegates to the generic TenseRoomRoute with Present Simple config.
 */
export default function PsRoomRoute({ sectionId }) {
  return (
    <TenseRoomRoute
      basePath={PS_BASE_PATH}
      sections={SECTION_IDS}
      roomsPerSection={PS_ROOMS_PER_SECTION}
      sectionComponents={SECTION_COMPONENTS}
      sectionId={sectionId}
    />
  );
}
