import { createTenseStorage } from "./core/tense-progress-kit.js";
import {
  createTenseProgressManager,
  createTenseTheoryProgress,
} from "./core/tense-progress-kit.js";
import { createUseTenseRoomEngine } from "./core/useTenseRoomEngine.js";
import { normalizeAnswer as defaultNormalizeAnswer } from "../../core/room-engine/normalize-answer.js";
import { HUD } from "../../core/room-engine/hud.js";

/**
 * Generic module-core factory for a tense.
 *
 * Goal:
 * - remove repeated boilerplate from ps-core / pc-core / past-core
 * - keep per-tense specifics limited to config + optional overrides
 */
export function createTenseModuleCore({
  storagePrefix,
  sections,
  roomsPerSection,
  hudText,
  normalizeAnswer = defaultNormalizeAnswer,
}) {
  const storage = createTenseStorage(storagePrefix);

  const progressManager = createTenseProgressManager({
    storage,
    sections,
    roomsPerSection,
  });

  const theoryProgress = createTenseTheoryProgress(storage);

  const BoundHUD = class extends HUD {
    constructor(root) {
      super(root, hudText);
    }
  };

  const useRoomEngine = createUseTenseRoomEngine({
    normalizeAnswer,
    progressManager,
    HUD: BoundHUD,
  });

  return {
    storage,
    progressManager,
    theoryProgress,
    useRoomEngine,
  };
}
