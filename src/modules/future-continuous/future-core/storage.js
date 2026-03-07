import { createTenseModuleCore } from "../../tenses/createTenseModuleCore.js";
import {
  HUD_TEXT,
  FUTURE_CONTINUOUS_ROOMS_PER_SECTION,
  FUTURE_CONTINUOUS_SECTIONS,
  STORAGE_PREFIX,
} from "./config.js";

const futureContinuousCore = createTenseModuleCore({
  storagePrefix: STORAGE_PREFIX,
  sections: FUTURE_CONTINUOUS_SECTIONS,
  roomsPerSection: FUTURE_CONTINUOUS_ROOMS_PER_SECTION,
  hudText: HUD_TEXT,
});

export const futureContinuousStorage = futureContinuousCore.storage;
export { futureContinuousCore };
