// src/modules/present-perfect-continuous/pages/PresentPerfectContinuousMapPage.jsx
import React from "react";
import TenseMapPage from "../../tenses/ui/TenseMapPage.jsx";
import {
  presentPerfectContinuousTheoryPath,
  presentPerfectContinuousMapPath,
  presentPerfectContinuousRoomPath,
  presentPerfectContinuousBadgePath,
  presentPerfectContinuousOverviewPath,
} from "../present-paths.js";
import { isTheoryCompleted } from "../present-core/theory-progress.js";
import { progressManager } from "../present-core/progress-manager.js";
import { PRESENT_PERFECT_CONTINUOUS_ROOMS_PER_SECTION } from "../present-core/config.js";

const PRESENT_PERFECT_CONTINUOUS_MAP_SECTIONS = [
  {
    id: "affirmative",
    title: "Afirmativ",
    description:
      "Învață cum se formează propozițiile afirmative în Present Perfect Continuous.",
    pathTestId: "past-path-affirmative",
    startTheoryTestId: "past-start-theory-affirmative",
    roomTestIdPrefix: "past-room-affirmative",
  },
  {
    id: "negative",
    title: "Negativ",
    description:
      "Recapitulează regulile pentru forma negativă înainte de camerele Present Perfect Continuous.",
    pathTestId: "past-path-negative",
    startTheoryTestId: "past-start-theory-negative",
    roomTestIdPrefix: "past-room-negative",
  },
  {
    id: "interrogative",
    title: "Interogativ",
    description:
      "Recapitulează regulile pentru forma interogativă înainte de camerele Present Perfect Continuous.",
    pathTestId: "past-path-interrogative",
    startTheoryTestId: "past-start-theory-interrogative",
    roomTestIdPrefix: "past-room-interrogative",
  },
  {
    id: "uses",
    title: "Întrebuințări",
    description: "Când folosim Present Perfect Continuous? Recapitulează înainte de camere.",
    pathTestId: "past-path-uses",
    startTheoryTestId: "past-start-theory-uses",
    roomTestIdPrefix: "past-room-uses",
  },
  {
    id: "time-expressions",
    title: "Expresii de timp",
    description:
      "Expresii de timp tipice pentru Present Perfect Continuous (yesterday, last week etc.).",
    pathTestId: "past-path-time-expressions",
    startTheoryTestId: "past-start-theory-time-expressions",
    roomTestIdPrefix: "past-room-time-expressions",
  },
];

export default function PresentPerfectContinuousMapPage() {
  return (
    <TenseMapPage
      tenseId="present-perfect-continuous"
      tenseLabel="Present Perfect Continuous"
      basePath={presentPerfectContinuousMapPath()}
      overviewPath={presentPerfectContinuousOverviewPath()}
      badgePath={presentPerfectContinuousBadgePath()}
      mapSections={PRESENT_PERFECT_CONTINUOUS_MAP_SECTIONS}
      roomsPerSection={PRESENT_PERFECT_CONTINUOUS_ROOMS_PER_SECTION}
      buildTheoryPath={presentPerfectContinuousTheoryPath}
      buildRoomPath={presentPerfectContinuousRoomPath}
      isTheoryCompleted={isTheoryCompleted}
      progressManager={progressManager}
      certificateTemplateUrl="/pdf/certificates/present-perfect-continuous-certificate-template.pdf"
    />
  );
}
