import React from "react";

import PsRoomTemplateV1 from "./components/PsRoomTemplateV1.jsx";
import { getPsNegativeRoomDef } from "./ps-content/ps-negative-rooms.jsx";

export default function PsNegativeRoomFromRegistry({ roomNumber }) {
  const def = getPsNegativeRoomDef(roomNumber);
  if (!def) return null;
  return <PsRoomTemplateV1 {...def} />;
}
