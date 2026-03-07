// src/modules/present-perfect/pages/PresentPerfectMapPage.jsx
import React from "react";
import TenseMapPage from "../../tenses/ui/TenseMapPage.jsx";
import {
  presentPerfectTheoryPath,
  presentPerfectMapPath,
  presentPerfectRoomPath,
  presentPerfectBadgePath,
  presentPerfectOverviewPath,
} from "../present-paths.js";
import { isTheoryCompleted } from "../present-core/theory-progress.js";
import { progressManager } from "../present-core/progress-manager.js";
import { PRESENT_PERFECT_ROOMS_PER_SECTION } from "../present-core/config.js";

const PRESENT_PERFECT_MAP_SECTIONS = [
  {
    id: "affirmative",
    title: "Afirmativ",
    description:
      "Învață cum se formează propozițiile afirmative în Present Perfect.",
    pathTestId: "past-path-affirmative",
    startTheoryTestId: "past-start-theory-affirmative",
    roomTestIdPrefix: "past-room-affirmative",
  },
  {
    id: "negative",
    title: "Negativ",
    description:
      "Recapitulează regulile pentru forma negativă înainte de camerele Present Perfect.",
    pathTestId: "past-path-negative",
    startTheoryTestId: "past-start-theory-negative",
    roomTestIdPrefix: "past-room-negative",
  },
  {
    id: "interrogative",
    title: "Interogativ",
    description:
      "Recapitulează regulile pentru forma interogativă înainte de camerele Present Perfect.",
    pathTestId: "past-path-interrogative",
    startTheoryTestId: "past-start-theory-interrogative",
    roomTestIdPrefix: "past-room-interrogative",
  },
  {
    id: "uses",
    title: "Întrebuințări",
    description: "Când folosim Present Perfect? Recapitulează înainte de camere.",
    pathTestId: "past-path-uses",
    startTheoryTestId: "past-start-theory-uses",
    roomTestIdPrefix: "past-room-uses",
  },
  {
    id: "time-expressions",
    title: "Expresii de timp",
    description:
      "Expresii de timp tipice pentru Present Perfect (yesterday, last week etc.).",
    pathTestId: "past-path-time-expressions",
    startTheoryTestId: "past-start-theory-time-expressions",
    roomTestIdPrefix: "past-room-time-expressions",
  },
];

export default function PresentPerfectMapPage() {
  return (
    <TenseMapPage
      tenseId="present-perfect"
      tenseLabel="Present Perfect"
      basePath={presentPerfectMapPath()}
      overviewPath={presentPerfectOverviewPath()}
      badgePath={presentPerfectBadgePath()}
      mapSections={PRESENT_PERFECT_MAP_SECTIONS}
      roomsPerSection={PRESENT_PERFECT_ROOMS_PER_SECTION}
      buildTheoryPath={presentPerfectTheoryPath}
      buildRoomPath={presentPerfectRoomPath}
      isTheoryCompleted={isTheoryCompleted}
      progressManager={progressManager}
      certificateTemplateUrl="/pdf/certificates/present-perfect-certificate-template.pdf"
    />
  );
}
