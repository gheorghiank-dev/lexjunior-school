// NOTE:
// This file documents the shape of a "tense manifest" used by Lex Junior v2.
// It is *not* imported in runtime code. It exists as a reference for future
// tenses and for developers who want to understand what a manifest contains.

/**
 * One section inside a tense (e.g. "affirmative", "negative"...)
 *
 * @typedef {Object} TenseSection
 * @property {string} id
 * @property {string} title
 * @property {string} [description]
 */

/**
 * Registry of rooms for a single section.
 * In practice this is an array of "room config" objects, but the exact
 * shape is defined inside each tense module.
 *
 * @typedef {Array<Object>} SectionRoomRegistry
 */

/**
 * Map from section id to an array of rooms.
 *
 * @typedef {Object.<string, SectionRoomRegistry>} RoomRegistriesBySection
 */

/**
 * Map from section id to Lex Junior hints configuration.
 *
 * @typedef {Object.<string, any>} HintsRegistryBySection
 */

/**
 * HUD text (labels & messages) for a tense.
 * The exact keys live in each tense's config, but this typedef shows that
 * the value is always a plain object.
 *
 * @typedef {Object<string, string>} HudText
 */

/**
 * Canonical shape of a tense manifest in Lex Junior v2.
 *
 * This is what modules like `present-simple.module.jsx` and
 * `past-simple.module.jsx` pass into `createTenseModule`.
 *
 * @typedef {Object} TenseManifest
 * @property {string} id                 - Unique tense id, e.g. "present-simple"
 * @property {string} label              - Short label for UI cards, e.g. "Present Simple"
 * @property {string} basePath           - Base route path, e.g. "/grammar/tenses/present-simple"
 * @property {string} storagePrefix      - Prefix for localStorage keys, e.g. "ps_"
 * @property {number} roomsPerSection    - Number of rooms per section (same for all sections)
 * @property {TenseSection[]} sections   - Sections (affirmative, negative, etc.)
 * @property {Object.<string, TenseSection>} [sectionsMeta] - Optional map of section metadata
 * @property {string} themeClass         - Root CSS theme class, e.g. "present-simple-theme"
 * @property {string} assetsBase         - Base URL/path for tense-specific assets
 * @property {string} brandAvatarSrc     - Lex avatar for this tense
 * @property {string} [passwordEnvKey]   - Optional env key for per-tense password
 * @property {"preview"|"ready"} status  - Whether the tense is fully ready or still in preview
 * @property {number} order              - Sort order in the Tenses hub
 * @property {string} description        - Long description for marketing / hub cards
 * @property {RoomRegistriesBySection} roomRegistries - Rooms for each section
 * @property {HintsRegistryBySection} hintsRegistry   - Lex hints for each section
 * @property {HudText} hudText           - HUD labels for this tense
 */

/**
 * This export is only here so the file has a valid module shape.
 * It is not used at runtime. Think of it as "schema documentation".
 *
 * @type {TenseManifest | {}}
 */
export const TENSE_MANIFEST_SCHEMA_DOC = {};
