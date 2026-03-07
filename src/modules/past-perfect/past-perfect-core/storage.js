import { createTenseModuleCore } from "../../tenses/createTenseModuleCore.js";
import {
  HUD_TEXT,
  PAST_PERFECT_ROOMS_PER_SECTION,
  PAST_PERFECT_SECTIONS,
  STORAGE_PREFIX,
} from "./config.js";

const pastPerfectCore = createTenseModuleCore({
  storagePrefix: STORAGE_PREFIX,
  sections: PAST_PERFECT_SECTIONS,
  roomsPerSection: PAST_PERFECT_ROOMS_PER_SECTION,
  hudText: HUD_TEXT,
});

export const pastPerfectStorage = pastPerfectCore.storage;
export { pastPerfectCore };
