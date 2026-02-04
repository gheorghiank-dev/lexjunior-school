import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import { PC_BASE_PATH, pcMapPath } from "../pc-paths.js";

export default function PcUsesTheoryPage() {
  useEffect(() => {
    // Gating: teoria pentru "uses" se consideră completă când elevul deschide pagina.
    markTheoryCompleted("uses");
  }, []);

  return (
    <main className="page page-pastel">
      <header className="page-header">
        <div className="page-header-main">
          <h1 className="page-title">Present Continuous – Uses (Teorie)</h1>
        </div>
        <p className="page-lead">
          Când folosim Present Continuous? Vom detalia aici situațiile principale;
          conținutul complet îl adăugăm în pașii următori.
        </p>
      </header>

      <section className="card">
        <div className="lj-structure-box pc-structure-box">
        <h2 className="card-title">Schelet de conținut</h2>
        <p className="card-text">
          Deocamdată este doar scheletul. Urmează să completăm:
        </p>
        <ul className="list">
          <li>Acțiuni care se întâmplă chiar <strong>acum</strong>.</li>
          <li>Acțiuni temporare / în desfășurare în jurul momentului vorbirii.</li>
          <li>Planuri și aranjamente pentru viitorul apropiat.</li>
        </ul>
      
        </div>
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
