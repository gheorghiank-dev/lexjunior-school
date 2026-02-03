// Present Simple manifest (read-only registry)
// Sprint 2: centralize metadata in one place *without* changing routes/UX yet.
// This becomes a single source of truth for future route + map generation.

import React from "react";
import "./ps-theme.css";

import {
  SECTIONS,
  ROOMS_PER_SECTION,
  STORAGE_PREFIX,
} from "./ps-core/config.js";
import { PS_ASSETS_BASE, PS_LEX_HEAD_SVG } from "./ps-core/assets.js";

// Top-level pages
import PresentSimplePage from "./PresentSimplePage.jsx";
import PresentSimpleOverviewPage from "./PresentSimpleOverviewPage.jsx";
import PsDownloadsPage from "./PsDownloadsPage.jsx";
import PsNotesPage from "./PsNotesPage.jsx";
import PsBadgePage from "./PsBadgePage.jsx";
import PsMapPage from "./PsMapPage.jsx";

import { PS_SECTION_PAGES } from "./ps-section-pages.jsx";

import { PS_BASE_PATH, psTheoryPath } from "./ps-paths.js";

// NOTE: PS_BASE_PATH + path helpers live in ps-paths.js to avoid circular imports.

/**
 * Route list for React Router.
 * Same set of routes as before, just generated from the manifest.
 */
export function buildPresentSimpleRoutes() {
  const routes = [
    { path: PS_BASE_PATH, element: <PresentSimplePage /> },
    {
      path: `${PS_BASE_PATH}/overview`,
      element: <PresentSimpleOverviewPage />,
    },
    { path: `${PS_BASE_PATH}/downloads`, element: <PsDownloadsPage /> },
    { path: `${PS_BASE_PATH}/notes`, element: <PsNotesPage /> },
    { path: `${PS_BASE_PATH}/badge`, element: <PsBadgePage /> },
    { path: `${PS_BASE_PATH}/map`, element: <PsMapPage /> },
  ];

  // Generic room route renderer (one route per section, params select the room)
  const PsRoomRoute = React.lazy(() => import("./PsRoomRoute.jsx"));

  for (const section of SECTIONS) {
    const pages = PS_SECTION_PAGES[section.id];
    if (!pages) continue;

    routes.push({
      path: psTheoryPath(section.id),
      element: React.createElement(pages.theory),
    });

    if (section.id === "uses" && pages.sensoryTheory) {
      routes.push({
        path: `${PS_BASE_PATH}/uses/theory-sensory`,
        element: React.createElement(pages.sensoryTheory),
      });
    }

    // Keep the same URL shape as psRoomPath(sectionId, n) (e.g. room-1), but
    // React Router params cannot be embedded inside a segment ("room-:n").
    // We match the full slug and parse it in PsRoomRoute.
    routes.push({
      path: `${PS_BASE_PATH}/${section.id}/:roomSlug`,
      element: (
        <React.Suspense fallback={null}>
          <PsRoomRoute sectionId={section.id} />
        </React.Suspense>
      ),
    });
  }

  return routes;
}

/** Module metadata that the global registry consumes. */
export const PRESENT_SIMPLE_MANIFEST = {
  id: "present-simple",
  label: "Present Simple",
  // optional per-tense password environment key
  passwordEnvKey: "VITE_PASSWORD_PRESENT_SIMPLE",
  themeClass: "present-simple-theme",
  assetsBase: PS_ASSETS_BASE,
  brandAvatarSrc: PS_LEX_HEAD_SVG,
  status: "ready",
  order: 1,
  description:
    "Teorie, hartă, 7 camere de exerciții, cameră finală și badge. Toate pe stil Escape Room, cu Lex Junior, dicționare și butoane de listen.",
  basePath: PS_BASE_PATH,
  storagePrefix: STORAGE_PREFIX,
  roomsPerSection: ROOMS_PER_SECTION,
  sections: SECTIONS,
};
