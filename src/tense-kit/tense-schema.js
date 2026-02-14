// TenseKit v1 – top-level contract for tense modules.
// -----------------------------------------------
// This folder is intentionally *engine-agnostic*.
// It describes, in one place, the public shape that any tense
// (Present Simple, Present Continuous, future tenses, etc.) must follow.
//
// Guardrail for future work:
//  - Do NOT import React components here.
//  - Do NOT import module-specific content (PS/PC).
//  - Keep this dependency‑light so it can be safely imported
//    from both browser code and Node scripts (validators, CLIs).

/**
 * @typedef {Object} TenseManifest
 * @property {string} id                Stable id, e.g. "present-simple"
 * @property {string} label             Human‑readable name
 * @property {string} basePath          Route base, e.g. "/grammar/tenses/present-simple"
 * @property {string} storagePrefix     Prefix for localStorage keys, e.g. "ps_"
 * @property {number} roomsPerSection   Expected number of rooms per branch (usually 7)
 * @property {Array<{ id: string, label: string }>} sections
 *   Machine‑readable section ids + short labels (affirmative / negative / etc.).
 * @property {Record<string, { title: string, description?: string }>} sectionsMeta
 *   Long‑form titles + descriptions keyed by section id.
 *
 * // Optional but recommended:
 * @property {string} [status]          "ready" | "wip" | "coming-soon"
 * @property {number} [order]           Sort order in Grammar Hub
 * @property {string} [description]     Short teaser used in cards
 * @property {string} [themeClass]      CSS class attached to <body> / app shell
 * @property {string} [assetsBase]      Base path for tense‑specific assets
 * @property {string} [brandAvatarSrc]  Lex Junior avatar used on maps / overview
 * @property {object} [hudText]         HUD strings consumed by the engine
 * @property {object} [hintsRegistry]   Lex hints registry, tense‑specific
 */

/**
 * @typedef {Object} TenseRoomsConfig
 * @property {string} registryName      Human‑readable label for debugging
 * @property {Array<{ id: string, label: string }>} sections
 * @property {Record<string, import('./tense-rooms-schema.js').TenseSectionRooms>} roomRegistries
 */

/**
 * @typedef {Object} TenseTheoryConfig
 * @property {string} basePath
 * @property {Record<string, { path: string }>} pagesBySection
 *   Maps section id -> route path for the theory page.
 */

/**
 * @typedef {Object} TenseThemeConfig
 * @property {string} themeClass
 * @property {string} [brandColorLight]
 * @property {string} [brandColorDark]
 * @property {string} [accentColor]
 */

/**
 * Bundle all pieces of a tense definition in a single object.
 * This is mostly documentation sugar – it does not perform deep validation
 * and it does not change behaviour at runtime.
 *
 * @param {{ manifest: TenseManifest, rooms?: TenseRoomsConfig, theory?: TenseTheoryConfig, theme?: TenseThemeConfig }} config
 */
export function defineTenseKit(config) {
  if (!config || typeof config !== "object") {
    throw new Error("[TenseKit] defineTenseKit: config must be an object.");
  }
  if (!config.manifest || typeof config.manifest !== "object") {
    throw new Error("[TenseKit] defineTenseKit: 'manifest' is required.");
  }
  return config;
}
