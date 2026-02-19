// src/modules/present-simple/ps-core/useRoomEngine.js

import { createUseTenseRoomEngine } from "../../tenses/core/useTenseRoomEngine.js";
import { normalizeAnswer } from "./normalize-answer.js";
import { progressManager } from "./progress-manager.js";
import { HUD } from "./hud.js";

// Present Simple folosește engine-ul comun de cameră,
// cu propria normalizare, propriul manager de progres și propriul HUD.
export const useRoomEngine = createUseTenseRoomEngine({
  normalizeAnswer,
  progressManager,
  HUD,
});
