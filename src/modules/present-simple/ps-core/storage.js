import { STORAGE_PREFIX } from "./config.js";
import { createNamespacedStorage } from "../../../core/storage/namespaced-storage.js";

export const storage = createNamespacedStorage(STORAGE_PREFIX);
