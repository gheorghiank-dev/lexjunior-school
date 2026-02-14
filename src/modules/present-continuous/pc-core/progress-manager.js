import { pcStorage } from "./storage.js";
import { PC_ROOMS_PER_SECTION, PC_SECTIONS } from "./config.js";
import { createTenseProgressManager } from "../../tenses/core/tense-progress-kit.js";

// Present Continuous room-level progress manager (per section / room).
export const pcProgressManager = createTenseProgressManager({
  storage: pcStorage,
  sections: PC_SECTIONS,
  roomsPerSection: PC_ROOMS_PER_SECTION,
});
