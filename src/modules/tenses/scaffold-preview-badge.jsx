import React from "react";

export function renderScaffoldBadgeStory({ tenseName, renderSlot }) {
  return (
    <div className="badge-story">
      <p>
        This is the developer preview story for <strong>{tenseName}</strong>.
        Click the slots and place the correct verbs in order.
      </p>
      <p>
        Every afternoon we {renderSlot(0)}, then we {renderSlot(1)}, and in
        the evening we {renderSlot(2)} our progress.
      </p>
      <p>
        The goal here is simple: make the badge route fully playable before the
        final pedagogical content is added.
      </p>
    </div>
  );
}
