// Past Simple manifest (read-only registry)
// Mirrors the Present Simple / Present Continuous manifests, but for Past Simple.

import {
  pastSimpleAffirmativeLexHints,
  pastSimpleNegativeLexHints,
  pastSimpleInterrogativeLexHints,
  pastSimpleUsesLexHints,
  pastSimpleTimeExpressionsLexHints,
  pastSimpleBadgeLexHints,
} from "../lex-hints/past-simple/index.js";

import React from "react";
import "./past-theme.css";

import {
  PAST_SIMPLE_ROOMS_PER_SECTION,
  PAST_SIMPLE_SECTIONS,
  PAST_SIMPLE_STORAGE_PREFIX,
  PAST_SIMPLE_HUD_TEXT,
} from "./past-core/config.js";
import {
  PAST_SIMPLE_ASSETS_BASE,
  PAST_SIMPLE_LEX_HEAD_SVG,
} from "./past-core/assets.js";

import PastSimplePage from "./pages/PastSimplePage.jsx";
import PastSimpleOverviewPage from "./pages/PastSimpleOverviewPage.jsx";
import PastSimpleMapPage from "./pages/PastSimpleMapPage.jsx";
import PastSimpleBadgePage from "./pages/PastSimpleBadgePage.jsx";

import { PAST_SIMPLE_AFFIRMATIVE_ROOMS } from "./rooms/past-affirmative-rooms.jsx";
import { PAST_SIMPLE_NEGATIVE_ROOMS } from "./rooms/past-negative-rooms.jsx";
import { PAST_SIMPLE_INTERROGATIVE_ROOMS } from "./rooms/past-interrogative-rooms.jsx";
import { PAST_SIMPLE_USES_ROOMS } from "./rooms/past-uses-rooms.jsx";
import { PAST_SIMPLE_TIME_EXPRESSIONS_ROOMS } from "./rooms/past-time-expressions-rooms.jsx";

import { PAST_SIMPLE_SECTION_PAGES } from "./past-section-pages.jsx";
import { PAST_SIMPLE_BASE_PATH, pastSimpleTheoryPath } from "./past-paths.js";

import {
  defineTenseManifest,
  defineTenseRooms,
  defineTenseTheory,
  defineTenseKit,
  defineTenseTheme,
} from "../../tense-kit";

// NOTE: PAST_SIMPLE_BASE_PATH + path helpers live in past-paths.js to avoid circular imports.

/**
 * Route list for React Router.
 * Same set of routes as for other tenses, just generated from the manifest.
 */
export function buildPastSimpleRoutes() {
  const routes = [
    { path: PAST_SIMPLE_BASE_PATH, element: <PastSimplePage /> },
    {
      path: `${PAST_SIMPLE_BASE_PATH}/overview`,
      element: <PastSimpleOverviewPage />,
    },
    {
      path: `${PAST_SIMPLE_BASE_PATH}/badge`,
      element: <PastSimpleBadgePage />,
    },
    {
      path: `${PAST_SIMPLE_BASE_PATH}/map`,
      element: <PastSimpleMapPage />,
    },
  ];

  // Generic room route renderer (one route per section, params select the room)
  const PastSimpleRoomRoute = React.lazy(
    () => import("./pages/PastSimpleRoomRoute.jsx"),
  );

  for (const section of PAST_SIMPLE_SECTIONS) {
    const pages = PAST_SIMPLE_SECTION_PAGES[section.id];
    if (!pages) continue;

    // theory route for the section
    routes.push({
      path: pastSimpleTheoryPath(section.id),
      element: React.createElement(pages.theory),
    });

    // room routes for the section, e.g. /past-simple/affirmative/room-1
    routes.push({
      path: `${PAST_SIMPLE_BASE_PATH}/${section.id}/:roomSlug`,
      element: (
        <React.Suspense fallback={null}>
          <PastSimpleRoomRoute sectionId={section.id} />
        </React.Suspense>
      ),
    });
  }

  return routes;
}

// Section metadata derived from config (title + description by id).
const PAST_SIMPLE_SECTIONS_META = PAST_SIMPLE_SECTIONS.reduce(
  (acc, section) => {
    acc[section.id] = {
      id: section.id,
      title: section.title,
      description: section.description || "",
    };
    return acc;
  },
  {},
);

/**
 * Room registries for Past Simple (affirmative, negative, interrogative, uses, time-expressions).
 * These are read-only and consumed by the Core Lex Engine / TenseKit.
 */
const PAST_SIMPLE_ROOM_REGISTRIES = {
  affirmative: PAST_SIMPLE_AFFIRMATIVE_ROOMS,
  negative: PAST_SIMPLE_NEGATIVE_ROOMS,
  interrogative: PAST_SIMPLE_INTERROGATIVE_ROOMS,
  uses: PAST_SIMPLE_USES_ROOMS,
  timeexpressions: PAST_SIMPLE_TIME_EXPRESSIONS_ROOMS,
};

const PAST_SIMPLE_HINTS_REGISTRY = {
  affirmative: pastSimpleAffirmativeLexHints,
  negative: pastSimpleNegativeLexHints,
  interrogative: pastSimpleInterrogativeLexHints,
  uses: pastSimpleUsesLexHints,
  "time-expressions": pastSimpleTimeExpressionsLexHints,
  badge: pastSimpleBadgeLexHints,
};

/** Module metadata that the global registry consumes. */
export const PAST_SIMPLE_MANIFEST = {
  id: "past-simple",
  label: "Past Simple",
  // optional per-tense password environment key
  passwordEnvKey: "VITE_PASSWORD_PAST_SIMPLE",
  themeClass: "past-simple-theme",
  assetsBase: PAST_SIMPLE_ASSETS_BASE,
  brandAvatarSrc: PAST_SIMPLE_LEX_HEAD_SVG,
  status: "preview",
  order: 3,
  description:
    "Teorie, 35 de camere de exerciții, cameră finală și badge. Mini univers Lex Junior, cu dicționare și butoane de listen.",
  basePath: PAST_SIMPLE_BASE_PATH,
  storagePrefix: PAST_SIMPLE_STORAGE_PREFIX,
  roomsPerSection: PAST_SIMPLE_ROOMS_PER_SECTION,
  sections: PAST_SIMPLE_SECTIONS,
  sectionsMeta: PAST_SIMPLE_SECTIONS_META,
  roomRegistries: PAST_SIMPLE_ROOM_REGISTRIES,
  hintsRegistry: PAST_SIMPLE_HINTS_REGISTRY,
  hudText: PAST_SIMPLE_HUD_TEXT,
};

// TenseKit v1 – Past Simple full tense definition
// Mirrors the Present Simple / Present Continuous TenseKit shape.

export const PAST_SIMPLE_THEORY_CONFIG = defineTenseTheory({
  basePath: PAST_SIMPLE_BASE_PATH,
  pages: [
    { sectionId: "affirmative", path: pastSimpleTheoryPath("affirmative") },
    { sectionId: "negative", path: pastSimpleTheoryPath("negative") },
    {
      sectionId: "interrogative",
      path: pastSimpleTheoryPath("interrogative"),
    },
    { sectionId: "uses", path: pastSimpleTheoryPath("uses") },
    {
      sectionId: "time-expressions",
      path: pastSimpleTheoryPath("time-expressions"),
    },
  ],
});

export const PAST_SIMPLE_ROOMS_CONFIG = defineTenseRooms(
  PAST_SIMPLE_ROOM_REGISTRIES,
);

export const PAST_SIMPLE_THEME_CONFIG = defineTenseTheme({
  id: "past-simple",
  themeClass: "past-simple-theme",
});

export const PAST_SIMPLE_TENSE_KIT = defineTenseKit({
  manifest: defineTenseManifest(PAST_SIMPLE_MANIFEST),
  rooms: PAST_SIMPLE_ROOMS_CONFIG,
  theory: PAST_SIMPLE_THEORY_CONFIG,
  theme: PAST_SIMPLE_THEME_CONFIG,
});
