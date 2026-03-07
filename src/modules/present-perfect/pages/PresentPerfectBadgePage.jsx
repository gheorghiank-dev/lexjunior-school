// src/modules/present-perfect/pages/PresentPerfectBadgePage.jsx
import React from "react";
import { presentPerfectTheoryPath, presentPerfectMapPath } from "../present-paths.js";
import { DEV_MODE } from "../present-core/config.js";
import { progressManager } from "../present-core/progress-manager.js";
import { presentPerfectStorage as storage } from "../present-core/storage.js";
import { PRESENT_PERFECT_LEX_HEAD_SVG } from "../present-core/assets.js";

import TenseBadgeRoom from "../../tenses/ui/TenseBadgeRoom.jsx";
import { renderScaffoldBadgeStory } from "../../tenses/scaffold-preview-badge.jsx";
import {
  badgeStoryConfig,
  badgeEx2Questions,
  badgeEx3Prompts,
  badgeMiniDictionaryItems,
  badgeStoryTtsText,
} from "../present-badge-exercises.js";
import { presentPerfectBadgeLexHints } from "../../lex-hints/present-perfect/index.js";

export default function PresentPerfectBadgePage() {
  const tenseName = "Present Perfect";
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
      mapRoute={presentPerfectMapPath()}
      theoryRoute={presentPerfectTheoryPath("affirmative")}
      progressManager={progressManager}
      storage={storage}
      masterStorageKey={masterStorageKey}
      draftStorageKey={draftStorageKey}
      lexHints={presentPerfectBadgeLexHints.final || []}
      avatarSrc={PRESENT_PERFECT_LEX_HEAD_SVG}
      storyVerbPool={storyVerbPool}
      storySlotAnswers={storySlotAnswers}
      renderStory={renderStory}
      ex2Questions={badgeEx2Questions}
      ex3Prompts={badgeEx3Prompts}
      dictionaryItems={badgeMiniDictionaryItems}
      badgeStoryTtsText={badgeStoryTtsText}
      certificateDownloadUrl="/pdf/certificates/present-perfect-certificate-template.pdf"
      devMode={DEV_MODE}
    />
  );
}
