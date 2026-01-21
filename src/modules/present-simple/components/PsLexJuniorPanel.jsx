import React from "react";
import LexJunior from "./LexJunior.jsx";

/**
 * Card separat pentru Lex Junior și hinturile camerei.
 * Varianta React-native (fără initLexJunior/innerHTML).
 */
export function PsLexJuniorPanel({ lexHints }) {
  return (
    <section className="card" style={{ marginTop: "1.5rem" }}>
      <h2 className="card-title">Lex Junior – Hinturi pentru această cameră</h2>
      <p className="card-description">
        Lex Junior este aici ca să te ajute dacă te blochezi. Citește cu atenție
        cerința, încearcă singur, iar apoi folosește hinturile lui Lex doar ca
        sprijin, nu ca soluție directă.
      </p>

      <div style={{ marginTop: "1.5rem" }}>
        <LexJunior hints={lexHints} />
      </div>
    </section>
  );
}
