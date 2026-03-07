import { createTenseModuleCore } from "../../tenses/createTenseModuleCore.js";
import {
  HUD_TEXT,
  PAST_SIMPLE_ROOMS_PER_SECTION,
  PAST_SIMPLE_SECTIONS,
  STORAGE_PREFIX,
} from "./config.js";

const pastSimpleCore = createTenseModuleCore({
  storagePrefix: STORAGE_PREFIX,
  sections: PAST_SIMPLE_SECTIONS,
  roomsPerSection: PAST_SIMPLE_ROOMS_PER_SECTION,
  hudText: HUD_TEXT,
});

export const pastSimpleStorage = pastSimpleCore.storage;
export { pastSimpleCore };
