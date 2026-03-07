// src/modules/be-going-to/pages/BeGoingToBadgePage.jsx
import React from "react";
import { beGoingToTheoryPath, beGoingToMapPath } from "../be-paths.js";
import { DEV_MODE } from "../be-core/config.js";
import { progressManager } from "../be-core/progress-manager.js";
import { beGoingToStorage as storage } from "../be-core/storage.js";
import { BE_GOING_TO_LEX_HEAD_SVG } from "../be-core/assets.js";

import TenseBadgeRoom from "../../tenses/ui/TenseBadgeRoom.jsx";
import {
  badgeStoryConfig,
  badgeEx2Questions,
  badgeEx3Prompts,
  badgeMiniDictionaryItems,
  badgeStoryTtsText,
} from "../be-badge-exercises.js";
import { beGoingToBadgeLexHints } from "../../lex-hints/be-going-to/index.js";

export default function BeGoingToBadgePage() {
  const tenseName = "Be Going To";
  const sectionId = "badge";
  const roomNumber = 1;

  const masterStorageKey = storage.masterKey("badge");
  const draftStorageKey = storage.draftKey("badge");

  const storyVerbPool = badgeStoryConfig.verbs ?? [];
  const storySlotAnswers = [];

  const renderStory = ({ renderSlot }) => (
    <div className="badge-story">
      <p>
        Aceasta este o poveste-schelet pentru badge-ul Be Going To. Vei completa
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
      mapRoute={beGoingToMapPath()}
      theoryRoute={beGoingToTheoryPath("affirmative")}
      progressManager={progressManager}
      storage={storage}
      masterStorageKey={masterStorageKey}
      draftStorageKey={draftStorageKey}
      lexHints={beGoingToBadgeLexHints.final || []}
      avatarSrc={BE_GOING_TO_LEX_HEAD_SVG}
      storyVerbPool={storyVerbPool}
      storySlotAnswers={storySlotAnswers}
      renderStory={renderStory}
      ex2Questions={badgeEx2Questions}
      ex3Prompts={badgeEx3Prompts}
      dictionaryItems={badgeMiniDictionaryItems}
      badgeStoryTtsText={badgeStoryTtsText}
      certificateDownloadUrl="/pdf/certificates/be-going-to-certificate-template.pdf"
      devMode={DEV_MODE}
    />
  );
}
