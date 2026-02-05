// Present Continuous manifest (read-only registry)
// Mirrors the Present Simple manifest, but for Present Continuous.

import React from "react";
import "./pc-theme.css";

import {
  PC_ROOMS_PER_SECTION,
  PC_SECTIONS,
  PC_STORAGE_PREFIX,
  PC_HUD_TEXT,
} from "./pc-core/config.js";
import { PC_ASSETS_BASE, PC_LEX_HEAD_SVG } from "./pc-core/assets.js";

// Top-level pages
import PresentContinuousPage from "./PresentContinuousPage.jsx";
import PresentContinuousOverviewPage from "./PresentContinuousOverviewPage.jsx";
import PcMapPage from "./pages/PcMapPage.jsx";
import PcBadgePage from "./pages/PcBadgePage.jsx";

import { PC_SECTION_PAGES } from "./pc-section-pages.jsx";

import { PC_BASE_PATH, pcTheoryPath } from "./pc-paths.js";

// NOTE: PC_BASE_PATH + path helpers live in pc-paths.js to avoid circular imports.

/**
 * Route list for React Router.
 * Same set of routes as before, just generated from the manifest.
 */
export function buildPresentContinuousRoutes() {
  const routes = [
    { path: PC_BASE_PATH, element: <PresentContinuousPage /> },
    {
      path: `${PC_BASE_PATH}/overview`,
      element: <PresentContinuousOverviewPage />,
    },
    { path: `${PC_BASE_PATH}/badge`, element: <PcBadgePage /> },
    { path: `${PC_BASE_PATH}/map`, element: <PcMapPage /> },
  ];

  // Generic room route renderer (one route per section, params select the room)
  const PcRoomRoute = React.lazy(() => import("./PcRoomRoute.jsx"));

  for (const section of PC_SECTIONS) {
    const pages = PC_SECTION_PAGES[section.id];
    if (!pages) continue;

    routes.push({
      path: pcTheoryPath(section.id),
      element: React.createElement(pages.theory),
    });

    if (section.id === "uses" && pages.sensoryTheory) {
      routes.push({
        path: `${PC_BASE_PATH}/uses/sensory`,
        element: React.createElement(pages.sensoryTheory),
      });
    }

    // Keep the same URL shape as pcRoomPath(sectionId, n) (e.g. room-1), but
    // React Router params cannot be embedded inside a segment ("room-:n").
    // We match the full slug and parse it in PcRoomRoute.
    routes.push({
      path: `${PC_BASE_PATH}/${section.id}/:roomSlug`,
      element: (
        <React.Suspense fallback={null}>
          <PcRoomRoute sectionId={section.id} />
        </React.Suspense>
      ),
    });
  }

  return routes;
}

const PC_SECTIONS_META = PC_SECTIONS.reduce((acc, section) => {
  acc[section.id] = {
    id: section.id,
    title: section.title,
    description: section.description || "",
  };
  return acc;
}, {});

/**
 * Room + hints registries for Present Continuous.
 * Not yet wired – placeholders keep the manifest shape aligned to Present Simple.
 */
const PC_ROOM_REGISTRIES = null;
const PC_HINTS_REGISTRY = {};

/** Module metadata that the global registry consumes. */
export const PRESENT_CONTINUOUS_MANIFEST = {
  id: "present-continuous",
  label: "Present Continuous",
  // optional per-tense password environment key
  passwordEnvKey: "VITE_PASSWORD_PRESENT_CONTINUOUS",
  themeClass: "present-continuous-theme",
  assetsBase: PC_ASSETS_BASE,
  brandAvatarSrc: PC_LEX_HEAD_SVG,
  status: "preview",
  order: 2,
  description:
    "Teorie, 35 de camere de exerciții, cameră finală și badge. ...l Escape Room, cu Lex Junior, dicționare și butoane de listen.",
  basePath: PC_BASE_PATH,
  storagePrefix: PC_STORAGE_PREFIX,
  roomsPerSection: PC_ROOMS_PER_SECTION,
  sections: PC_SECTIONS,
  sectionsMeta: PC_SECTIONS_META,
  roomRegistries: PC_ROOM_REGISTRIES,
  hintsRegistry: PC_HINTS_REGISTRY,
  hudText: PC_HUD_TEXT,
};
