import { PAST_SIMPLE_STORAGE_PREFIX } from "./config.js";
import { createTenseStorage } from "../../tenses/core/tense-progress-kit.js";

export const pastSimpleStorage = createTenseStorage(PAST_SIMPLE_STORAGE_PREFIX);
