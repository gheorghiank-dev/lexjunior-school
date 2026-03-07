import { createTenseModuleCore } from "../../tenses/createTenseModuleCore.js";
import {
  HUD_TEXT,
  PAST_CONTINUOUS_ROOMS_PER_SECTION,
  PAST_CONTINUOUS_SECTIONS,
  STORAGE_PREFIX,
} from "./config.js";

const pastContinuousCore = createTenseModuleCore({
  storagePrefix: STORAGE_PREFIX,
  sections: PAST_CONTINUOUS_SECTIONS,
  roomsPerSection: PAST_CONTINUOUS_ROOMS_PER_SECTION,
  hudText: HUD_TEXT,
});

export const pastContinuousStorage = pastContinuousCore.storage;
export { pastContinuousCore };
