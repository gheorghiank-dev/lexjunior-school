// src/modules/future-continuous/pages/FutureContinuousBadgePage.jsx
import React from "react";
import { futureContinuousTheoryPath, futureContinuousMapPath } from "../future-paths.js";
import { DEV_MODE } from "../future-core/config.js";
import { progressManager } from "../future-core/progress-manager.js";
import { futureContinuousStorage as storage } from "../future-core/storage.js";
import { FUTURE_CONTINUOUS_LEX_HEAD_SVG } from "../future-core/assets.js";

import TenseBadgeRoom from "../../tenses/ui/TenseBadgeRoom.jsx";
import { renderScaffoldBadgeStory } from "../../tenses/scaffold-preview-badge.jsx";
import {
  badgeStoryConfig,
  badgeEx2Questions,
  badgeEx3Prompts,
  badgeMiniDictionaryItems,
  badgeStoryTtsText,
} from "../future-badge-exercises.js";
import { futureContinuousBadgeLexHints } from "../../lex-hints/future-continuous/index.js";

export default function FutureContinuousBadgePage() {
  const tenseName = "Future Continuous";
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
      mapRoute={futureContinuousMapPath()}
      theoryRoute={futureContinuousTheoryPath("affirmative")}
      progressManager={progressManager}
      storage={storage}
      masterStorageKey={masterStorageKey}
      draftStorageKey={draftStorageKey}
      lexHints={futureContinuousBadgeLexHints.final || []}
      avatarSrc={FUTURE_CONTINUOUS_LEX_HEAD_SVG}
      storyVerbPool={storyVerbPool}
      storySlotAnswers={storySlotAnswers}
      renderStory={renderStory}
      ex2Questions={badgeEx2Questions}
      ex3Prompts={badgeEx3Prompts}
      dictionaryItems={badgeMiniDictionaryItems}
      badgeStoryTtsText={badgeStoryTtsText}
      certificateDownloadUrl="/pdf/certificates/future-continuous-certificate-template.pdf"
      devMode={DEV_MODE}
    />
  );
}
