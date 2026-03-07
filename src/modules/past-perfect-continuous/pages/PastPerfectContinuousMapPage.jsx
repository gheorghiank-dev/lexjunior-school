// src/modules/past-perfect-continuous/pages/PastPerfectContinuousMapPage.jsx
import React from "react";
import TenseMapPage from "../../tenses/ui/TenseMapPage.jsx";
import {
  pastPerfectContinuousTheoryPath,
  pastPerfectContinuousMapPath,
  pastPerfectContinuousRoomPath,
  pastPerfectContinuousBadgePath,
  pastPerfectContinuousOverviewPath,
} from "../past-perfect-continuous-paths.js";
import { isTheoryCompleted } from "../past-perfect-continuous-core/theory-progress.js";
import { progressManager } from "../past-perfect-continuous-core/progress-manager.js";
import { PAST_PERFECT_CONTINUOUS_ROOMS_PER_SECTION } from "../past-perfect-continuous-core/config.js";

const PAST_PERFECT_CONTINUOUS_MAP_SECTIONS = [
  {
    id: "affirmative",
    title: "Afirmativ",
    description:
      "Învață cum se formează propozițiile afirmative în Past Perfect Continuous.",
    pathTestId: "pastperfectcontinuous-path-affirmative",
    startTheoryTestId: "pastperfectcontinuous-start-theory-affirmative",
    roomTestIdPrefix: "pastperfectcontinuous-room-affirmative",
  },
  {
    id: "negative",
    title: "Negativ",
    description:
      "Recapitulează regulile pentru forma negativă înainte de camerele Past Perfect Continuous.",
    pathTestId: "pastperfectcontinuous-path-negative",
    startTheoryTestId: "pastperfectcontinuous-start-theory-negative",
    roomTestIdPrefix: "pastperfectcontinuous-room-negative",
  },
  {
    id: "interrogative",
    title: "Interogativ",
    description:
      "Recapitulează regulile pentru forma interogativă înainte de camerele Past Perfect Continuous.",
    pathTestId: "pastperfectcontinuous-path-interrogative",
    startTheoryTestId: "pastperfectcontinuous-start-theory-interrogative",
    roomTestIdPrefix: "pastperfectcontinuous-room-interrogative",
  },
  {
    id: "uses",
    title: "Întrebuințări",
    description: "Când folosim Past Perfect Continuous? Recapitulează înainte de camere.",
    pathTestId: "pastperfectcontinuous-path-uses",
    startTheoryTestId: "pastperfectcontinuous-start-theory-uses",
    roomTestIdPrefix: "pastperfectcontinuous-room-uses",
  },
  {
    id: "time-expressions",
    title: "Expresii de timp",
    description:
      "Expresii de timp tipice pentru Past Perfect Continuous (yesterday, last week etc.).",
    pathTestId: "pastperfectcontinuous-path-time-expressions",
    startTheoryTestId: "pastperfectcontinuous-start-theory-time-expressions",
    roomTestIdPrefix: "pastperfectcontinuous-room-time-expressions",
  },
];

export default function PastPerfectContinuousMapPage() {
  return (
    <TenseMapPage
      tenseId="past-perfect-continuous"
      tenseLabel="Past Perfect Continuous"
      basePath={pastPerfectContinuousMapPath()}
      overviewPath={pastPerfectContinuousOverviewPath()}
      badgePath={pastPerfectContinuousBadgePath()}
      mapSections={PAST_PERFECT_CONTINUOUS_MAP_SECTIONS}
      roomsPerSection={PAST_PERFECT_CONTINUOUS_ROOMS_PER_SECTION}
      buildTheoryPath={pastPerfectContinuousTheoryPath}
      buildRoomPath={pastPerfectContinuousRoomPath}
      isTheoryCompleted={isTheoryCompleted}
      progressManager={progressManager}
      certificateTemplateUrl="/pdf/certificates/past-perfect-continuous-certificate-template.pdf"
    />
  );
}
