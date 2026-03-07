// src/modules/future-perfect/pages/FuturePerfectMapPage.jsx
import React from "react";
import TenseMapPage from "../../tenses/ui/TenseMapPage.jsx";
import {
  futurePerfectTheoryPath,
  futurePerfectMapPath,
  futurePerfectRoomPath,
  futurePerfectBadgePath,
  futurePerfectOverviewPath,
} from "../future-paths.js";
import { isTheoryCompleted } from "../future-core/theory-progress.js";
import { progressManager } from "../future-core/progress-manager.js";
import { FUTURE_PERFECT_ROOMS_PER_SECTION } from "../future-core/config.js";

const FUTURE_PERFECT_MAP_SECTIONS = [
  {
    id: "affirmative",
    title: "Afirmativ",
    description:
      "Învață cum se formează propozițiile afirmative în Future Perfect.",
    pathTestId: "futureperfect-path-affirmative",
    startTheoryTestId: "futureperfect-start-theory-affirmative",
    roomTestIdPrefix: "futureperfect-room-affirmative",
  },
  {
    id: "negative",
    title: "Negativ",
    description:
      "Recapitulează regulile pentru forma negativă înainte de camerele Future Perfect.",
    pathTestId: "futureperfect-path-negative",
    startTheoryTestId: "futureperfect-start-theory-negative",
    roomTestIdPrefix: "futureperfect-room-negative",
  },
  {
    id: "interrogative",
    title: "Interogativ",
    description:
      "Recapitulează regulile pentru forma interogativă înainte de camerele Future Perfect.",
    pathTestId: "futureperfect-path-interrogative",
    startTheoryTestId: "futureperfect-start-theory-interrogative",
    roomTestIdPrefix: "futureperfect-room-interrogative",
  },
  {
    id: "uses",
    title: "Întrebuințări",
    description: "Când folosim Future Perfect? Recapitulează înainte de camere.",
    pathTestId: "futureperfect-path-uses",
    startTheoryTestId: "futureperfect-start-theory-uses",
    roomTestIdPrefix: "futureperfect-room-uses",
  },
  {
    id: "time-expressions",
    title: "Expresii de timp",
    description:
      "Expresii de timp tipice pentru Future Perfect (yesterday, last week etc.).",
    pathTestId: "futureperfect-path-time-expressions",
    startTheoryTestId: "futureperfect-start-theory-time-expressions",
    roomTestIdPrefix: "futureperfect-room-time-expressions",
  },
];

export default function FuturePerfectMapPage() {
  return (
    <TenseMapPage
      tenseId="future-perfect"
      tenseLabel="Future Perfect"
      basePath={futurePerfectMapPath()}
      overviewPath={futurePerfectOverviewPath()}
      badgePath={futurePerfectBadgePath()}
      mapSections={FUTURE_PERFECT_MAP_SECTIONS}
      roomsPerSection={FUTURE_PERFECT_ROOMS_PER_SECTION}
      buildTheoryPath={futurePerfectTheoryPath}
      buildRoomPath={futurePerfectRoomPath}
      isTheoryCompleted={isTheoryCompleted}
      progressManager={progressManager}
      certificateTemplateUrl="/pdf/certificates/future-perfect-certificate-template.pdf"
    />
  );
}
