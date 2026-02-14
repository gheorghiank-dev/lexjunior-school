import { PC_STORAGE_PREFIX } from "./config.js";
import { createTenseStorage } from "../../tenses/core/tense-progress-kit.js";

// Present Continuous: namespaced storage for all PC-specific progress/theory.
export const pcStorage = createTenseStorage(PC_STORAGE_PREFIX);
