import { ensureArray, ensureNonEmptyString, ensureObject } from "./utils.js";

/**
 * @typedef {Object} TenseTheoryPageMeta
 * @property {string} sectionId
 * @property {string} path
 */

/**
 * @typedef {Object} TenseTheoryConfig
 * @property {string} basePath
 * @property {TenseTheoryPageMeta[]} pages
 */

export function defineTenseTheory(theoryConfig) {
  ensureObject(theoryConfig, "defineTenseTheory: theoryConfig");
  ensureNonEmptyString(theoryConfig.basePath, "defineTenseTheory: 'basePath'");
  ensureArray(theoryConfig.pages, "defineTenseTheory: 'pages'");

  if (theoryConfig.pages.length === 0) {
    throw new Error("[TenseKit] defineTenseTheory: 'pages' must not be empty.");
  }

  theoryConfig.pages.forEach((page, index) => {
    if (!page || typeof page !== "object") {
      throw new Error(`[TenseKit] defineTenseTheory: pages[${index}] must be an object.`);
    }
    ensureNonEmptyString(page.sectionId, `defineTenseTheory: pages[${index}].sectionId`);
    ensureNonEmptyString(page.path, `defineTenseTheory: pages[${index}].path`);

    if (!page.path.startsWith(theoryConfig.basePath)) {
      throw new Error(
        `[TenseKit] defineTenseTheory: pages[${index}].path must start with basePath '${theoryConfig.basePath}'.`,
      );
    }
  });

  return theoryConfig;
}
