import { ensureNonEmptyString, ensureObject, getSectionIds } from "./utils.js";

/**
 * @param {import('./tense-schema.js').TenseManifest} manifest
 * @returns {import('./tense-schema.js').TenseManifest}
 */
export function defineTenseManifest(manifest) {
  ensureObject(manifest, "defineTenseManifest: manifest");
  ensureNonEmptyString(manifest.id, "defineTenseManifest: 'id'");
  ensureNonEmptyString(manifest.basePath, "defineTenseManifest: 'basePath'");
  ensureNonEmptyString(
    manifest.storagePrefix,
    "defineTenseManifest: 'storagePrefix'",
  );

  const sectionIds = getSectionIds(
    manifest.sections,
    "defineTenseManifest: 'sections'",
  );

  if (manifest.roomsPerSection != null) {
    if (
      !Number.isInteger(manifest.roomsPerSection) ||
      manifest.roomsPerSection <= 0
    ) {
      throw new Error(
        "[TenseKit] defineTenseManifest: 'roomsPerSection' must be a positive integer.",
      );
    }
  }

  if (manifest.sectionsMeta != null) {
    ensureObject(manifest.sectionsMeta, "defineTenseManifest: 'sectionsMeta'");
    for (const sectionId of sectionIds) {
      if (!manifest.sectionsMeta[sectionId]) {
        throw new Error(
          `[TenseKit] defineTenseManifest: sectionsMeta is missing '${sectionId}'.`,
        );
      }
    }
  }

  return manifest;
}
