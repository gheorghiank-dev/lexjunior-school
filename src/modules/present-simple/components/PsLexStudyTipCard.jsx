import React from "react";
import PsTheoryCard from "./PsTheoryCard.jsx";

/**
 * Card reutilizabil pentru „Lex Junior – Study Tip”
 * folosit în paginile de teorie din modulul Present Simple.
 *
 * Conținutul textului este stabilit și NU trebuie modificat aici,
 * pentru a păstra același mesaj în toate paginile unde este folosit.
 */
export default function PsLexStudyTipCard({ style }) {
  return (
    <PsTheoryCard style={style ?? { marginBottom: "1.75rem" }}>
      <h2 className="card-title">Lex Junior – Study Tip</h2>
      <p className="ps-text">
        Hei! Înainte să începi, spune-mi sincer: știi regula asta?
      </p>
      <p className="ps-text">
        <strong>Dacă DA:</strong> Citește totuși teoria o dată cu atenție.
        Unele detalii mici sunt tocmai cele care îți dau cheia în exerciții.
      </p>
      <p className="ps-text">
        <strong>Dacă NU:</strong> Scrie regula de mână într-un caiet. Serios!
        Când scrii, creierul lucrează dublu și o fixezi mult mai repede.
      </p>
      <p className="ps-text">
        <strong>Fun fact by Junior:</strong> Cercetările arată că informația
        scrisă de mână se reține de 2–3 ori mai bine decât cea doar citită.
        Creierul iubește mișcarea! 🧠✏️
      </p>
    </PsTheoryCard>
  );
}
