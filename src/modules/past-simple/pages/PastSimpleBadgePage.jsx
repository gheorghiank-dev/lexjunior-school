// src/modules/past-simple/pages/PastSimpleBadgePage.jsx
import React from "react";
import { pastSimpleTheoryPath, pastSimpleMapPath } from "../past-paths.js";
import { DEV_MODE } from "../past-core/config.js";
import { progressManager } from "../past-core/progress-manager.js";
import { pastSimpleStorage as storage } from "../past-core/storage.js";
import { PAST_SIMPLE_LEX_HEAD_SVG } from "../past-core/assets.js";

import TenseBadgeRoom from "../../tenses/ui/TenseBadgeRoom.jsx";
import { renderScaffoldBadgeStory } from "../../tenses/scaffold-preview-badge.jsx";
import {
  badgeStoryConfig,
  badgeEx2Questions,
  badgeEx3Prompts,
  badgeMiniDictionaryItems,
  badgeStoryTtsText,
} from "../past-badge-exercises.js";
import { pastSimpleBadgeLexHints } from "../../lex-hints/past-simple/index.js";

export default function PastSimpleBadgePage() {
  const tenseName = "Past Simple";
  const sectionId = "badge";
  const roomNumber = 1;

  const masterStorageKey = storage.masterKey("badge");
  const draftStorageKey = storage.draftKey("badge");

  const storyVerbPool = badgeStoryConfig.verbs ?? [];
  const storySlotAnswers = badgeStoryConfig.slotAnswers ?? [];

  const renderStory = ({ renderSlot }) =>
    renderScaffoldBadgeStory({ tenseName, renderSlot });

  return (
    <TenseBadgeRoom
      tenseName={tenseName}
      sectionId={sectionId}
      roomNumber={roomNumber}
      mapRoute={pastSimpleMapPath()}
      theoryRoute={pastSimpleTheoryPath("affirmative")}
      progressManager={progressManager}
      storage={storage}
      masterStorageKey={masterStorageKey}
      draftStorageKey={draftStorageKey}
      lexHints={pastSimpleBadgeLexHints.final || []}
      avatarSrc={PAST_SIMPLE_LEX_HEAD_SVG}
      storyVerbPool={storyVerbPool}
      storySlotAnswers={storySlotAnswers}
      renderStory={renderStory}
      ex2Questions={badgeEx2Questions}
      ex3Prompts={badgeEx3Prompts}
      dictionaryItems={badgeMiniDictionaryItems}
      badgeStoryTtsText={badgeStoryTtsText}
      certificateDownloadUrl="/pdf/certificates/past-simple-certificate-template.pdf"
      devMode={DEV_MODE}
    />
  );
}
