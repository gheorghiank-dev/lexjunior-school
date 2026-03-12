import React from "react";
import { psTheoryPath, psMapPath } from "../ps-paths.js";
import { DEV_MODE } from "../ps-core/config.js";
import { progressManager } from "../ps-core/progress-manager.js";
import { storage } from "../ps-core/storage.js";
import { PS_LEX_HEAD_SVG } from "../ps-core/assets.js";

import TenseBadgeRoom from "../../tenses/ui/TenseBadgeRoom.jsx";
import {
  badgeStoryConfig,
  badgeEx2Questions,
  badgeEx3Prompts,
  badgeMiniDictionaryItems,
  badgeStoryTtsText,
} from "../ps-badge-exercises.js";
import { presentSimpleBadgeLexHints } from "../../lex-hints/present-simple/index.js";
import { savePresentSimpleBadgeProgress } from "../../../core/platform/present-simple-progress.js";

/**
 * Present Simple badge page – thin wrapper over the global TenseBadgeRoom.
 */
export default function PsBadgePage() {
  const tenseName = "Present Simple";
  const sectionId = "badge";
  const roomNumber = 1;

  async function handleBadgePersist({ scorePercent, passed }) {
    try {
      await savePresentSimpleBadgeProgress({
        scorePercent,
        passed,
      });
    } catch (error) {
      console.warn("Failed to persist Present Simple badge progress", error);
    }
  }

  const masterStorageKey = "ps_badge_room1_master_v1";
  const draftStorageKey = "ps_badge_room1_draft_v1";

  const storyVerbPool = badgeStoryConfig.verbs;
  const storySlotAnswers = badgeStoryConfig.slotAnswers;

  const renderStory = ({ renderSlot }) => (
    <div className="exercise-text">
      <p>
        Every day in my family starts differently for each of us. I have my own
        routine, and my brother has his, and they almost never look the same.
        That’s why our daily schedules feel like two separate little stories.
      </p>

      <p>
        <strong>Paragraph 2 — I</strong>
      </p>

      <p>
        I usually {renderSlot(0)} at 7 a.m., and the first thing I do is{" "}
        {renderSlot(1)} a quick cup of coffee.
      </p>

      <p>
        I {renderSlot(2)} my messages, then I {renderSlot(3)} preparing for
        school.
      </p>

      <p>
        I always {renderSlot(4)} the house around 7:45 because I {renderSlot(5)}{" "}
        to walk slowly and enjoy the quiet morning.
      </p>

      <p>
        During the day, I {renderSlot(6)}, teach, and work on different
        projects.
      </p>

      <p>
        In the afternoon, I often {renderSlot(7)} my friends or {renderSlot(8)}{" "}
        something relaxing.
      </p>

      <p>
        I usually {renderSlot(9)} around 6 p.m., cook something simple, and
        finish my homework or plan lessons for the next day.
      </p>

      <p>
        <strong>Paragraph 3 — He</strong>
      </p>

      <p>My brother, on the other hand, {renderSlot(10)} much later.</p>

      <p>
        He normally {renderSlot(11)} the news, {renderSlot(12)} a big breakfast,
        and {renderSlot(13)} at his computer around 10.
      </p>

      <p>
        He {renderSlot(14)} most of the afternoon gaming or working on tech
        projects.
      </p>

      <p>
        In the evening, he sometimes {renderSlot(15)} with friends or{" "}
        {renderSlot(16)} food online because he {renderSlot(17)} cooking.
      </p>

      <p>
        He usually {renderSlot(18)} from home and {renderSlot(19)} after
        midnight, while I’m already asleep.
      </p>

      <p>
        Even though our days are different, we still find time to talk, laugh,
        and share small moments. And maybe that’s what really matters in a
        family.
      </p>
    </div>
  );

  return (
    <TenseBadgeRoom
      tenseName={tenseName}
      sectionId={sectionId}
      roomNumber={roomNumber}
      theoryRoute={psTheoryPath("affirmative")}
      mapRoute={psMapPath()}
      progressManager={progressManager}
      onBadgePersist={handleBadgePersist}
      storage={storage}
      masterStorageKey={masterStorageKey}
      draftStorageKey={draftStorageKey}
      lexHints={presentSimpleBadgeLexHints.final || []}
      avatarSrc={PS_LEX_HEAD_SVG}
      storyVerbPool={storyVerbPool}
      storySlotAnswers={storySlotAnswers}
      renderStory={renderStory}
      ex2Questions={badgeEx2Questions}
      ex3Prompts={badgeEx3Prompts}
      dictionaryItems={badgeMiniDictionaryItems}
      badgeStoryTtsText={badgeStoryTtsText}
      certificateDownloadUrl="/pdf/certificates/present-simple-certificate-template.pdf"
      devMode={DEV_MODE}
    />
  );
}
