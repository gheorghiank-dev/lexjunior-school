import { createTenseModuleCore } from "../../tenses/createTenseModuleCore.js";
import {
  HUD_TEXT,
  FUTURE_PERFECT_CONTINUOUS_ROOMS_PER_SECTION,
  FUTURE_PERFECT_CONTINUOUS_SECTIONS,
  STORAGE_PREFIX,
} from "./config.js";

const futurePerfectContinuousCore = createTenseModuleCore({
  storagePrefix: STORAGE_PREFIX,
  sections: FUTURE_PERFECT_CONTINUOUS_SECTIONS,
  roomsPerSection: FUTURE_PERFECT_CONTINUOUS_ROOMS_PER_SECTION,
  hudText: HUD_TEXT,
});

export const futurePerfectContinuousStorage = futurePerfectContinuousCore.storage;
export { futurePerfectContinuousCore };
