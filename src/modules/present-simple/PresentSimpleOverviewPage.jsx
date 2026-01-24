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
          <div className="card-title">Afirmativ</div>
          <p className="card-description">
            În Present Simple, la afirmativ, ordinea cuvintelor este întotdeauna{" "}
            <strong>Subiect + Verb</strong>. Pentru{" "}
            <strong>he / she / it</strong>, verbul primește de obicei{" "}
            <strong>-s</strong> sau <strong>-es</strong>.
          </p>

          <div className="ps-structure-box">
            <h3 className="ps-structure-title">Structură generală</h3>

            <p className="ps-text">
              <span className="rule-highlight">
                Subject + Verb (forma de bază)
              </span>
            </p>

            <p className="ps-text">
              <span className="rule-highlight">
                Subject + Verb +{" "}
                <span className="rule-highlight-emphasis">-s / -es</span>
              </span>{" "}
              <span className="ps-structure-note">
                (pentru <strong>he / she / it</strong>)
              </span>
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Semnalatori</div>
          <p className="card-description">
            always, usually, often, sometimes, never, every day, on Mondays, at
            night.
          </p>
        </div>
        <div className="card">
          <div className="card-title">Regula de aur</div>
          <p className="card-description">
            He/She/It + <strong>-s</strong> în afirmativ; la
            negativ/interogativ:
            <strong> does + verb bază</strong>.
          </p>
        </div>
        <div className="card">
          <div className="card-title">Greșeala clasică</div>
          <p className="card-description">
            NU punem <strong>-s</strong> după <strong>does/doesn&apos;t</strong>
            :<em> Does he walk?</em> / <em>He doesn&apos;t walk.</em>
          </p>
        </div>
      </section>

      <section className="card">
        <h2 className="card-title">Tabel – formele complete</h2>
        <p className="overview-note">
          Notă: cuvintele evidențiate în roșu sunt terminațiile de persoana a
          3-a singular, auxiliarele (do/does) și formele de negativ lungi și
          scurte.
        </p>

        <div className="overview-table-wrap" style={{ marginTop: "0.8rem" }}>
          <table className="overview-table">
            <thead>
              <tr>
                <th className="ov-center">Nr/Pers</th>
                <th>Afirmativ</th>
                <th className="ov-center" colSpan={2}>
                  Negativ
                </th>
                <th>Interogativ</th>
              </tr>
              <tr>
                <th />
                <th />
                <th>Forma lungă</th>
                <th>Forma scurtă</th>
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
                <td>
                  He walk<span className="ov-em ov-red">s</span>
                </td>
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
                <td>
                  She walk<span className="ov-em ov-red">s</span>
                </td>
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
                <td>
                  It walk<span className="ov-em ov-red">s</span>
                </td>
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
                  <strong>Negativ – Interogativ</strong>
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
