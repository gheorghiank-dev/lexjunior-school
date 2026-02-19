// src/modules/present-continuous/pc-core/useRoomEngine.js

import { createUseTenseRoomEngine } from "../../tenses/core/useTenseRoomEngine.js";
import { normalizeAnswer } from "../../../core/room-engine/normalize-answer.js";
import { HUD } from "../../../core/room-engine/hud.js";
import { pcProgressManager } from "./progress-manager.js";
import { PC_HUD_TEXT } from "./config.js";

// Present Continuous folosește engine-ul comun, cu propriul HUD „legat” de textul PC.
const BoundHUD = class extends HUD {
  constructor(root) {
    super(root, PC_HUD_TEXT);
  }
};

export const useRoomEngine = createUseTenseRoomEngine({
  normalizeAnswer,
  progressManager: pcProgressManager,
  HUD: BoundHUD,
});
