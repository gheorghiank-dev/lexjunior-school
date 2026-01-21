import { createUseRoomEngine } from "../../../core/room-engine/createUseRoomEngine.js";
import { normalizeAnswer } from "../../../core/room-engine/normalize-answer.js";
import { HUD } from "../../../core/room-engine/hud.js";
import { pcProgressManager } from "./progress-manager.js";
import { PC_HUD_TEXT } from "./config.js";

// Present Continuous uses the shared engine with its own progress manager and HUD copy.
const BoundHUD = class extends HUD {
  constructor(root) {
    super(root, PC_HUD_TEXT);
  }
};

export const useRoomEngine = createUseRoomEngine({
  normalizeAnswer,
  progressManager: pcProgressManager,
  HUD: BoundHUD,
});
