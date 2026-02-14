// Present Continuous manifest (read-only registry)
// Mirrors the Present Simple manifest, but for Present Continuous.


import {
  presentContinuousAffirmativeLexHints,
  presentContinuousNegativeLexHints,
  presentContinuousInterrogativeLexHints,
  presentContinuousUsesLexHints,
  presentContinuousTimeExpressionsLexHints,
  presentContinuousBadgeLexHints,
} from "../lex-hints/present-continuous/index.js";

import React from "react";
import "./pc-theme.css";

import {
  PC_ROOMS_PER_SECTION,
  PC_SECTIONS,
  PC_STORAGE_PREFIX,
  PC_HUD_TEXT,
} from "./pc-core/config.js";
import { PC_ASSETS_BASE, PC_LEX_HEAD_SVG } from "./pc-core/assets.js";
import {
  defineTenseManifest,
  defineTenseRooms,
  defineTenseTheory,
  defineTenseKit,
  defineTenseTheme,
} from "../../tense-kit";

// Top-level pages
import PresentContinuousPage from "./PresentContinuousPage.jsx";
import PresentContinuousOverviewPage from "./PresentContinuousOverviewPage.jsx";
import PcMapPage from "./pages/PcMapPage.jsx";
import PcBadgePage from "./pages/PcBadgePage.jsx";

import {
  PC_AFFIRMATIVE_ROOMS,
  PC_NEGATIVE_ROOMS,
  PC_INTERROGATIVE_ROOMS,
  PC_USES_ROOMS,
  PC_TIMEEXPRESSIONS_ROOMS,
} from "./rooms";

import { PC_SECTION_PAGES } from "./pc-section-pages.jsx";

import { PC_BASE_PATH, pcTheoryPath, pcUsesSensoryTheoryPath } from "./pc-paths.js";

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
 * Room registries currently mirror the page components per section.
 * A future refactor can move PC to data-driven room registries like Present Simple.
 */
const PC_ROOM_REGISTRIES = {
  affirmative: PC_AFFIRMATIVE_ROOMS,
  negative: PC_NEGATIVE_ROOMS,
  interrogative: PC_INTERROGATIVE_ROOMS,
  uses: PC_USES_ROOMS,
  "time-expressions": PC_TIMEEXPRESSIONS_ROOMS,
};

const PC_HINTS_REGISTRY = {
  affirmative: presentContinuousAffirmativeLexHints,
  negative: presentContinuousNegativeLexHints,
  interrogative: presentContinuousInterrogativeLexHints,
  uses: presentContinuousUsesLexHints,
  "time-expressions": presentContinuousTimeExpressionsLexHints,
  badge: presentContinuousBadgeLexHints,
};

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

// TenseKit v1 – Present Continuous full tense definition
// Mirrors the Present Simple TenseKit shape.

export const PRESENT_CONTINUOUS_THEORY_CONFIG = defineTenseTheory({
  basePath: PC_BASE_PATH,
  pages: [
    { sectionId: "affirmative", path: pcTheoryPath("affirmative") },
    { sectionId: "negative", path: pcTheoryPath("negative") },
    { sectionId: "interrogative", path: pcTheoryPath("interrogative") },
    { sectionId: "uses", path: pcTheoryPath("uses") },
    // Extra sensory theory route for Uses (same section id).
    { sectionId: "uses", path: pcUsesSensoryTheoryPath() },
    { sectionId: "time-expressions", path: pcTheoryPath("time-expressions") },
  ],
});

export const PRESENT_CONTINUOUS_ROOMS_CONFIG = defineTenseRooms(PC_ROOM_REGISTRIES);

export const PRESENT_CONTINUOUS_THEME_CONFIG = defineTenseTheme({
  id: "present-continuous",
  themeClass: "present-continuous-theme",
});

export const PRESENT_CONTINUOUS_TENSE_KIT = defineTenseKit({
  manifest: defineTenseManifest(PRESENT_CONTINUOUS_MANIFEST),
  rooms: PRESENT_CONTINUOUS_ROOMS_CONFIG,
  theory: PRESENT_CONTINUOUS_THEORY_CONFIG,
  theme: PRESENT_CONTINUOUS_THEME_CONFIG,
});

