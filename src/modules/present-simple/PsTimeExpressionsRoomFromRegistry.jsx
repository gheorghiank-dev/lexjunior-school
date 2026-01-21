import React from "react";

import PsRoomTemplateV1 from "./components/PsRoomTemplateV1.jsx";
import { getPsTimeExpressionsRoomDef } from "./ps-content/ps-time-expressions-rooms.jsx";

export default function PsTimeExpressionsRoomFromRegistry({ roomNumber }) {
  const def = getPsTimeExpressionsRoomDef(roomNumber);
  if (!def) return null;
  return <PsRoomTemplateV1 {...def} />;
}
