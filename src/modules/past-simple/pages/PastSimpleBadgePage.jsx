// src/modules/past-simple/pages/PastSimpleBadgePage.jsx
import React from "react";
import { pastSimpleTheoryPath, pastSimpleMapPath } from "../past-paths.js";
import { DEV_MODE } from "../past-core/config.js";
import { progressManager } from "../past-core/progress-manager.js";
import { pastSimpleStorage } from "../past-core/storage.js";
import { PAST_SIMPLE_LEX_HEAD_SVG } from "../past-core/assets.js";

import TenseBadgeRoom from "../../tenses/ui/TenseBadgeRoom.jsx";
import {
  badgeStoryConfig,
  badgeEx2Questions,
  badgeEx3Prompts,
  badgeMiniDictionaryItems,
  badgeStoryTtsText,
} from "../past-badge-exercises.js";
import { pastSimpleBadgeLexHints } from "../../lex-hints/past-simple/index.js";

export default function PastSimpleBadgePage() {
  const masterStorageKey = pastSimpleStorage.masterKey("badge");
  const draftStorageKey = pastSimpleStorage.draftKey("badge");

  const storyVerbPool = badgeStoryConfig.verbs ?? [];
  const storySlotAnswers = [];

  const renderStory = ({ renderSlot }) => (
    <div className="badge-story">
      <p>
        Aceasta este o poveste-schelet pentru badge-ul Past Simple. Vei completa
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
      tenseId="past-simple"
      tenseLabel="Past Simple"
      mapPath={pastSimpleMapPath()}
      theoryPath={pastSimpleTheoryPath("affirmative")}
      progressManager={progressManager}
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
