import React from "react";

import PresentContinuousPage from "./PresentContinuousPage.jsx";
import PresentContinuousOverviewPage from "./PresentContinuousOverviewPage.jsx";
import PcMapPage from "./pages/PcMapPage.jsx";

// Affirmative
import PcAffirmativeTheoryPage from "./pages/PcAffirmativeTheoryPage.jsx";
import PcAffirmativeRoom1Page from "./pages/PcAffirmativeRoom1Page.jsx";
import PcAffirmativeRoom2Page from "./pages/PcAffirmativeRoom2Page.jsx";
import PcAffirmativeRoom3Page from "./pages/PcAffirmativeRoom3Page.jsx";
import PcAffirmativeRoom4Page from "./pages/PcAffirmativeRoom4Page.jsx";
import PcAffirmativeRoom5Page from "./pages/PcAffirmativeRoom5Page.jsx";
import PcAffirmativeRoom6Page from "./pages/PcAffirmativeRoom6Page.jsx";
import PcAffirmativeRoom7Page from "./pages/PcAffirmativeRoom7Page.jsx";

// Negative
import PcNegativeTheoryPage from "./pages/PcNegativeTheoryPage.jsx";
import PcNegativeRoom1Page from "./pages/PcNegativeRoom1Page.jsx";
import PcNegativeRoom2Page from "./pages/PcNegativeRoom2Page.jsx";
import PcNegativeRoom3Page from "./pages/PcNegativeRoom3Page.jsx";
import PcNegativeRoom4Page from "./pages/PcNegativeRoom4Page.jsx";
import PcNegativeRoom5Page from "./pages/PcNegativeRoom5Page.jsx";
import PcNegativeRoom6Page from "./pages/PcNegativeRoom6Page.jsx";
import PcNegativeRoom7Page from "./pages/PcNegativeRoom7Page.jsx";

// Interrogative
import PcInterrogativeTheoryPage from "./pages/PcInterrogativeTheoryPage.jsx";
import PcInterrogativeRoom1Page from "./pages/PcInterrogativeRoom1Page.jsx";
import PcInterrogativeRoom2Page from "./pages/PcInterrogativeRoom2Page.jsx";
import PcInterrogativeRoom3Page from "./pages/PcInterrogativeRoom3Page.jsx";
import PcInterrogativeRoom4Page from "./pages/PcInterrogativeRoom4Page.jsx";
import PcInterrogativeRoom5Page from "./pages/PcInterrogativeRoom5Page.jsx";
import PcInterrogativeRoom6Page from "./pages/PcInterrogativeRoom6Page.jsx";
import PcInterrogativeRoom7Page from "./pages/PcInterrogativeRoom7Page.jsx";

// Uses
import PcUsesTheoryPage from "./pages/PcUsesTheoryPage.jsx";
import PcUsesSensoryTheoryPage from "./pages/PcUsesSensoryTheoryPage.jsx";
import PcUsesRoom1Page from "./pages/PcUsesRoom1Page.jsx";
import PcUsesRoom2Page from "./pages/PcUsesRoom2Page.jsx";
import PcUsesRoom3Page from "./pages/PcUsesRoom3Page.jsx";
import PcUsesRoom4Page from "./pages/PcUsesRoom4Page.jsx";
import PcUsesRoom5Page from "./pages/PcUsesRoom5Page.jsx";
import PcUsesRoom6Page from "./pages/PcUsesRoom6Page.jsx";
import PcUsesRoom7Page from "./pages/PcUsesRoom7Page.jsx";

// Time Expressions
import PcTimeExpressionsTheoryPage from "./pages/PcTimeExpressionsTheoryPage.jsx";
import PcTimeExpressionsRoom1Page from "./pages/PcTimeExpressionsRoom1Page.jsx";
import PcTimeExpressionsRoom2Page from "./pages/PcTimeExpressionsRoom2Page.jsx";
import PcTimeExpressionsRoom3Page from "./pages/PcTimeExpressionsRoom3Page.jsx";
import PcTimeExpressionsRoom4Page from "./pages/PcTimeExpressionsRoom4Page.jsx";
import PcTimeExpressionsRoom5Page from "./pages/PcTimeExpressionsRoom5Page.jsx";
import PcTimeExpressionsRoom6Page from "./pages/PcTimeExpressionsRoom6Page.jsx";
import PcTimeExpressionsRoom7Page from "./pages/PcTimeExpressionsRoom7Page.jsx";

import PcBadgePage from "./pages/PcBadgePage.jsx";

import {
  PC_ROOMS_PER_SECTION,
  PC_SECTIONS,
  PC_STORAGE_PREFIX,
} from "./pc-core/config.js";
import { PC_ASSETS_BASE, PC_LEX_HEAD_SVG } from "./pc-core/assets.js";
import {
  PC_BASE_PATH,
  pcOverviewPath,
  pcMapPath,
  pcTheoryPath,
  pcUsesSensoryTheoryPath,
  pcRoomPath,
  pcBadgePath,
} from "./pc-paths.js";

export const PRESENT_CONTINUOUS_MANIFEST = {
  id: "present-continuous",
  label: "Present Continuous",
  // parolă opțională pe tense (School Mode)
  passwordEnvKey: "VITE_PASSWORD_PRESENT_CONTINUOUS",
  // 🎨 tema vizuală: galben + verde
  themeClass: "present-continuous-theme",
  assetsBase: PC_ASSETS_BASE,
  brandAvatarSrc: PC_LEX_HEAD_SVG,
  status: "preview",
  order: 2,
  description:
    "Modul care urmează aceeași structură ca Present Simple, dar pentru Present Continuous.",
  basePath: PC_BASE_PATH,
  storagePrefix: PC_STORAGE_PREFIX,
  roomsPerSection: PC_ROOMS_PER_SECTION,
  sections: PC_SECTIONS,
};

export function buildPresentContinuousRoutes() {
  const basePath = PC_BASE_PATH;

  return [
    // Landing + overview + hartă
    { path: basePath, element: <PresentContinuousPage /> },
    { path: pcOverviewPath(), element: <PresentContinuousOverviewPage /> },
    { path: pcMapPath(), element: <PcMapPage /> },

    // Affirmative
    { path: pcTheoryPath("affirmative"), element: <PcAffirmativeTheoryPage /> },
    { path: pcRoomPath("affirmative", 1), element: <PcAffirmativeRoom1Page /> },
    { path: pcRoomPath("affirmative", 2), element: <PcAffirmativeRoom2Page /> },
    { path: pcRoomPath("affirmative", 3), element: <PcAffirmativeRoom3Page /> },
    { path: pcRoomPath("affirmative", 4), element: <PcAffirmativeRoom4Page /> },
    { path: pcRoomPath("affirmative", 5), element: <PcAffirmativeRoom5Page /> },
    { path: pcRoomPath("affirmative", 6), element: <PcAffirmativeRoom6Page /> },
    { path: pcRoomPath("affirmative", 7), element: <PcAffirmativeRoom7Page /> },

    // Negative
    { path: pcTheoryPath("negative"), element: <PcNegativeTheoryPage /> },
    { path: pcRoomPath("negative", 1), element: <PcNegativeRoom1Page /> },
    { path: pcRoomPath("negative", 2), element: <PcNegativeRoom2Page /> },
    { path: pcRoomPath("negative", 3), element: <PcNegativeRoom3Page /> },
    { path: pcRoomPath("negative", 4), element: <PcNegativeRoom4Page /> },
    { path: pcRoomPath("negative", 5), element: <PcNegativeRoom5Page /> },
    { path: pcRoomPath("negative", 6), element: <PcNegativeRoom6Page /> },
    { path: pcRoomPath("negative", 7), element: <PcNegativeRoom7Page /> },

    // Interrogative
    {
      path: pcTheoryPath("interrogative"),
      element: <PcInterrogativeTheoryPage />,
    },
    {
      path: pcRoomPath("interrogative", 1),
      element: <PcInterrogativeRoom1Page />,
    },
    {
      path: pcRoomPath("interrogative", 2),
      element: <PcInterrogativeRoom2Page />,
    },
    {
      path: pcRoomPath("interrogative", 3),
      element: <PcInterrogativeRoom3Page />,
    },
    {
      path: pcRoomPath("interrogative", 4),
      element: <PcInterrogativeRoom4Page />,
    },
    {
      path: pcRoomPath("interrogative", 5),
      element: <PcInterrogativeRoom5Page />,
    },
    {
      path: pcRoomPath("interrogative", 6),
      element: <PcInterrogativeRoom6Page />,
    },
    {
      path: pcRoomPath("interrogative", 7),
      element: <PcInterrogativeRoom7Page />,
    },

    // Uses (2 pagini de teorie)
    { path: pcTheoryPath("uses"), element: <PcUsesTheoryPage /> },
    { path: pcUsesSensoryTheoryPath(), element: <PcUsesSensoryTheoryPage /> },
    { path: pcRoomPath("uses", 1), element: <PcUsesRoom1Page /> },
    { path: pcRoomPath("uses", 2), element: <PcUsesRoom2Page /> },
    { path: pcRoomPath("uses", 3), element: <PcUsesRoom3Page /> },
    { path: pcRoomPath("uses", 4), element: <PcUsesRoom4Page /> },
    { path: pcRoomPath("uses", 5), element: <PcUsesRoom5Page /> },
    { path: pcRoomPath("uses", 6), element: <PcUsesRoom6Page /> },
    { path: pcRoomPath("uses", 7), element: <PcUsesRoom7Page /> },

    // Time Expressions
    {
      path: pcTheoryPath("time-expressions"),
      element: <PcTimeExpressionsTheoryPage />,
    },
    {
      path: pcRoomPath("time-expressions", 1),
      element: <PcTimeExpressionsRoom1Page />,
    },
    {
      path: pcRoomPath("time-expressions", 2),
      element: <PcTimeExpressionsRoom2Page />,
    },
    {
      path: pcRoomPath("time-expressions", 3),
      element: <PcTimeExpressionsRoom3Page />,
    },
    {
      path: pcRoomPath("time-expressions", 4),
      element: <PcTimeExpressionsRoom4Page />,
    },
    {
      path: pcRoomPath("time-expressions", 5),
      element: <PcTimeExpressionsRoom5Page />,
    },
    {
      path: pcRoomPath("time-expressions", 6),
      element: <PcTimeExpressionsRoom6Page />,
    },
    {
      path: pcRoomPath("time-expressions", 7),
      element: <PcTimeExpressionsRoom7Page />,
    },

    // Badge
    { path: pcBadgePath(), element: <PcBadgePage /> },
  ];
}
