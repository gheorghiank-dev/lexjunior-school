import React from "react";

/**
 * Shell simplu pentru paginile de teorie din modulul Present Simple.
 * Împachetează conținutul într-un <main className="page"> pentru un layout unitar.
 *
 * Folosire (schemă):
 *   <PsTheoryPageShell>
 *     <header className="page-header">...</header>
 *     ... cardurile de teorie și secțiunea "Unde merg mai departe?" ...
 *   </PsTheoryPageShell>
 */
export default function PsTheoryPageShell({ children }) {
  return <main className="page">{children}</main>;
}
