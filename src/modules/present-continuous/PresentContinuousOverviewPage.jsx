import React from "react";
import "../../styles/overview.css";

/**
 * Present Continuous – Overview
 *
 * IMPORTANT: visual-only (no navigation buttons).
 */
export default function PresentContinuousOverviewPage() {
  return (
    <main className="page page-pastel overview-shell">
      <header className="page-header">
        <h1 className="page-title">Present Continuous – Overview</h1>
        <p className="page-lead">
          Recap rapid + tabelul formelor. (Doar vizual – fără navigație.)
        </p>
      </header>

      <section className="overview-grid" style={{ marginBottom: "1.25rem" }}>
        <div className="card">
          <div className="card-title">Când îl folosim</div>
          <p className="card-description">
            Acțiuni care se întâmplă chiar acum, perioade temporare, planuri
            apropiate, schimbări în desfășurare.
          </p>
        </div>
        <div className="card">
          <div className="card-title">Semnalatori</div>
          <p className="card-description">
            now, right now, at the moment, today, these days.
          </p>
        </div>
        <div className="card">
          <div className="card-title">Structură</div>
          <p className="card-description">
            <strong>am/is/are + V-ing</strong> (I am working, He is playing,
            They are studying).
          </p>
        </div>
        <div className="card">
          <div className="card-title">Greșeala clasică</div>
          <p className="card-description">
            Nu uităm de <strong>to be</strong> și nu scriem <em>He playing</em>.
          </p>
        </div>
      </section>

      <section className="card">
        <h2 className="card-title">Tabel – formele de bază</h2>
        <p className="overview-note">
          Notă: acesta este un scaffold (Sprint 3). Tabelul se va extinde odată
          cu modulele viitoare.
        </p>

        <div className="overview-table-wrap" style={{ marginTop: "0.8rem" }}>
          <table className="overview-table">
            <thead>
              <tr>
                <th className="ov-center">Pers</th>
                <th>Affirmative</th>
                <th>Negative</th>
                <th>Interrogative</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ov-center">I</td>
                <td>I <span className="ov-em">am</span> working</td>
                <td>I <span className="ov-em ov-red">am not</span> working</td>
                <td><span className="ov-em ov-red">Am</span> I working?</td>
              </tr>
              <tr>
                <td className="ov-center">He/She/It</td>
                <td>He <span className="ov-em">is</span> working</td>
                <td>He <span className="ov-em ov-red">isn&apos;t</span> working</td>
                <td><span className="ov-em ov-red">Is</span> he working?</td>
              </tr>
              <tr>
                <td className="ov-center">We/You/They</td>
                <td>They <span className="ov-em">are</span> working</td>
                <td>They <span className="ov-em ov-red">aren&apos;t</span> working</td>
                <td><span className="ov-em ov-red">Are</span> they working?</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
