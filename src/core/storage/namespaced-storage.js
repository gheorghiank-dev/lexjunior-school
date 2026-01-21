/**
 * Namespaced localStorage wrapper.
 *
 * Important: this module is agnostic of any tense.
 * The caller controls the prefix (e.g. "ps_").
 */

import { getBrowserStorage } from "../platform/browser-storage.js";

const nsKey = (prefix, key) => `${prefix}${key}`;

export function createNamespacedStorage(prefix = "") {
  const storage = getBrowserStorage();
  return {
    /**
     * Read raw string value (no JSON.parse). Useful for legacy migrations.
     */
    getRaw(key) {
      try {
        if (!storage) return null;
        return storage.getItem(nsKey(prefix, key));
      } catch (err) {
        console.warn("Storage raw read error", err);
        return null;
      }
    },

    /**
     * Write raw string value (no JSON.stringify). Useful for legacy migrations.
     */
    setRaw(key, raw) {
      try {
        if (!storage) return;
        storage.setItem(nsKey(prefix, key), raw);
      } catch (err) {
        console.warn("Storage raw write error", err);
      }
    },

    get(key, fallback = null) {
      try {
        if (!storage) return fallback;
        const raw = storage.getItem(nsKey(prefix, key));
        return raw ? JSON.parse(raw) : fallback;
      } catch (err) {
        console.warn("Storage read error", err);
        return fallback;
      }
    },

    set(key, value) {
      try {
        if (!storage) return;
        storage.setItem(nsKey(prefix, key), JSON.stringify(value));
      } catch (err) {
        console.warn("Storage write error", err);
      }
    },

    remove(key) {
      try {
        if (!storage) return;
        storage.removeItem(nsKey(prefix, key));
      } catch (err) {
        console.warn("Storage remove error", err);
      }
    },
  };
}
