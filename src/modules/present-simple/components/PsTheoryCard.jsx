import React from "react";

/**
 * Wrapper simplu pentru cardurile din paginile de teorie Present Simple.
 * Păstrează clasa globală "card" și permite adăugarea de clase/ stiluri suplimentare.
 *
 * Nu impune structură internă (titlu, descriere etc.) — conținutul este furnizat ca children,
 * astfel încât să putem avea carduri foarte diferite pe aceeași pagină.
 */
export default function PsTheoryCard({ children, className = "", style }) {
  const combinedClassName = ["card", className].filter(Boolean).join(" ");

  return (
    <section className={combinedClassName} style={style}>
      {children}
    </section>
  );
}
