// TenseKit v1 – theming contract
// -----------------------------------------------
// Visual identity for a tense lives primarily in CSS
// (e.g. ps-theme.css / pc-theme.css). This helper documents the
// JS‑visible theme metadata consumed by the app shell / Grammar Hub.

/**
 * @typedef {Object} TenseThemeConfig
 * @property {string} id              Tense id, e.g. "present-simple"
 * @property {string} themeClass      CSS class applied on the app shell
 * @property {string} [brandColorLight]
 * @property {string} [brandColorDark]
 * @property {string} [accentColor]
 */

/**
 * @param {TenseThemeConfig} theme
 * @returns {TenseThemeConfig}
 */
export function defineTenseTheme(theme) {
  if (!theme || typeof theme !== "object") {
    throw new Error("[TenseKit] defineTenseTheme: theme must be an object.");
  }
  if (!theme.id) {
    throw new Error("[TenseKit] defineTenseTheme: 'id' is required.");
  }
  if (!theme.themeClass) {
    throw new Error("[TenseKit] defineTenseTheme: 'themeClass' is required.");
  }
  return theme;
}
