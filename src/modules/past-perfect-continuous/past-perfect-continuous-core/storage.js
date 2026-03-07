import { createTenseModuleCore } from "../../tenses/createTenseModuleCore.js";
import {
  HUD_TEXT,
  PAST_PERFECT_CONTINUOUS_ROOMS_PER_SECTION,
  PAST_PERFECT_CONTINUOUS_SECTIONS,
  STORAGE_PREFIX,
} from "./config.js";

const pastPerfectContinuousCore = createTenseModuleCore({
  storagePrefix: STORAGE_PREFIX,
  sections: PAST_PERFECT_CONTINUOUS_SECTIONS,
  roomsPerSection: PAST_PERFECT_CONTINUOUS_ROOMS_PER_SECTION,
  hudText: HUD_TEXT,
});

export const pastPerfectContinuousStorage = pastPerfectContinuousCore.storage;
export { pastPerfectContinuousCore };
