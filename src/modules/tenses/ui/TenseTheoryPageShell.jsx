import React from "react";

/**
 * TenseTheoryPageShell
 *
 * Shell generic pentru paginile de teorie ale unui timp verbal.
 * Asigură layout-ul de bază:
 *   <main className="page">...</main>
 *
 * Timpurile individuale trimit:
 *   - header-ul de pagină
 *   - cardurile de teorie
 *   - secțiunea "Unde merg mai departe?" etc.
 */
export default function TenseTheoryPageShell({ children, className = "page" }) {
  return <main className={className}>{children}</main>;
}
