import { PS_STORAGE_PREFIX } from "./config.js";
import { createTenseStorage } from "../../tenses/core/tense-progress-kit.js";

// Present Simple: namespaced storage for all PS-specific progress/theory.
export const storage = createTenseStorage(PS_STORAGE_PREFIX);
