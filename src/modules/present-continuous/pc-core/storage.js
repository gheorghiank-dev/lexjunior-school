import { createNamespacedStorage } from "../../../core/storage/namespaced-storage.js";
import { PC_STORAGE_PREFIX } from "./config.js";

// Namespaced localStorage for Present Continuous.
export const pcStorage = createNamespacedStorage(PC_STORAGE_PREFIX);
