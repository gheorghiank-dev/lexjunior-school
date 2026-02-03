import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import { PC_BASE_PATH, pcMapPath } from "../pc-paths.js";

export default function PcTimeExpressionsTheoryPage() {
  useEffect(() => {
    // Gating: marcăm teoria pentru expresiile de timp ca fiind citită.
    markTheoryCompleted("time-expressions");
  }, []);

  return (
    <main className="page page-pastel">
      <header className="page-header">
        <div className="page-header-main">
          <h1 className="page-title">Present Continuous – Time Expressions (Teorie)</h1>
        </div>
        <p className="page-lead">
          Aici vom aduna expresiile de timp specifice pentru Present Continuous.
          Momentan este doar o pagină de schelet.
        </p>
      </header>

      <section className="card">
        <h2 className="card-title">Schelet de expresii de timp</h2>
        <p className="card-text">
          Exemple de expresii pe care le vom detalia ulterior:
        </p>
        <ul className="list">
          <li><em>now</em>, <em>right now</em>, <em>at the moment</em></li>
          <li><em>today</em>, <em>this week</em>, <em>this month</em></li>
          <li>expresii de tipul <em>for a few days</em>, <em>these days</em> etc.</li>
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
