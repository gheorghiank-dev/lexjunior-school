import React from "react";

/**
 * TenseLexStudyTipCard
 *
 * Card global „Lex Junior – Study Tip” pentru toate paginile de teorie
 * (indiferent de timp: Present Simple, Present Continuous etc.).
 *
 * Conținutul textului este stabilit și NU trebuie modificat aici,
 * pentru a păstra același mesaj în toate paginile unde este folosit.
 *
 * În prezent, layout-ul folosește stilul global de card ("card") și
 * clasele existente pentru text ("ps-text", "card-title").
 */
export default function TenseLexStudyTipCard() {
  return (
    <section className="card lex-study-tip-card" style={{ marginBottom: "1.75rem" }}>
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
    </section>
  );
}
