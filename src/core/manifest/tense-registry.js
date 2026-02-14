/**
 * Tense registry v2 – thin facade over modules/tenses/registry.
 *
 * Goal for Sprint 2:
 *  - provide a stable, core-level entrypoint that the new router,
 *    pages and layout modules can depend on, without importing from
 *    src/modules directly.
 *
 * In later sprints we'll progressively move more logic here.
 */

import {
  tenseModules,
  getTenseCards,
  getTenseRouteEntries,
  getTenseThemeClassForPath,
  getDefaultBrandAvatarSrc,
} from "../../modules/tenses/registry.js";

export {
  tenseModules,
  getTenseCards,
  getTenseRouteEntries,
  getTenseThemeClassForPath,
  getDefaultBrandAvatarSrc,
};
