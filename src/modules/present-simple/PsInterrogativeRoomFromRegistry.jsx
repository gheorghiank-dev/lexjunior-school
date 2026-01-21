import React from "react";

import PsRoomTemplateV1 from "./components/PsRoomTemplateV1.jsx";
import { getPsInterrogativeRoomDef } from "./ps-content/ps-interrogative-rooms.jsx";

export default function PsInterrogativeRoomFromRegistry({ roomNumber }) {
  const def = getPsInterrogativeRoomDef(roomNumber);
  if (!def) return null;
  return <PsRoomTemplateV1 {...def} />;
}
