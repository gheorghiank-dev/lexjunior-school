import React from "react";
import { pcTheoryPath, pcMapPath } from "../pc-paths.js";
import { DEV_MODE } from "../pc-core/config.js";
import { pcProgressManager } from "../pc-core/progress-manager.js";
import { pcStorage } from "../pc-core/storage.js";
import { PC_LEX_HEAD_SVG } from "../pc-core/assets.js";

import TenseBadgeRoom from "../../tenses/ui/TenseBadgeRoom.jsx";
import {
  badgeStoryConfig,
  badgeEx2Questions,
  badgeEx3Prompts,
  badgeMiniDictionaryItems,
  badgeStoryTtsText,
} from "../pc-badge-exercises.js";
import { presentContinuousBadgeLexHints } from "../../lex-hints/present-continuous/badge.js";

/**
 * Present Continuous badge page – thin wrapper over the global TenseBadgeRoom.
 */
export default function PcBadgePage() {
  const tenseName = "Present Continuous";
  const sectionId = "badge";
  const roomNumber = 1;

  const masterStorageKey = "pc_badge_room1_master_v1";
  const draftStorageKey = "pc_badge_room1_draft_v1";

  const storyVerbPool = badgeStoryConfig.verbs;
  const storySlotAnswers = badgeStoryConfig.slotAnswers;

  const renderStory = ({ renderSlot }) => (
    <div className="exercise-text">
      <p>
        Today is a special day. My class is going on a trip, and everyone is
        busy.
      </p>

      <p>
        Right now I am {renderSlot(0)} for school and {renderSlot(1)} my bag
        with snacks and a camera.
      </p>

      <p>
        Outside the house, my best friend is {renderSlot(2)} at the bus stop
        because the bus is late.
      </p>

      <p>
        In the park, some students are {renderSlot(3)} to catch the bus, and
        others are {renderSlot(4)} their colourful jackets.
      </p>

      <p>
        At the same time, my parents are {renderSlot(8)} dinner while my little
        brother is {renderSlot(7)} video games.
      </p>

      <p>
        Later this evening, I am {renderSlot(9)} and {renderSlot(5)} for
        tomorrow&apos;s test while we are {renderSlot(6)} about the trip.
      </p>
    </div>
  );

  return (
    <TenseBadgeRoom
      tenseName={tenseName}
      sectionId={sectionId}
      roomNumber={roomNumber}
      theoryRoute={pcTheoryPath("affirmative")}
      mapRoute={pcMapPath()}
      progressManager={pcProgressManager}
      storage={pcStorage}
      masterStorageKey={masterStorageKey}
      draftStorageKey={draftStorageKey}
      lexHints={presentContinuousBadgeLexHints.final || []}
      avatarSrc={PC_LEX_HEAD_SVG}
      storyVerbPool={storyVerbPool}
      storySlotAnswers={storySlotAnswers}
      renderStory={renderStory}
      ex2Questions={badgeEx2Questions}
      ex3Prompts={badgeEx3Prompts}
      dictionaryItems={badgeMiniDictionaryItems}
      badgeStoryTtsText={badgeStoryTtsText}
      devMode={DEV_MODE}
    />
  );
}
