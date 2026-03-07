// src/modules/past-continuous/pages/PastContinuousBadgePage.jsx
import React from "react";
import { pastContinuousTheoryPath, pastContinuousMapPath } from "../past-continuous-paths.js";
import { DEV_MODE } from "../past-continuous-core/config.js";
import { progressManager } from "../past-continuous-core/progress-manager.js";
import { pastContinuousStorage as storage } from "../past-continuous-core/storage.js";
import { PAST_CONTINUOUS_LEX_HEAD_SVG } from "../past-continuous-core/assets.js";

import TenseBadgeRoom from "../../tenses/ui/TenseBadgeRoom.jsx";
import { renderScaffoldBadgeStory } from "../../tenses/scaffold-preview-badge.jsx";
import {
  badgeStoryConfig,
  badgeEx2Questions,
  badgeEx3Prompts,
  badgeMiniDictionaryItems,
  badgeStoryTtsText,
} from "../past-continuous-badge-exercises.js";
import { pastContinuousBadgeLexHints } from "../../lex-hints/past-continuous/index.js";

export default function PastContinuousBadgePage() {
  const tenseName = "Past Continuous";
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
      mapRoute={pastContinuousMapPath()}
      theoryRoute={pastContinuousTheoryPath("affirmative")}
      progressManager={progressManager}
      storage={storage}
      masterStorageKey={masterStorageKey}
      draftStorageKey={draftStorageKey}
      lexHints={pastContinuousBadgeLexHints.final || []}
      avatarSrc={PAST_CONTINUOUS_LEX_HEAD_SVG}
      storyVerbPool={storyVerbPool}
      storySlotAnswers={storySlotAnswers}
      renderStory={renderStory}
      ex2Questions={badgeEx2Questions}
      ex3Prompts={badgeEx3Prompts}
      dictionaryItems={badgeMiniDictionaryItems}
      badgeStoryTtsText={badgeStoryTtsText}
      certificateDownloadUrl="/pdf/certificates/past-continuous-certificate-template.pdf"
      devMode={DEV_MODE}
    />
  );
}
