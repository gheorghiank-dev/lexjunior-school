// src/modules/future-continuous/pages/FutureContinuousMapPage.jsx
import React from "react";
import TenseMapPage from "../../tenses/ui/TenseMapPage.jsx";
import {
  futureContinuousTheoryPath,
  futureContinuousMapPath,
  futureContinuousRoomPath,
  futureContinuousBadgePath,
  futureContinuousOverviewPath,
} from "../future-paths.js";
import { isTheoryCompleted } from "../future-core/theory-progress.js";
import { progressManager } from "../future-core/progress-manager.js";
import { FUTURE_CONTINUOUS_ROOMS_PER_SECTION } from "../future-core/config.js";

const FUTURE_CONTINUOUS_MAP_SECTIONS = [
  {
    id: "affirmative",
    title: "Afirmativ",
    description:
      "Învață cum se formează propozițiile afirmative în Future Continuous.",
    pathTestId: "futurecontinuous-path-affirmative",
    startTheoryTestId: "futurecontinuous-start-theory-affirmative",
    roomTestIdPrefix: "futurecontinuous-room-affirmative",
  },
  {
    id: "negative",
    title: "Negativ",
    description:
      "Recapitulează regulile pentru forma negativă înainte de camerele Future Continuous.",
    pathTestId: "futurecontinuous-path-negative",
    startTheoryTestId: "futurecontinuous-start-theory-negative",
    roomTestIdPrefix: "futurecontinuous-room-negative",
  },
  {
    id: "interrogative",
    title: "Interogativ",
    description:
      "Recapitulează regulile pentru forma interogativă înainte de camerele Future Continuous.",
    pathTestId: "futurecontinuous-path-interrogative",
    startTheoryTestId: "futurecontinuous-start-theory-interrogative",
    roomTestIdPrefix: "futurecontinuous-room-interrogative",
  },
  {
    id: "uses",
    title: "Întrebuințări",
    description: "Când folosim Future Continuous? Recapitulează înainte de camere.",
    pathTestId: "futurecontinuous-path-uses",
    startTheoryTestId: "futurecontinuous-start-theory-uses",
    roomTestIdPrefix: "futurecontinuous-room-uses",
  },
  {
    id: "time-expressions",
    title: "Expresii de timp",
    description:
      "Expresii de timp tipice pentru Future Continuous (yesterday, last week etc.).",
    pathTestId: "futurecontinuous-path-time-expressions",
    startTheoryTestId: "futurecontinuous-start-theory-time-expressions",
    roomTestIdPrefix: "futurecontinuous-room-time-expressions",
  },
];

export default function FutureContinuousMapPage() {
  return (
    <TenseMapPage
      tenseId="future-continuous"
      tenseLabel="Future Continuous"
      basePath={futureContinuousMapPath()}
      overviewPath={futureContinuousOverviewPath()}
      badgePath={futureContinuousBadgePath()}
      mapSections={FUTURE_CONTINUOUS_MAP_SECTIONS}
      roomsPerSection={FUTURE_CONTINUOUS_ROOMS_PER_SECTION}
      buildTheoryPath={futureContinuousTheoryPath}
      buildRoomPath={futureContinuousRoomPath}
      isTheoryCompleted={isTheoryCompleted}
      progressManager={progressManager}
      certificateTemplateUrl="/pdf/certificates/future-continuous-certificate-template.pdf"
    />
  );
}
