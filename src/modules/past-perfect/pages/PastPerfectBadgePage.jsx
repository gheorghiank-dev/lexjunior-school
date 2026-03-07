// src/modules/past-perfect/pages/PastPerfectBadgePage.jsx
import React from "react";
import { pastPerfectTheoryPath, pastPerfectMapPath } from "../past-perfect-paths.js";
import { DEV_MODE } from "../past-perfect-core/config.js";
import { progressManager } from "../past-perfect-core/progress-manager.js";
import { pastPerfectStorage as storage } from "../past-perfect-core/storage.js";
import { PAST_PERFECT_LEX_HEAD_SVG } from "../past-perfect-core/assets.js";

import TenseBadgeRoom from "../../tenses/ui/TenseBadgeRoom.jsx";
import {
  badgeStoryConfig,
  badgeEx2Questions,
  badgeEx3Prompts,
  badgeMiniDictionaryItems,
  badgeStoryTtsText,
} from "../past-perfect-badge-exercises.js";
import { pastPerfectBadgeLexHints } from "../../lex-hints/past-perfect/index.js";

export default function PastPerfectBadgePage() {
  const tenseName = "Past Perfect";
  const sectionId = "badge";
  const roomNumber = 1;

  const masterStorageKey = storage.masterKey("badge");
  const draftStorageKey = storage.draftKey("badge");

  const storyVerbPool = badgeStoryConfig.verbs ?? [];
  const storySlotAnswers = [];

  const renderStory = ({ renderSlot }) => (
    <div className="badge-story">
      <p>
        Aceasta este o poveste-schelet pentru badge-ul Past Perfect. Vei completa
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
      mapRoute={pastPerfectMapPath()}
      theoryRoute={pastPerfectTheoryPath("affirmative")}
      progressManager={progressManager}
      storage={storage}
      masterStorageKey={masterStorageKey}
      draftStorageKey={draftStorageKey}
      lexHints={pastPerfectBadgeLexHints.final || []}
      avatarSrc={PAST_PERFECT_LEX_HEAD_SVG}
      storyVerbPool={storyVerbPool}
      storySlotAnswers={storySlotAnswers}
      renderStory={renderStory}
      ex2Questions={badgeEx2Questions}
      ex3Prompts={badgeEx3Prompts}
      dictionaryItems={badgeMiniDictionaryItems}
      badgeStoryTtsText={badgeStoryTtsText}
      certificateDownloadUrl="/pdf/certificates/past-perfect-certificate-template.pdf"
      devMode={DEV_MODE}
    />
  );
}
