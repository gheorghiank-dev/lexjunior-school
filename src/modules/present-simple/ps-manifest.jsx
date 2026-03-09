// Present Simple manifest (read-only registry)
// Sprint 2: centralize metadata in one place *without* changing routes/UX yet.
// This becomes a single source of truth for future route + map generation.

import React from "react";
import "./ps-theme.css";

import {
  PS_SECTIONS,
  PS_ROOMS_PER_SECTION,
  STORAGE_PREFIX,
  HUD_TEXT,
} from "./ps-core/config.js";
import { PS_ASSETS_BASE, PS_LEX_HEAD_SVG } from "./ps-core/assets.js";

import { PS_AFFIRMATIVE_ROOMS } from "./rooms/ps-affirmative-rooms.jsx";
import { PS_NEGATIVE_ROOMS } from "./rooms/ps-negative-rooms.jsx";
import { PS_INTERROGATIVE_ROOMS } from "./rooms/ps-interrogative-rooms.jsx";
import { PS_USES_ROOMS } from "./rooms/ps-uses-rooms.jsx";
import { PS_TIMEEXPRESSIONS_ROOMS } from "./rooms/ps-time-expressions-rooms.jsx";

import {
  presentSimpleAffirmativeLexHints,
  presentSimpleNegativeLexHints,
  presentSimpleInterrogativeLexHints,
  presentSimpleUsesLexHints,
  presentSimpleTimeExpressionsLexHints,
  presentSimpleBadgeLexHints,
} from "../lex-hints/present-simple/index.js";

// Top-level pages
import PresentSimplePage from "./pages/PresentSimplePage.jsx";
import PresentSimpleOverviewPage from "./pages/PresentSimpleOverviewPage.jsx";
import PsDownloadsPage from "./pages/PsDownloadsPage.jsx";
import PsNotesPage from "./pages/PsNotesPage.jsx";
import PsBadgePage from "./pages/PsBadgePage.jsx";
import PsMapPage from "./pages/PsMapPage.jsx";

import { PS_SECTION_PAGES } from "./ps-section-pages.jsx";

import { PS_BASE_PATH, psTheoryPath } from "./ps-paths.js";

import {
  defineTenseManifest,
  defineTenseRooms,
  defineTenseTheory,
  defineTenseKit,
  defineTenseTheme,
} from "../../tense-kit";
import { createTenseRoutes } from "../tenses/createTenseRoutes.jsx";

// NOTE: PS_BASE_PATH + path helpers live in ps-paths.js to avoid circular imports.

/**
 * Route list for React Router.
 * Same set of routes as before, just generated from the manifest.
 */
export function buildPresentSimpleRoutes() {
  const PsRoomRoute = React.lazy(() => import("./pages/PsRoomRoute.jsx"));

  return createTenseRoutes({
    basePath: PS_BASE_PATH,
    topLevelRoutes: [
      { path: PS_BASE_PATH, element: <PresentSimplePage /> },
      {
        path: `${PS_BASE_PATH}/overview`,
        element: <PresentSimpleOverviewPage />,
      },
      { path: `${PS_BASE_PATH}/downloads`, element: <PsDownloadsPage /> },
      { path: `${PS_BASE_PATH}/notes`, element: <PsNotesPage /> },
      { path: `${PS_BASE_PATH}/badge`, element: <PsBadgePage /> },
      { path: `${PS_BASE_PATH}/map`, element: <PsMapPage /> },
    ],
    sections: PS_SECTIONS,
    sectionPages: PS_SECTION_PAGES,
    theoryPath: psTheoryPath,
    createRoomRouteElement: (sectionId) => (
      <React.Suspense fallback={null}>
        <PsRoomRoute sectionId={sectionId} />
      </React.Suspense>
    ),
    getExtraSectionRoutes: () => [],
  });
}

const PS_SECTIONS_META = PS_SECTIONS.reduce((acc, section) => {
  acc[section.id] = {
    id: section.id,
    title: section.title,
    description: section.description,
  };
  return acc;
}, {});

/**
 * Room registries for Present Simple (affirmative, negative, interrogative, uses, time-expressions).
 * These are read-only and consumed by the Core Lex Engine / TenseKit.
 */
const PS_ROOM_REGISTRIES = {
  affirmative: PS_AFFIRMATIVE_ROOMS,
  negative: PS_NEGATIVE_ROOMS,
  interrogative: PS_INTERROGATIVE_ROOMS,
  uses: PS_USES_ROOMS,
  "time-expressions": PS_TIMEEXPRESSIONS_ROOMS,
};

/**
 * Lex Junior hints registry for Present Simple.
 * Hint engine can consume this by tense/section/room.
 */
const PS_HINTS_REGISTRY = {
  affirmative: presentSimpleAffirmativeLexHints,
  negative: presentSimpleNegativeLexHints,
  interrogative: presentSimpleInterrogativeLexHints,
  uses: presentSimpleUsesLexHints,
  "time-expressions": presentSimpleTimeExpressionsLexHints,
  badge: presentSimpleBadgeLexHints,
};

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
    "Teorie, camere de exerciții, cameră finală și badge pentru Present Simple.",
  basePath: PS_BASE_PATH,
  storagePrefix: STORAGE_PREFIX,
  roomsPerSection: PS_ROOMS_PER_SECTION,
  sections: PS_SECTIONS,
  sectionsMeta: PS_SECTIONS_META,
  roomRegistries: PS_ROOM_REGISTRIES,
  hintsRegistry: PS_HINTS_REGISTRY,
  hudText: HUD_TEXT,
};

// TenseKit v1 – Present Simple full tense definition
// This keeps behaviour identical, but documents the shape for future tenses.

export const PRESENT_SIMPLE_THEORY_CONFIG = defineTenseTheory({
  basePath: PS_BASE_PATH,
  pages: [
    { sectionId: "affirmative", path: psTheoryPath("affirmative") },
    { sectionId: "negative", path: psTheoryPath("negative") },
    { sectionId: "interrogative", path: psTheoryPath("interrogative") },
    { sectionId: "uses", path: psTheoryPath("uses") },
    { sectionId: "time-expressions", path: psTheoryPath("time-expressions") },
  ],
});

export const PRESENT_SIMPLE_ROOMS_CONFIG = defineTenseRooms(PS_ROOM_REGISTRIES);

export const PRESENT_SIMPLE_THEME_CONFIG = defineTenseTheme({
  id: "present-simple",
  themeClass: "present-simple-theme",
});

export const PRESENT_SIMPLE_TENSE_KIT = defineTenseKit({
  manifest: defineTenseManifest(PRESENT_SIMPLE_MANIFEST),
  rooms: PRESENT_SIMPLE_ROOMS_CONFIG,
  theory: PRESENT_SIMPLE_THEORY_CONFIG,
  theme: PRESENT_SIMPLE_THEME_CONFIG,
});
