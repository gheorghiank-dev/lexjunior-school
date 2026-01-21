import React from "react";
import PresentContinuousPage from "./PresentContinuousPage.jsx";
import PresentContinuousOverviewPage from "./PresentContinuousOverviewPage.jsx";
import PcMapPage from "./pages/PcMapPage.jsx";
import PcBasicsTheoryPage from "./pages/PcBasicsTheoryPage.jsx";
import PcBasicsRoom1Page from "./pages/PcBasicsRoom1Page.jsx";
import { PC_ROOMS_PER_SECTION, PC_SECTIONS, PC_STORAGE_PREFIX } from "./pc-core/config.js";
import { PC_ASSETS_BASE, PC_LEX_HEAD_SVG } from "./pc-core/assets.js";
import { createTenseModule } from "../../core/tense/tense-kit.js";

const basePath = "/grammar/tenses/present-continuous";

const routes = [
  { path: basePath, element: <PresentContinuousPage /> },
  { path: `${basePath}/overview`, element: <PresentContinuousOverviewPage /> },
  { path: `${basePath}/map`, element: <PcMapPage /> },
  { path: `${basePath}/basics`, element: <PcBasicsTheoryPage /> },
  { path: `${basePath}/basics/room-1`, element: <PcBasicsRoom1Page /> },
];

const presentContinuousManifest = {
  id: "present-continuous",
  label: "Present Continuous",
  // Sprint 11: optional per-tense password environment key.
  // (Passwords are disabled by default; this is just metadata.)
  passwordEnvKey: "VITE_PASSWORD_PRESENT_CONTINUOUS",
  assetsBase: PC_ASSETS_BASE,
  brandAvatarSrc: PC_LEX_HEAD_SVG,
  status: "preview",
  order: 2,
  description:
    "Modul nou care urmează aceeași structură ca Present Simple, dar pentru Present Continuous.",
  basePath,
  storagePrefix: PC_STORAGE_PREFIX,
  roomsPerSection: PC_ROOMS_PER_SECTION,
  sections: PC_SECTIONS,
};

export default createTenseModule(presentContinuousManifest, routes);
