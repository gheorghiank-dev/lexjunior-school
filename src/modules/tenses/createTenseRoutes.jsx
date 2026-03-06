import React from "react";

/**
 * Generic route builder for a tense module.
 *
 * Goal:
 * - keep route shapes identical to the current app
 * - remove repeated routing boilerplate from per-tense manifests
 * - allow each tense to declare only its top pages + section page registry
 *
 * Expected inputs:
 * - basePath: "/grammar/tenses/present-simple"
 * - topLevelRoutes: [{ path, element }, ...]
 * - sections: array of section objects from config
 * - sectionPages: mapping { [sectionId]: { theory, sensoryTheory? } }
 * - theoryPath: function(sectionId) => full theory path
 * - createRoomRouteElement: function(sectionId) => ReactElement
 * - getExtraSectionRoutes?: optional function(section, pages) => route[]
 */
export function createTenseRoutes({
  basePath,
  topLevelRoutes = [],
  sections = [],
  sectionPages = {},
  theoryPath,
  createRoomRouteElement,
  getExtraSectionRoutes,
}) {
  if (typeof basePath !== "string" || !basePath.trim()) {
    throw new Error("createTenseRoutes: basePath must be a non-empty string");
  }

  if (typeof theoryPath !== "function") {
    throw new Error("createTenseRoutes: theoryPath must be a function");
  }

  if (typeof createRoomRouteElement !== "function") {
    throw new Error(
      "createTenseRoutes: createRoomRouteElement must be a function",
    );
  }

  const routes = [...topLevelRoutes];

  for (const section of sections) {
    const sectionId = section?.id;
    if (!sectionId) continue;

    const pages = sectionPages?.[sectionId];
    if (!pages?.theory) continue;

    routes.push({
      path: theoryPath(sectionId),
      element: React.createElement(pages.theory),
    });

    if (typeof getExtraSectionRoutes === "function") {
      const extraRoutes = getExtraSectionRoutes(section, pages);
      if (Array.isArray(extraRoutes) && extraRoutes.length > 0) {
        routes.push(...extraRoutes.filter(Boolean));
      }
    }

    routes.push({
      path: `${basePath}/${sectionId}/:roomSlug`,
      element: createRoomRouteElement(sectionId),
    });
  }

  return routes;
}
