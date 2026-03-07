import { createTenseModuleCore } from "../../tenses/createTenseModuleCore.js";
import {
  PC_HUD_TEXT,
  PC_ROOMS_PER_SECTION,
  PC_SECTIONS,
  PC_STORAGE_PREFIX,
} from "./config.js";

const pcCore = createTenseModuleCore({
  storagePrefix: PC_STORAGE_PREFIX,
  sections: PC_SECTIONS,
  roomsPerSection: PC_ROOMS_PER_SECTION,
  hudText: PC_HUD_TEXT,
});

export const pcStorage = pcCore.storage;
export { pcCore };
