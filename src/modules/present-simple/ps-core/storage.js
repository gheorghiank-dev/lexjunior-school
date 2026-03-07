import { createTenseModuleCore } from "../../tenses/createTenseModuleCore.js";
import {
  HUD_TEXT,
  PS_ROOMS_PER_SECTION,
  PS_SECTIONS,
  STORAGE_PREFIX,
} from "./config.js";

const psCore = createTenseModuleCore({
  storagePrefix: STORAGE_PREFIX,
  sections: PS_SECTIONS,
  roomsPerSection: PS_ROOMS_PER_SECTION,
  hudText: HUD_TEXT,
});

export const storage = psCore.storage;
export { psCore };
