import React from "react";
import "./be-theme.css";

import {
  BE_GOING_TO_SECTIONS,
  BE_GOING_TO_ROOMS_PER_SECTION,
  STORAGE_PREFIX,
  HUD_TEXT,
} from "./be-core/config.js";
import {
  BE_GOING_TO_ASSETS_BASE,
  BE_GOING_TO_LEX_HEAD_SVG,
} from "./be-core/assets.js";

import { BE_GOING_TO_AFFIRMATIVE_ROOMS } from "./rooms/be-going-to-affirmative-rooms.jsx";
import { BE_GOING_TO_NEGATIVE_ROOMS } from "./rooms/be-going-to-negative-rooms.jsx";
import { BE_GOING_TO_INTERROGATIVE_ROOMS } from "./rooms/be-going-to-interrogative-rooms.jsx";
import { BE_GOING_TO_USES_ROOMS } from "./rooms/be-going-to-uses-rooms.jsx";
import { BE_GOING_TO_TIME_EXPRESSIONS_ROOMS } from "./rooms/be-going-to-time-expressions-rooms.jsx";

import {
  beGoingToAffirmativeLexHints,
  beGoingToNegativeLexHints,
  beGoingToInterrogativeLexHints,
  beGoingToUsesLexHints,
  beGoingToTimeExpressionsLexHints,
  beGoingToBadgeLexHints,
} from "../lex-hints/be-going-to/index.js";

import BeGoingToPage from "./pages/BeGoingToPage.jsx";
import BeGoingToOverviewPage from "./pages/BeGoingToOverviewPage.jsx";
import BeGoingToBadgePage from "./pages/BeGoingToBadgePage.jsx";
import BeGoingToMapPage from "./pages/BeGoingToMapPage.jsx";

import { BE_GOING_TO_SECTION_PAGES } from "./be-section-pages.jsx";
import { BE_GOING_TO_BASE_PATH, beGoingToTheoryPath } from "./be-paths.js";

import {
  defineTenseManifest,
  defineTenseRooms,
  defineTenseTheory,
  defineTenseKit,
  defineTenseTheme,
} from "../../tense-kit";
import { createTenseRoutes } from "../tenses/createTenseRoutes.jsx";

export function buildBeGoingToRoutes() {
  const BeGoingToRoomRoute = React.lazy(
    () => import("./pages/BeGoingToRoomRoute.jsx"),
  );

  return createTenseRoutes({
    basePath: BE_GOING_TO_BASE_PATH,
    topLevelRoutes: [
      { path: BE_GOING_TO_BASE_PATH, element: <BeGoingToPage /> },
      {
        path: `${BE_GOING_TO_BASE_PATH}/overview`,
        element: <BeGoingToOverviewPage />,
      },
      {
        path: `${BE_GOING_TO_BASE_PATH}/badge`,
        element: <BeGoingToBadgePage />,
      },
      { path: `${BE_GOING_TO_BASE_PATH}/map`, element: <BeGoingToMapPage /> },
    ],
    sections: BE_GOING_TO_SECTIONS,
    sectionPages: BE_GOING_TO_SECTION_PAGES,
    theoryPath: beGoingToTheoryPath,
    createRoomRouteElement: (sectionId) => (
      <React.Suspense fallback={null}>
        <BeGoingToRoomRoute sectionId={sectionId} />
      </React.Suspense>
    ),
  });
}

const BE_GOING_TO_SECTIONS_META = BE_GOING_TO_SECTIONS.reduce(
  (acc, section) => {
    acc[section.id] = {
      id: section.id,
      title: section.title,
      description: section.description,
    };
    return acc;
  },
  {},
);

const BE_GOING_TO_ROOM_REGISTRIES = {
  affirmative: BE_GOING_TO_AFFIRMATIVE_ROOMS,
  negative: BE_GOING_TO_NEGATIVE_ROOMS,
  interrogative: BE_GOING_TO_INTERROGATIVE_ROOMS,
  uses: BE_GOING_TO_USES_ROOMS,
  "time-expressions": BE_GOING_TO_TIME_EXPRESSIONS_ROOMS,
};

const BE_GOING_TO_HINTS_REGISTRY = {
  affirmative: beGoingToAffirmativeLexHints,
  negative: beGoingToNegativeLexHints,
  interrogative: beGoingToInterrogativeLexHints,
  uses: beGoingToUsesLexHints,
  "time-expressions": beGoingToTimeExpressionsLexHints,
  badge: beGoingToBadgeLexHints,
};

export const BE_GOING_TO_MANIFEST = {
  id: "be-going-to",
  label: "Be Going To",
  passwordEnvKey: "VITE_PASSWORD_BE_GOING_TO",
  themeClass: "be-going-to-theme",
  assetsBase: BE_GOING_TO_ASSETS_BASE,
  brandAvatarSrc: BE_GOING_TO_LEX_HEAD_SVG,
  status: "preview",
  order: 6,
  description:
    "Teorie, camere de exerciții, cameră finală și badge pentru Be Going To.",
  basePath: BE_GOING_TO_BASE_PATH,
  storagePrefix: STORAGE_PREFIX,
  roomsPerSection: BE_GOING_TO_ROOMS_PER_SECTION,
  sections: BE_GOING_TO_SECTIONS,
  sectionsMeta: BE_GOING_TO_SECTIONS_META,
  roomRegistries: BE_GOING_TO_ROOM_REGISTRIES,
  hintsRegistry: BE_GOING_TO_HINTS_REGISTRY,
  hudText: HUD_TEXT,
};

export const BE_GOING_TO_THEORY_CONFIG = defineTenseTheory({
  basePath: BE_GOING_TO_BASE_PATH,
  pages: [
    { sectionId: "affirmative", path: beGoingToTheoryPath("affirmative") },
    { sectionId: "negative", path: beGoingToTheoryPath("negative") },
    { sectionId: "interrogative", path: beGoingToTheoryPath("interrogative") },
    { sectionId: "uses", path: beGoingToTheoryPath("uses") },
    {
      sectionId: "time-expressions",
      path: beGoingToTheoryPath("time-expressions"),
    },
  ],
});

export const BE_GOING_TO_ROOMS_CONFIG = defineTenseRooms(
  BE_GOING_TO_ROOM_REGISTRIES,
);

export const BE_GOING_TO_THEME_CONFIG = defineTenseTheme({
  id: "be-going-to",
  themeClass: "be-going-to-theme",
});

export const BE_GOING_TO_TENSE_KIT = defineTenseKit({
  manifest: defineTenseManifest(BE_GOING_TO_MANIFEST),
  rooms: BE_GOING_TO_ROOMS_CONFIG,
  theory: BE_GOING_TO_THEORY_CONFIG,
  theme: BE_GOING_TO_THEME_CONFIG,
});
