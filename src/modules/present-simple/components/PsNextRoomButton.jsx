import React from "react";
import { Link } from "react-router-dom";

/**
 * Buton reutilizabil pentru "Camera următoare".
 * - păstrează același stil (.btn .btn-outline .next-room)
 * - este vizibil tot timpul, dar blocat logic până când passed === true
 */
export function PsNextRoomButton({ to, passed }) {
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
