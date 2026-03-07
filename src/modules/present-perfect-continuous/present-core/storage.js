import { createTenseModuleCore } from "../../tenses/createTenseModuleCore.js";
import {
  HUD_TEXT,
  PRESENT_PERFECT_CONTINUOUS_ROOMS_PER_SECTION,
  PRESENT_PERFECT_CONTINUOUS_SECTIONS,
  STORAGE_PREFIX,
} from "./config.js";

const presentPerfectContinuousCore = createTenseModuleCore({
  storagePrefix: STORAGE_PREFIX,
  sections: PRESENT_PERFECT_CONTINUOUS_SECTIONS,
  roomsPerSection: PRESENT_PERFECT_CONTINUOUS_ROOMS_PER_SECTION,
  hudText: HUD_TEXT,
});

export const presentPerfectContinuousStorage = presentPerfectContinuousCore.storage;
export { presentPerfectContinuousCore };
