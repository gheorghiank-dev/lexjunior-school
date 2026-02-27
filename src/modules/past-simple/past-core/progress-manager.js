// src/modules/past-simple/past-core/progress-manager.js

import {
  PAST_SIMPLE_ROOMS_PER_SECTION,
  PAST_SIMPLE_SECTIONS,
} from "./config.js";
import { pastSimpleStorage as storage } from "./storage.js";
import { createTenseProgressManager } from "../../tenses/core/tense-progress-kit.js";

// Past Simple room-level progress manager (per section / room).
export const progressManager = createTenseProgressManager({
  storage,
  roomsPerSection: PAST_SIMPLE_ROOMS_PER_SECTION,
  sections: PAST_SIMPLE_SECTIONS,
});
