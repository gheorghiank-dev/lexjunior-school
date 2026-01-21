import React from "react";

import PsRoomTemplateV1 from "./components/PsRoomTemplateV1.jsx";
import { getPsAffirmativeRoomDef } from "./ps-content/ps-affirmative-rooms.jsx";

/**
 * Bridge component: renders Present Simple > Affirmative rooms from the content registry.
 *
 * Guardrails:
 * - no UX / text / gating changes
 * - same template (PsRoomTemplateV1)
 */
export default function PsAffirmativeRoomFromRegistry({ roomNumber }) {
  const def = getPsAffirmativeRoomDef(roomNumber);
  if (!def) return null;
  return <PsRoomTemplateV1 {...def} />;
}
