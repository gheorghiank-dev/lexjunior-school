import React from "react";
import "../../styles/overview.css";

/**
 * Present Simple – Overview
 *
 * IMPORTANT: This page is visual-only (no navigation buttons).
 */
export default function PresentSimpleOverviewPage() {
  return (
    <main className="page page-pastel overview-shell">
      <header className="page-header">
        <h1 className="page-title">Present Simple – Overview</h1>
        <p className="page-lead">
          Recap rapid + tabelul complet al formelor. (Doar vizual – fără
          navigație.)
        </p>
      </header>

      <section className="overview-grid" style={{ marginBottom: "1.25rem" }}>
        <div className="card">
          <div className="card-title">Când îl folosim</div>
          <p className="card-description">
            Rutine, obiceiuri, adevăruri generale, programe/orare fixe,
            instrucțiuni.
          </p>
        </div>
        <div className="card">
          <div className="card-title">Semnalatori</div>
          <p className="card-description">
            always, usually, often, sometimes, never, every day, on Mondays,
            at night.
          </p>
        </div>
        <div className="card">
          <div className="card-title">Regula de aur</div>
          <p className="card-description">
            He/She/It + <strong>-s</strong> în afirmativ; la negativ/interogativ:
            <strong> does + verb bază</strong>.
          </p>
        </div>
        <div className="card">
          <div className="card-title">Greșeala clasică</div>
          <p className="card-description">
            NU punem <strong>-s</strong> după <strong>does/doesn&apos;t</strong>:
            <em> Does he walk?</em> / <em>He doesn&apos;t walk.</em>
          </p>
        </div>
      </section>

      <section className="card">
        <h2 className="card-title">Tabel – formele complete</h2>
        <p className="overview-note">
          Notă: cuvintele evidențiate în roșu sunt auxiliarele (do/does) și
          formele negative scurte.
        </p>

        <div className="overview-table-wrap" style={{ marginTop: "0.8rem" }}>
          <table className="overview-table">
            <thead>
              <tr>
                <th className="ov-center">Nr/Pers</th>
                <th>Affirmative</th>
                <th className="ov-center" colSpan={2}>
                  Negative
                </th>
                <th>Interrogative</th>
              </tr>
              <tr>
                <th />
                <th />
                <th>Long form</th>
                <th>Short form</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ov-center">Sg. I</td>
                <td>I walk</td>
                <td>
                  I <span className="ov-em ov-red">do not</span> walk
                </td>
                <td>
                  I <span className="ov-em ov-red">don&apos;t</span> walk
                </td>
                <td>
                  <span className="ov-em ov-red">Do</span> I walk?
                </td>
              </tr>
              <tr>
                <td className="ov-center">II</td>
                <td>You walk</td>
                <td>
                  You <span className="ov-em ov-red">do not</span> walk
                </td>
                <td>
                  You <span className="ov-em ov-red">don&apos;t</span> walk
                </td>
                <td>
                  <span className="ov-em ov-red">Do</span> you walk?
                </td>
              </tr>
              <tr>
                <td className="ov-center">III</td>
                <td>He walks</td>
                <td>
                  He <span className="ov-em ov-red">does not</span> walk
                </td>
                <td>
                  He <span className="ov-em ov-red">doesn&apos;t</span> walk
                </td>
                <td>
                  <span className="ov-em ov-red">Does</span> he walk?
                </td>
              </tr>
              <tr>
                <td className="ov-center" />
                <td>She walks</td>
                <td>
                  She <span className="ov-em ov-red">does not</span> walk
                </td>
                <td>
                  She <span className="ov-em ov-red">doesn&apos;t</span> walk
                </td>
                <td>
                  <span className="ov-em ov-red">Does</span> she walk?
                </td>
              </tr>
              <tr>
                <td className="ov-center" />
                <td>It walks</td>
                <td>
                  It <span className="ov-em ov-red">does not</span> walk
                </td>
                <td>
                  It <span className="ov-em ov-red">doesn&apos;t</span> walk
                </td>
                <td>
                  <span className="ov-em ov-red">Does</span> it walk?
                </td>
              </tr>
              <tr>
                <td className="ov-center">Pl. I</td>
                <td>We walk</td>
                <td>
                  We <span className="ov-em ov-red">do not</span> walk
                </td>
                <td>
                  We <span className="ov-em ov-red">don&apos;t</span> walk
                </td>
                <td>
                  <span className="ov-em ov-red">Do</span> we walk?
                </td>
              </tr>
              <tr>
                <td className="ov-center">II</td>
                <td>You walk</td>
                <td>
                  You <span className="ov-em ov-red">do not</span> walk
                </td>
                <td>
                  You <span className="ov-em ov-red">don&apos;t</span> walk
                </td>
                <td>
                  <span className="ov-em ov-red">Do</span> you walk?
                </td>
              </tr>
              <tr>
                <td className="ov-center">III</td>
                <td>They walk</td>
                <td>
                  They <span className="ov-em ov-red">do not</span> walk
                </td>
                <td>
                  They <span className="ov-em ov-red">don&apos;t</span> walk
                </td>
                <td>
                  <span className="ov-em ov-red">Do</span> they walk?
                </td>
              </tr>
              <tr>
                <td className="ov-center" colSpan={5}>
                  <strong>Negative – Interrogative</strong>
                </td>
              </tr>
              <tr>
                <td className="ov-center" colSpan={5}>
                  <span className="ov-em ov-red">Don&apos;t</span> you walk?
                </td>
              </tr>
              <tr>
                <td className="ov-center" colSpan={5}>
                  <span className="ov-em ov-red">Doesn&apos;t</span> he walk?
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
