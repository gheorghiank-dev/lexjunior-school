// src/modules/past-simple/past-core/useRoomEngine.js

import { createUseTenseRoomEngine } from "../../tenses/core/useTenseRoomEngine.js";
import { normalizeAnswer } from "./normalize-answer.js";
import { progressManager } from "./progress-manager.js";
import { HUD as CoreHUD } from "../../../core/room-engine/hud.js";
import { PAST_SIMPLE_HUD_TEXT } from "./config.js";

// Past Simple folosește engine-ul comun de cameră,
// cu propria normalizare, propriul manager de progres și propriul HUD legat de textul Past Simple.
const BoundHUD = class extends CoreHUD {
  constructor(root) {
    super(root, PAST_SIMPLE_HUD_TEXT);
  }
};

export const useRoomEngine = createUseTenseRoomEngine({
  normalizeAnswer,
  progressManager,
  HUD: BoundHUD,
});
