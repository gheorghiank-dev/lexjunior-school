import React from "react";
import "./present-theme.css";

import {
  PRESENT_PERFECT_CONTINUOUS_SECTIONS,
  PRESENT_PERFECT_CONTINUOUS_ROOMS_PER_SECTION,
  STORAGE_PREFIX,
  HUD_TEXT,
} from "./present-core/config.js";
import {
  PRESENT_PERFECT_CONTINUOUS_ASSETS_BASE,
  PRESENT_PERFECT_CONTINUOUS_LEX_HEAD_SVG,
} from "./present-core/assets.js";

import { PRESENT_PERFECT_CONTINUOUS_AFFIRMATIVE_ROOMS } from "./rooms/present-perfect-continuous-affirmative-rooms.jsx";
import { PRESENT_PERFECT_CONTINUOUS_NEGATIVE_ROOMS } from "./rooms/present-perfect-continuous-negative-rooms.jsx";
import { PRESENT_PERFECT_CONTINUOUS_INTERROGATIVE_ROOMS } from "./rooms/present-perfect-continuous-interrogative-rooms.jsx";
import { PRESENT_PERFECT_CONTINUOUS_USES_ROOMS } from "./rooms/present-perfect-continuous-uses-rooms.jsx";
import { PRESENT_PERFECT_CONTINUOUS_TIME_EXPRESSIONS_ROOMS } from "./rooms/present-perfect-continuous-time-expressions-rooms.jsx";

import {
  presentPerfectContinuousAffirmativeLexHints,
  presentPerfectContinuousNegativeLexHints,
  presentPerfectContinuousInterrogativeLexHints,
  presentPerfectContinuousUsesLexHints,
  presentPerfectContinuousTimeExpressionsLexHints,
  presentPerfectContinuousBadgeLexHints,
} from "../lex-hints/present-perfect-continuous/index.js";

import PresentPerfectContinuousPage from "./pages/PresentPerfectContinuousPage.jsx";
import PresentPerfectContinuousOverviewPage from "./pages/PresentPerfectContinuousOverviewPage.jsx";
import PresentPerfectContinuousBadgePage from "./pages/PresentPerfectContinuousBadgePage.jsx";
import PresentPerfectContinuousMapPage from "./pages/PresentPerfectContinuousMapPage.jsx";

import { PRESENT_PERFECT_CONTINUOUS_SECTION_PAGES } from "./present-section-pages.jsx";
import {
  PRESENT_PERFECT_CONTINUOUS_BASE_PATH,
  presentPerfectContinuousTheoryPath,
} from "./present-paths.js";

import {
  defineTenseManifest,
  defineTenseRooms,
  defineTenseTheory,
  defineTenseKit,
  defineTenseTheme,
} from "../../tense-kit";
import { createTenseRoutes } from "../tenses/createTenseRoutes.jsx";

export function buildPresentPerfectContinuousRoutes() {
  const PresentPerfectContinuousRoomRoute = React.lazy(
    () => import("./pages/PresentPerfectContinuousRoomRoute.jsx"),
  );

  return createTenseRoutes({
    basePath: PRESENT_PERFECT_CONTINUOUS_BASE_PATH,
    topLevelRoutes: [
      {
        path: PRESENT_PERFECT_CONTINUOUS_BASE_PATH,
        element: <PresentPerfectContinuousPage />,
      },
      {
        path: `${PRESENT_PERFECT_CONTINUOUS_BASE_PATH}/overview`,
        element: <PresentPerfectContinuousOverviewPage />,
      },
      {
        path: `${PRESENT_PERFECT_CONTINUOUS_BASE_PATH}/badge`,
        element: <PresentPerfectContinuousBadgePage />,
      },
      {
        path: `${PRESENT_PERFECT_CONTINUOUS_BASE_PATH}/map`,
        element: <PresentPerfectContinuousMapPage />,
      },
    ],
    sections: PRESENT_PERFECT_CONTINUOUS_SECTIONS,
    sectionPages: PRESENT_PERFECT_CONTINUOUS_SECTION_PAGES,
    theoryPath: presentPerfectContinuousTheoryPath,
    createRoomRouteElement: (sectionId) => (
      <React.Suspense fallback={null}>
        <PresentPerfectContinuousRoomRoute sectionId={sectionId} />
      </React.Suspense>
    ),
  });
}

const PRESENT_PERFECT_CONTINUOUS_SECTIONS_META =
  PRESENT_PERFECT_CONTINUOUS_SECTIONS.reduce((acc, section) => {
    acc[section.id] = {
      id: section.id,
      title: section.title,
      description: section.description,
    };
    return acc;
  }, {});

const PRESENT_PERFECT_CONTINUOUS_ROOM_REGISTRIES = {
  affirmative: PRESENT_PERFECT_CONTINUOUS_AFFIRMATIVE_ROOMS,
  negative: PRESENT_PERFECT_CONTINUOUS_NEGATIVE_ROOMS,
  interrogative: PRESENT_PERFECT_CONTINUOUS_INTERROGATIVE_ROOMS,
  uses: PRESENT_PERFECT_CONTINUOUS_USES_ROOMS,
  "time-expressions": PRESENT_PERFECT_CONTINUOUS_TIME_EXPRESSIONS_ROOMS,
};

const PRESENT_PERFECT_CONTINUOUS_HINTS_REGISTRY = {
  affirmative: presentPerfectContinuousAffirmativeLexHints,
  negative: presentPerfectContinuousNegativeLexHints,
  interrogative: presentPerfectContinuousInterrogativeLexHints,
  uses: presentPerfectContinuousUsesLexHints,
  "time-expressions": presentPerfectContinuousTimeExpressionsLexHints,
  badge: presentPerfectContinuousBadgeLexHints,
};

export const PRESENT_PERFECT_CONTINUOUS_MANIFEST = {
  id: "present-perfect-continuous",
  label: "Present Perfect Continuous",
  passwordEnvKey: "VITE_PASSWORD_PRESENT_PERFECT_CONTINUOUS",
  themeClass: "present-perfect-continuous-theme",
  assetsBase: PRESENT_PERFECT_CONTINUOUS_ASSETS_BASE,
  brandAvatarSrc: PRESENT_PERFECT_CONTINUOUS_LEX_HEAD_SVG,
  status: "preview",
  order: 8,
  description:
    "Teorie, camere de exerciții, cameră finală și badge pentru Present Perfect Continuous.",
  basePath: PRESENT_PERFECT_CONTINUOUS_BASE_PATH,
  storagePrefix: STORAGE_PREFIX,
  roomsPerSection: PRESENT_PERFECT_CONTINUOUS_ROOMS_PER_SECTION,
  sections: PRESENT_PERFECT_CONTINUOUS_SECTIONS,
  sectionsMeta: PRESENT_PERFECT_CONTINUOUS_SECTIONS_META,
  roomRegistries: PRESENT_PERFECT_CONTINUOUS_ROOM_REGISTRIES,
  hintsRegistry: PRESENT_PERFECT_CONTINUOUS_HINTS_REGISTRY,
  hudText: HUD_TEXT,
};

export const PRESENT_PERFECT_CONTINUOUS_THEORY_CONFIG = defineTenseTheory({
  basePath: PRESENT_PERFECT_CONTINUOUS_BASE_PATH,
  pages: [
    {
      sectionId: "affirmative",
      path: presentPerfectContinuousTheoryPath("affirmative"),
    },
    {
      sectionId: "negative",
      path: presentPerfectContinuousTheoryPath("negative"),
    },
    {
      sectionId: "interrogative",
      path: presentPerfectContinuousTheoryPath("interrogative"),
    },
    { sectionId: "uses", path: presentPerfectContinuousTheoryPath("uses") },
    {
      sectionId: "time-expressions",
      path: presentPerfectContinuousTheoryPath("time-expressions"),
    },
  ],
});

export const PRESENT_PERFECT_CONTINUOUS_ROOMS_CONFIG = defineTenseRooms(
  PRESENT_PERFECT_CONTINUOUS_ROOM_REGISTRIES,
);

export const PRESENT_PERFECT_CONTINUOUS_THEME_CONFIG = defineTenseTheme({
  id: "present-perfect-continuous",
  themeClass: "present-perfect-continuous-theme",
});

export const PRESENT_PERFECT_CONTINUOUS_TENSE_KIT = defineTenseKit({
  manifest: defineTenseManifest(PRESENT_PERFECT_CONTINUOUS_MANIFEST),
  rooms: PRESENT_PERFECT_CONTINUOUS_ROOMS_CONFIG,
  theory: PRESENT_PERFECT_CONTINUOUS_THEORY_CONFIG,
  theme: PRESENT_PERFECT_CONTINUOUS_THEME_CONFIG,
});
