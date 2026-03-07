import { createTenseModuleCore } from "../../tenses/createTenseModuleCore.js";
import {
  HUD_TEXT,
  PRESENT_PERFECT_ROOMS_PER_SECTION,
  PRESENT_PERFECT_SECTIONS,
  STORAGE_PREFIX,
} from "./config.js";

const presentPerfectCore = createTenseModuleCore({
  storagePrefix: STORAGE_PREFIX,
  sections: PRESENT_PERFECT_SECTIONS,
  roomsPerSection: PRESENT_PERFECT_ROOMS_PER_SECTION,
  hudText: HUD_TEXT,
});

export const presentPerfectStorage = presentPerfectCore.storage;
export { presentPerfectCore };
