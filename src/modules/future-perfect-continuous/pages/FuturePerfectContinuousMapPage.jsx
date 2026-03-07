// src/modules/future-perfect-continuous/pages/FuturePerfectContinuousMapPage.jsx
import React from "react";
import TenseMapPage from "../../tenses/ui/TenseMapPage.jsx";
import {
  futurePerfectContinuousTheoryPath,
  futurePerfectContinuousMapPath,
  futurePerfectContinuousRoomPath,
  futurePerfectContinuousBadgePath,
  futurePerfectContinuousOverviewPath,
} from "../future-paths.js";
import { isTheoryCompleted } from "../future-core/theory-progress.js";
import { progressManager } from "../future-core/progress-manager.js";
import { FUTURE_PERFECT_CONTINUOUS_ROOMS_PER_SECTION } from "../future-core/config.js";

const FUTURE_PERFECT_CONTINUOUS_MAP_SECTIONS = [
  {
    id: "affirmative",
    title: "Afirmativ",
    description:
      "Învață cum se formează propozițiile afirmative în Future Perfect Continuous.",
    pathTestId: "futureperfectcontinuous-path-affirmative",
    startTheoryTestId: "futureperfectcontinuous-start-theory-affirmative",
    roomTestIdPrefix: "futureperfectcontinuous-room-affirmative",
  },
  {
    id: "negative",
    title: "Negativ",
    description:
      "Recapitulează regulile pentru forma negativă înainte de camerele Future Perfect Continuous.",
    pathTestId: "futureperfectcontinuous-path-negative",
    startTheoryTestId: "futureperfectcontinuous-start-theory-negative",
    roomTestIdPrefix: "futureperfectcontinuous-room-negative",
  },
  {
    id: "interrogative",
    title: "Interogativ",
    description:
      "Recapitulează regulile pentru forma interogativă înainte de camerele Future Perfect Continuous.",
    pathTestId: "futureperfectcontinuous-path-interrogative",
    startTheoryTestId: "futureperfectcontinuous-start-theory-interrogative",
    roomTestIdPrefix: "futureperfectcontinuous-room-interrogative",
  },
  {
    id: "uses",
    title: "Întrebuințări",
    description: "Când folosim Future Perfect Continuous? Recapitulează înainte de camere.",
    pathTestId: "futureperfectcontinuous-path-uses",
    startTheoryTestId: "futureperfectcontinuous-start-theory-uses",
    roomTestIdPrefix: "futureperfectcontinuous-room-uses",
  },
  {
    id: "time-expressions",
    title: "Expresii de timp",
    description:
      "Expresii de timp tipice pentru Future Perfect Continuous (yesterday, last week etc.).",
    pathTestId: "futureperfectcontinuous-path-time-expressions",
    startTheoryTestId: "futureperfectcontinuous-start-theory-time-expressions",
    roomTestIdPrefix: "futureperfectcontinuous-room-time-expressions",
  },
];

export default function FuturePerfectContinuousMapPage() {
  return (
    <TenseMapPage
      tenseId="future-perfect-continuous"
      tenseLabel="Future Perfect Continuous"
      basePath={futurePerfectContinuousMapPath()}
      overviewPath={futurePerfectContinuousOverviewPath()}
      badgePath={futurePerfectContinuousBadgePath()}
      mapSections={FUTURE_PERFECT_CONTINUOUS_MAP_SECTIONS}
      roomsPerSection={FUTURE_PERFECT_CONTINUOUS_ROOMS_PER_SECTION}
      buildTheoryPath={futurePerfectContinuousTheoryPath}
      buildRoomPath={futurePerfectContinuousRoomPath}
      isTheoryCompleted={isTheoryCompleted}
      progressManager={progressManager}
      certificateTemplateUrl="/pdf/certificates/future-perfect-continuous-certificate-template.pdf"
    />
  );
}
