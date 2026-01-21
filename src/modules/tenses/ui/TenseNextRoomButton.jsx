import React from "react";
import { Link } from "react-router-dom";

/**
 * Generic "Next room" button.
 * Uses the same classes as Present Simple to keep styling consistent.
 */
export function TenseNextRoomButton({ to, passed }) {
  if (!to) return null;

  const handleClick = (e) => {
    if (!passed) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <Link
      to={to}
      className="btn btn-outline next-room"
      aria-disabled={!passed}
      onClick={handleClick}
    >
      Camera următoare →
    </Link>
  );
}
