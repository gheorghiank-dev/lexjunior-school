import { ROOMS_PER_SECTION, SECTIONS } from "./config.js";
import { storage } from "./storage.js";
import { createProgressManager } from "../../../core/progress/createProgressManager.js";

export const progressManager = createProgressManager({
  storage,
  roomsPerSection: ROOMS_PER_SECTION,
  sections: SECTIONS,
});
