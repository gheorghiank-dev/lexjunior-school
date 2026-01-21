import React from "react";

import PsRoomTemplateV1 from "./components/PsRoomTemplateV1.jsx";
import { getPsUsesRoomDef } from "./ps-content/ps-uses-rooms.jsx";

/**
 * Uses rooms rendered from content registry.
 *
 * Guardrails: NO UX changes; still uses PsRoomTemplateV1.
 */
export default function PsUsesRoomFromRegistry({ roomNumber }) {
  const def = getPsUsesRoomDef(roomNumber);
  if (!def) return null;
  return <PsRoomTemplateV1 {...def} />;
}
