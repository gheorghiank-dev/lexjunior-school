import { createProgressManager } from "../../../core/progress/createProgressManager.js";
import { pcStorage } from "./storage.js";
import { PC_ROOMS_PER_SECTION, PC_SECTIONS } from "./config.js";

export const pcProgressManager = createProgressManager({
  storage: pcStorage,
  sections: PC_SECTIONS,
  roomsPerSection: PC_ROOMS_PER_SECTION,
});
