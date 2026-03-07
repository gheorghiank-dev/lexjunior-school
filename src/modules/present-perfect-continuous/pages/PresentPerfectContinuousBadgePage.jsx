// src/modules/present-perfect-continuous/pages/PresentPerfectContinuousBadgePage.jsx
import React from "react";
import { presentPerfectContinuousTheoryPath, presentPerfectContinuousMapPath } from "../present-paths.js";
import { DEV_MODE } from "../present-core/config.js";
import { progressManager } from "../present-core/progress-manager.js";
import { presentPerfectContinuousStorage as storage } from "../present-core/storage.js";
import { PRESENT_PERFECT_CONTINUOUS_LEX_HEAD_SVG } from "../present-core/assets.js";

import TenseBadgeRoom from "../../tenses/ui/TenseBadgeRoom.jsx";
import {
  badgeStoryConfig,
  badgeEx2Questions,
  badgeEx3Prompts,
  badgeMiniDictionaryItems,
  badgeStoryTtsText,
} from "../present-badge-exercises.js";
import { presentPerfectContinuousBadgeLexHints } from "../../lex-hints/present-perfect-continuous/index.js";

export default function PresentPerfectContinuousBadgePage() {
  const tenseName = "Present Perfect Continuous";
  const sectionId = "badge";
  const roomNumber = 1;

  const masterStorageKey = storage.masterKey("badge");
  const draftStorageKey = storage.draftKey("badge");

  const storyVerbPool = badgeStoryConfig.verbs ?? [];
  const storySlotAnswers = [];

  const renderStory = ({ renderSlot }) => (
    <div className="badge-story">
      <p>
        Aceasta este o poveste-schelet pentru badge-ul Present Perfect Continuous. Vei completa
        textul și slot-urile atunci când definești exercițiile finale.
      </p>
      <p>
        Între timp, structura tehnică este pregătită: poți reutiliza modelul din
        badge-urile de Present Simple / Present Continuous.
      </p>
      <p>
        De îndată ce adaugi verbele, întrebările și dicționarul, badge-ul Past
        Simple va fi gata de lucru pentru elevi.
      </p>
    </div>
  );

  return (
    <TenseBadgeRoom
      tenseName={tenseName}
      sectionId={sectionId}
      roomNumber={roomNumber}
      mapRoute={presentPerfectContinuousMapPath()}
      theoryRoute={presentPerfectContinuousTheoryPath("affirmative")}
      progressManager={progressManager}
      storage={storage}
      masterStorageKey={masterStorageKey}
      draftStorageKey={draftStorageKey}
      lexHints={presentPerfectContinuousBadgeLexHints.final || []}
      avatarSrc={PRESENT_PERFECT_CONTINUOUS_LEX_HEAD_SVG}
      storyVerbPool={storyVerbPool}
      storySlotAnswers={storySlotAnswers}
      renderStory={renderStory}
      ex2Questions={badgeEx2Questions}
      ex3Prompts={badgeEx3Prompts}
      dictionaryItems={badgeMiniDictionaryItems}
      badgeStoryTtsText={badgeStoryTtsText}
      certificateDownloadUrl="/pdf/certificates/present-perfect-continuous-certificate-template.pdf"
      devMode={DEV_MODE}
    />
  );
}
