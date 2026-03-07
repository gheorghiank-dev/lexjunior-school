// src/modules/present-perfect-continuous/pages/PresentPerfectContinuousBadgePage.jsx
import React from "react";
import { presentPerfectContinuousTheoryPath, presentPerfectContinuousMapPath } from "../present-paths.js";
import { DEV_MODE } from "../present-core/config.js";
import { progressManager } from "../present-core/progress-manager.js";
import { presentPerfectContinuousStorage as storage } from "../present-core/storage.js";
import { PRESENT_PERFECT_CONTINUOUS_LEX_HEAD_SVG } from "../present-core/assets.js";

import TenseBadgeRoom from "../../tenses/ui/TenseBadgeRoom.jsx";
import { renderScaffoldBadgeStory } from "../../tenses/scaffold-preview-badge.jsx";
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
  const storySlotAnswers = badgeStoryConfig.slotAnswers ?? [];

  const renderStory = ({ renderSlot }) =>
    renderScaffoldBadgeStory({ tenseName, renderSlot });

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
