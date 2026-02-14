import React from "react";

/**
 * RoomPageShell v2
 *
 * Generic shell for all tense rooms.
 * It only cares about the structural layout:
 *  - <main> wrapper with the page className
 *  - header slot (HUD, titles, navigation)
 *  - children slot (exercise content)
 *  - devTools slot (dev status / autofill)
 *  - lex slot (Lex Junior UI)
 *
 * Present Simple and Present Continuous (and future tenses) plug
 * their own header/dev/lex components into these slots so that
 * the overall layout stays symmetrical.
 */
export default function RoomPageShell({
  className = "page page-pastel",
  header = null,
  children,
  devTools = null,
  lex = null,
}) {
  return (
    <main className={className}>
      {header}
      {children}
      {devTools}
      {lex}
    </main>
  );
}
