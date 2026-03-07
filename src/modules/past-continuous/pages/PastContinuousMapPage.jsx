// src/modules/past-continuous/pages/PastContinuousMapPage.jsx
import React from "react";
import TenseMapPage from "../../tenses/ui/TenseMapPage.jsx";
import {
  pastContinuousTheoryPath,
  pastContinuousMapPath,
  pastContinuousRoomPath,
  pastContinuousBadgePath,
  pastContinuousOverviewPath,
} from "../past-continuous-paths.js";
import { isTheoryCompleted } from "../past-continuous-core/theory-progress.js";
import { progressManager } from "../past-continuous-core/progress-manager.js";
import { PAST_CONTINUOUS_ROOMS_PER_SECTION } from "../past-continuous-core/config.js";

const PAST_CONTINUOUS_MAP_SECTIONS = [
  {
    id: "affirmative",
    title: "Afirmativ",
    description:
      "Învață cum se formează propozițiile afirmative în Past Continuous.",
    pathTestId: "past-path-affirmative",
    startTheoryTestId: "past-start-theory-affirmative",
    roomTestIdPrefix: "past-room-affirmative",
  },
  {
    id: "negative",
    title: "Negativ",
    description:
      "Recapitulează regulile pentru forma negativă înainte de camerele Past Continuous.",
    pathTestId: "past-path-negative",
    startTheoryTestId: "past-start-theory-negative",
    roomTestIdPrefix: "past-room-negative",
  },
  {
    id: "interrogative",
    title: "Interogativ",
    description:
      "Recapitulează regulile pentru forma interogativă înainte de camerele Past Continuous.",
    pathTestId: "past-path-interrogative",
    startTheoryTestId: "past-start-theory-interrogative",
    roomTestIdPrefix: "past-room-interrogative",
  },
  {
    id: "uses",
    title: "Întrebuințări",
    description: "Când folosim Past Continuous? Recapitulează înainte de camere.",
    pathTestId: "past-path-uses",
    startTheoryTestId: "past-start-theory-uses",
    roomTestIdPrefix: "past-room-uses",
  },
  {
    id: "time-expressions",
    title: "Expresii de timp",
    description:
      "Expresii de timp tipice pentru Past Continuous (yesterday, last week etc.).",
    pathTestId: "past-path-time-expressions",
    startTheoryTestId: "past-start-theory-time-expressions",
    roomTestIdPrefix: "past-room-time-expressions",
  },
];

export default function PastContinuousMapPage() {
  return (
    <TenseMapPage
      tenseId="past-continuous"
      tenseLabel="Past Continuous"
      basePath={pastContinuousMapPath()}
      overviewPath={pastContinuousOverviewPath()}
      badgePath={pastContinuousBadgePath()}
      mapSections={PAST_CONTINUOUS_MAP_SECTIONS}
      roomsPerSection={PAST_CONTINUOUS_ROOMS_PER_SECTION}
      buildTheoryPath={pastContinuousTheoryPath}
      buildRoomPath={pastContinuousRoomPath}
      isTheoryCompleted={isTheoryCompleted}
      progressManager={progressManager}
      certificateTemplateUrl="/pdf/certificates/past-continuous-certificate-template.pdf"
    />
  );
}
