// src/modules/past-simple/pages/PastSimpleRoomRoute.jsx
import React from "react";
import { TenseRoomRoute } from "../../tenses/ui/TenseRoomRoute.jsx";
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

const SECTION_IDS = PAST_SIMPLE_SECTIONS.map((section) => section.id);

/**
 * Past Simple room route
 *
 * Delegates to the generic TenseRoomRoute with Past Simple config.
 */
export default function PastSimpleRoomRoute({ sectionId }) {
  return (
    <TenseRoomRoute
      basePath={PAST_SIMPLE_BASE_PATH}
      sections={SECTION_IDS}
      roomsPerSection={PAST_SIMPLE_ROOMS_PER_SECTION}
      sectionComponents={SECTION_COMPONENTS}
      sectionId={sectionId}
    />
  );
}
