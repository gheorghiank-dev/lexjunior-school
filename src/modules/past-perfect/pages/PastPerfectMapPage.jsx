// src/modules/past-perfect/pages/PastPerfectMapPage.jsx
import React from "react";
import TenseMapPage from "../../tenses/ui/TenseMapPage.jsx";
import {
  pastPerfectTheoryPath,
  pastPerfectMapPath,
  pastPerfectRoomPath,
  pastPerfectBadgePath,
  pastPerfectOverviewPath,
} from "../past-perfect-paths.js";
import { isTheoryCompleted } from "../past-perfect-core/theory-progress.js";
import { progressManager } from "../past-perfect-core/progress-manager.js";
import { PAST_PERFECT_ROOMS_PER_SECTION } from "../past-perfect-core/config.js";

const PAST_PERFECT_MAP_SECTIONS = [
  {
    id: "affirmative",
    title: "Afirmativ",
    description:
      "Învață cum se formează propozițiile afirmative în Past Perfect.",
    pathTestId: "pastperfect-path-affirmative",
    startTheoryTestId: "pastperfect-start-theory-affirmative",
    roomTestIdPrefix: "pastperfect-room-affirmative",
  },
  {
    id: "negative",
    title: "Negativ",
    description:
      "Recapitulează regulile pentru forma negativă înainte de camerele Past Perfect.",
    pathTestId: "pastperfect-path-negative",
    startTheoryTestId: "pastperfect-start-theory-negative",
    roomTestIdPrefix: "pastperfect-room-negative",
  },
  {
    id: "interrogative",
    title: "Interogativ",
    description:
      "Recapitulează regulile pentru forma interogativă înainte de camerele Past Perfect.",
    pathTestId: "pastperfect-path-interrogative",
    startTheoryTestId: "pastperfect-start-theory-interrogative",
    roomTestIdPrefix: "pastperfect-room-interrogative",
  },
  {
    id: "uses",
    title: "Întrebuințări",
    description: "Când folosim Past Perfect? Recapitulează înainte de camere.",
    pathTestId: "pastperfect-path-uses",
    startTheoryTestId: "pastperfect-start-theory-uses",
    roomTestIdPrefix: "pastperfect-room-uses",
  },
  {
    id: "time-expressions",
    title: "Expresii de timp",
    description:
      "Expresii de timp tipice pentru Past Perfect (yesterday, last week etc.).",
    pathTestId: "pastperfect-path-time-expressions",
    startTheoryTestId: "pastperfect-start-theory-time-expressions",
    roomTestIdPrefix: "pastperfect-room-time-expressions",
  },
];

export default function PastPerfectMapPage() {
  return (
    <TenseMapPage
      tenseId="past-perfect"
      tenseLabel="Past Perfect"
      basePath={pastPerfectMapPath()}
      overviewPath={pastPerfectOverviewPath()}
      badgePath={pastPerfectBadgePath()}
      mapSections={PAST_PERFECT_MAP_SECTIONS}
      roomsPerSection={PAST_PERFECT_ROOMS_PER_SECTION}
      buildTheoryPath={pastPerfectTheoryPath}
      buildRoomPath={pastPerfectRoomPath}
      isTheoryCompleted={isTheoryCompleted}
      progressManager={progressManager}
      certificateTemplateUrl="/pdf/certificates/past-perfect-certificate-template.pdf"
    />
  );
}
