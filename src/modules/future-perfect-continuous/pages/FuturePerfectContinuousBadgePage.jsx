// src/modules/future-perfect-continuous/pages/FuturePerfectContinuousBadgePage.jsx
import React from "react";
import { futurePerfectContinuousTheoryPath, futurePerfectContinuousMapPath } from "../future-paths.js";
import { DEV_MODE } from "../future-core/config.js";
import { progressManager } from "../future-core/progress-manager.js";
import { futurePerfectContinuousStorage as storage } from "../future-core/storage.js";
import { FUTURE_PERFECT_CONTINUOUS_LEX_HEAD_SVG } from "../future-core/assets.js";

import TenseBadgeRoom from "../../tenses/ui/TenseBadgeRoom.jsx";
import {
  badgeStoryConfig,
  badgeEx2Questions,
  badgeEx3Prompts,
  badgeMiniDictionaryItems,
  badgeStoryTtsText,
} from "../future-badge-exercises.js";
import { futurePerfectContinuousBadgeLexHints } from "../../lex-hints/future-perfect-continuous/index.js";

export default function FuturePerfectContinuousBadgePage() {
  const tenseName = "Future Perfect Continuous";
  const sectionId = "badge";
  const roomNumber = 1;

  const masterStorageKey = storage.masterKey("badge");
  const draftStorageKey = storage.draftKey("badge");

  const storyVerbPool = badgeStoryConfig.verbs ?? [];
  const storySlotAnswers = [];

  const renderStory = ({ renderSlot }) => (
    <div className="badge-story">
      <p>
        Aceasta este o poveste-schelet pentru badge-ul Future Perfect Continuous. Vei completa
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
      mapRoute={futurePerfectContinuousMapPath()}
      theoryRoute={futurePerfectContinuousTheoryPath("affirmative")}
      progressManager={progressManager}
      storage={storage}
      masterStorageKey={masterStorageKey}
      draftStorageKey={draftStorageKey}
      lexHints={futurePerfectContinuousBadgeLexHints.final || []}
      avatarSrc={FUTURE_PERFECT_CONTINUOUS_LEX_HEAD_SVG}
      storyVerbPool={storyVerbPool}
      storySlotAnswers={storySlotAnswers}
      renderStory={renderStory}
      ex2Questions={badgeEx2Questions}
      ex3Prompts={badgeEx3Prompts}
      dictionaryItems={badgeMiniDictionaryItems}
      badgeStoryTtsText={badgeStoryTtsText}
      certificateDownloadUrl="/pdf/certificates/future-perfect-continuous-certificate-template.pdf"
      devMode={DEV_MODE}
    />
  );
}
