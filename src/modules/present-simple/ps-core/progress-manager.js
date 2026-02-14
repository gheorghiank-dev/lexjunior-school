import { ROOMS_PER_SECTION, SECTIONS } from "./config.js";
import { storage } from "./storage.js";
import { createTenseProgressManager } from "../../tenses/core/tense-progress-kit.js";

// Present Simple room-level progress manager (per section / room).
export const progressManager = createTenseProgressManager({
  storage,
  roomsPerSection: ROOMS_PER_SECTION,
  sections: SECTIONS,
});
