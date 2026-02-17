import { PS_ROOMS_PER_SECTION, PS_SECTIONS } from "./config.js";
import { storage } from "./storage.js";
import { createTenseProgressManager } from "../../tenses/core/tense-progress-kit.js";

// Present Simple room-level progress manager (per section / room).
export const progressManager = createTenseProgressManager({
  storage,
  roomsPerSection: PS_ROOMS_PER_SECTION,
  sections: PS_SECTIONS,
});
