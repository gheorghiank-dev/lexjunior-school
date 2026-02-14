// TenseKit v1 – manifest helpers
// -----------------------------------------------
// The manifest describes the *identity* + *routing* + *progress*
// metadata for a tense. It is intentionally UI‑oriented and
// tense‑agnostic for the engine.

/**
 * @param {import('./tense-schema.js').TenseManifest} manifest
 * @returns {import('./tense-schema.js').TenseManifest}
 */
export function defineTenseManifest(manifest) {
  if (!manifest || typeof manifest !== "object") {
    throw new Error("[TenseKit] defineTenseManifest: manifest must be an object.");
  }
  if (!manifest.id) {
    throw new Error("[TenseKit] defineTenseManifest: 'id' is required.");
  }
  if (!manifest.basePath) {
    throw new Error("[TenseKit] defineTenseManifest: 'basePath' is required.");
  }
  if (!manifest.storagePrefix) {
    throw new Error("[TenseKit] defineTenseManifest: 'storagePrefix' is required.");
  }
  if (!manifest.sections || !Array.isArray(manifest.sections) || manifest.sections.length === 0) {
    throw new Error("[TenseKit] defineTenseManifest: 'sections' must be a non‑empty array.");
  }

  // We intentionally avoid Object.freeze here to stay 100% compatible
  // with any existing code that might still mutate manifest objects.
  return manifest;
}
