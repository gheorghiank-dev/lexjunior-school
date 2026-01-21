/**
 * Tense Module Contract (Sprint 2)
 *
 * The purpose of this contract is to let the app host multiple tenses
 * (Present Simple, Present Continuous, Past Simple, etc.) without copying
 * engine code or scattering routing logic.
 *
 * We keep this file as plain JS (no TS dependency) and document the shape
 * via JSDoc.
 */

/**
 * @typedef {Object} TenseRoute
 * @property {string} path - Full absolute route path.
 * @property {import('react').ReactElement} element - The page component.
 */

/**
 * @typedef {Object} TenseModule
 * @property {string} id
 * @property {string} label
 * @property {string} basePath
 * @property {string} storagePrefix
 * @property {number} roomsPerSection
 * @property {Record<string, any>} sections - Per-tense section ids/metadata.
 * @property {TenseRoute[]} routes
 *
 * Optional UI metadata (Sprint 5):
 * @property {string=} description
 * @property {'ready'|'preview'|'soon'=} status
 * @property {number=} order
 *
 * Optional theme metadata (Sprint 8):
 * @property {string=} themeClass - CSS class applied on .app-shell when this tense is active.
 *
 * Optional assets metadata (Sprint 9):
 * @property {string=} assetsBase - Public URL base for this tense assets.
 * @property {string=} brandAvatarSrc - Public URL used for the global brand avatar (header/home).
 */

/**
 * Tiny helper for runtime sanity (dev-only feel).
 * We intentionally keep it permissive to avoid breaking production.
 *
 * @param {TenseModule} mod
 */
export function assertTenseModule(mod) {
  if (!mod || typeof mod !== 'object') {
    throw new Error('Invalid tense module: expected an object');
  }
  const required = ['id', 'label', 'basePath', 'storagePrefix', 'roomsPerSection', 'routes'];
  for (const key of required) {
    if (!(key in mod)) {
      throw new Error(`Invalid tense module: missing '${key}'`);
    }
  }

  // Soft checks for optional fields.
  if ('status' in mod) {
    const ok = mod.status === 'ready' || mod.status === 'preview' || mod.status === 'soon';
    if (!ok) {
      throw new Error(`Invalid tense module: unsupported status '${mod.status}'`);
    }
  }

  if ('themeClass' in mod && mod.themeClass != null) {
    if (typeof mod.themeClass !== 'string' || mod.themeClass.trim().length === 0) {
      throw new Error('Invalid tense module: themeClass must be a non-empty string when provided');
    }
  }

  if ('assetsBase' in mod && mod.assetsBase != null) {
    if (typeof mod.assetsBase !== 'string' || mod.assetsBase.trim().length === 0) {
      throw new Error('Invalid tense module: assetsBase must be a non-empty string when provided');
    }
  }

  if ('brandAvatarSrc' in mod && mod.brandAvatarSrc != null) {
    if (typeof mod.brandAvatarSrc !== 'string' || mod.brandAvatarSrc.trim().length === 0) {
      throw new Error('Invalid tense module: brandAvatarSrc must be a non-empty string when provided');
    }
  }
}
