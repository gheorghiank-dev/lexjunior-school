import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import { PC_BASE_PATH, pcMapPath } from "../pc-paths.js";

export default function PcInterrogativeTheoryPage() {
  useEffect(() => {
    // gating: mark theory done as soon as the student visits the page
    markTheoryCompleted("interrogative");
  }, []);

  return (
    <main className="page page-pastel">
      <header className="page-header">
        <div className="page-header-main">
          <h1 className="page-title">Present Continuous – Interrogative (Teorie)</h1>
        </div>
      </header>

      <section className="card" style={{ marginBottom: "1.25rem" }}>
        <h2 className="card-title">Formă de bază</h2>
        <p className="card-text">
          Present Continuous se folosește pentru acțiuni care se întâmplă acum sau în perioada aceasta.
        </p>
        <ul className="ps-mini-list">
          <li><strong>am/is/are</strong> + verb + <strong>-ing</strong></li>
          <li><em>I am reading now.</em></li>
          <li><em>She is playing.</em></li>
        </ul>
      </section>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link className="btn btn-soft" to={pcMapPath()}>
          Mergi la hartă
        </Link>
        <Link className="btn btn-outline" to={PC_BASE_PATH}>
          Înapoi la Present Continuous
        </Link>
      </div>
    </main>
  );
}
