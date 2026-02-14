// TenseKit v1 – theory pages contract
// -----------------------------------------------
// Theory pages are still implemented as normal React routes/components,
// but this helper documents how they map back to tense sections.

/**
 * @typedef {Object} TenseTheoryPageMeta
 * @property {string} sectionId       E.g. "affirmative", "negative"
 * @property {string} path            Route path to the theory page
 */

/**
 * @typedef {Object} TenseTheoryConfig
 * @property {string} basePath
 * @property {TenseTheoryPageMeta[]} pages
 */

/**
 * Simple pass‑through helper to make tense theory config explicit.
 *
 * @param {TenseTheoryConfig} theoryConfig
 * @returns {TenseTheoryConfig}
 */
export function defineTenseTheory(theoryConfig) {
  if (!theoryConfig || typeof theoryConfig !== "object") {
    throw new Error("[TenseKit] defineTenseTheory: theoryConfig must be an object.");
  }
  if (!theoryConfig.basePath) {
    throw new Error("[TenseKit] defineTenseTheory: 'basePath' is required.");
  }
  return theoryConfig;
}
