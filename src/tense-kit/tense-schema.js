import { assertRoomSequence, ensureObject, getSectionIds } from "./utils.js";

/**
 * @typedef {Object} TenseManifest
 * @property {string} id
 * @property {string} label
 * @property {string} basePath
 * @property {string} storagePrefix
 * @property {number} roomsPerSection
 * @property {Array<{ id: string, label: string }>} sections
 * @property {Record<string, { title: string, description?: string }>} sectionsMeta
 * @property {string} [status]
 * @property {number} [order]
 * @property {string} [description]
 * @property {string} [themeClass]
 * @property {string} [assetsBase]
 * @property {string} [brandAvatarSrc]
 * @property {object} [hudText]
 * @property {object} [hintsRegistry]
 */

/**
 * @typedef {Object} TenseRoomsConfig
 * @property {string} registryName
 * @property {Array<{ id: string, label: string }>} sections
 * @property {Record<string, import('./tense-rooms-schema.js').TenseSectionRooms>} roomRegistries
 */

/**
 * @typedef {Object} TenseTheoryConfig
 * @property {string} basePath
 * @property {Record<string, { path: string }>} pagesBySection
 */

/**
 * @typedef {Object} TenseThemeConfig
 * @property {string} themeClass
 * @property {string} [brandColorLight]
 * @property {string} [brandColorDark]
 * @property {string} [accentColor]
 */

export function defineTenseKit(config) {
  ensureObject(config, "defineTenseKit: config");
  ensureObject(config.manifest, "defineTenseKit: 'manifest'");

  const manifest = config.manifest;
  const sectionIds = getSectionIds(manifest.sections, "defineTenseKit: manifest.sections");

  if (config.rooms) {
    ensureObject(config.rooms, "defineTenseKit: 'rooms'");

    for (const sectionId of sectionIds) {
      const rooms = config.rooms[sectionId];
      if (!rooms) {
        throw new Error(`[TenseKit] defineTenseKit: rooms config is missing '${sectionId}'.`);
      }
      assertRoomSequence(sectionId, rooms);

      if (
        Number.isInteger(manifest.roomsPerSection) &&
        rooms.length !== manifest.roomsPerSection
      ) {
        throw new Error(
          `[TenseKit] defineTenseKit: section '${sectionId}' has ${rooms.length} rooms, expected ${manifest.roomsPerSection}.`,
        );
      }
    }
  }

  if (config.theory) {
    ensureObject(config.theory, "defineTenseKit: 'theory'");
    const pages = Array.isArray(config.theory.pages) ? config.theory.pages : [];

    for (const sectionId of sectionIds) {
      const hasTheoryPage = pages.some((page) => page.sectionId === sectionId);
      if (!hasTheoryPage) {
        throw new Error(
          `[TenseKit] defineTenseKit: theory config is missing a page for section '${sectionId}'.`,
        );
      }
    }
  }

  return config;
}
