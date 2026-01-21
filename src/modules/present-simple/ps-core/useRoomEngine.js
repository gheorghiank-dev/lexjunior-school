import { createUseRoomEngine } from "../../../core/room-engine/createUseRoomEngine.js";
import { normalizeAnswer } from "./normalize-answer.js";
import { progressManager } from "./progress-manager.js";
import { HUD } from "./hud.js";

export const useRoomEngine = createUseRoomEngine({
  normalizeAnswer,
  progressManager,
  HUD,
});
