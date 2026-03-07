import { createTenseModuleCore } from "../../tenses/createTenseModuleCore.js";
import {
  HUD_TEXT,
  BE_GOING_TO_ROOMS_PER_SECTION,
  BE_GOING_TO_SECTIONS,
  STORAGE_PREFIX,
} from "./config.js";

const beGoingToCore = createTenseModuleCore({
  storagePrefix: STORAGE_PREFIX,
  sections: BE_GOING_TO_SECTIONS,
  roomsPerSection: BE_GOING_TO_ROOMS_PER_SECTION,
  hudText: HUD_TEXT,
});

export const beGoingToStorage = beGoingToCore.storage;
export { beGoingToCore };
