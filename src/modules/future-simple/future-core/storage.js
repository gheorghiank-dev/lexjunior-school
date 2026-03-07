import { createTenseModuleCore } from "../../tenses/createTenseModuleCore.js";
import {
  HUD_TEXT,
  FUTURE_SIMPLE_ROOMS_PER_SECTION,
  FUTURE_SIMPLE_SECTIONS,
  STORAGE_PREFIX,
} from "./config.js";

const futureSimpleCore = createTenseModuleCore({
  storagePrefix: STORAGE_PREFIX,
  sections: FUTURE_SIMPLE_SECTIONS,
  roomsPerSection: FUTURE_SIMPLE_ROOMS_PER_SECTION,
  hudText: HUD_TEXT,
});

export const futureSimpleStorage = futureSimpleCore.storage;
export { futureSimpleCore };
