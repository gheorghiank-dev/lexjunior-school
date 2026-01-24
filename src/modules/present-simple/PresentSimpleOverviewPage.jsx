import React from "react";
import { Link } from "react-router-dom";
import { PS_BASE_PATH, psMapPath, psRoomPath } from "./ps-paths.js";
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
        <p className="page-backlink-row">
          <Link to={PS_BASE_PATH} className="btn btn-soft ps-back-link">
            ← Înapoi la modulul Present Simple
          </Link>
        </p>

        <h1 className="page-title">Present Simple – Prezentare generală</h1>
        <p className="page-lead">
          Scurtă recapitulare + tabel complet al formelor.
        </p>
      </header>

      <section className="overview-grid" style={{ marginBottom: "1.25rem" }}>
        <div className="card">
          <div className="card-title">Afirmativ</div>
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
          <div className="card-title">Negativ</div>
          <div className="ps-structure-box">
            <h3 className="ps-structure-title">Structură generală</h3>

            <p className="ps-text">
              <span className="rule-highlight">
                Subject +{" "}
                <span className="rule-highlight-emphasis">
                  do not (don&apos;t)
                </span>{" "}
                + Verb (forma de bază)
              </span>
            </p>

            <p className="ps-text">
              <span className="rule-highlight">
                Subject +{" "}
                <span className="rule-highlight-emphasis">
                  does not (doesn&apos;t)
                </span>{" "}
                + Verb (forma de bază)
              </span>{" "}
              <span className="ps-structure-note">
                (pentru <strong>he / she / it</strong>)
              </span>
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Interogativ</div>
          <div className="ps-structure-box">
            <h3 className="ps-structure-title">
              Structură generală (Yes/No Questions)
            </h3>

            <p className="ps-text">
              <span className="rule-highlight">
                <span className="rule-highlight-emphasis">Do</span> + subiect +
                verb (forma de bază) + restul propoziției ?
              </span>
            </p>

            <p className="ps-text">
              <span className="rule-highlight">
                <span className="rule-highlight-emphasis">Does</span> + subiect
                + verb (forma de bază) + restul propoziției ?
              </span>
              <span className="ps-structure-note">
                (pentru <strong>he / she / it</strong>)
              </span>
            </p>
          </div>

          <div className="ps-structure-box">
            <h3 className="ps-structure-title">
              Structură generală (Wh-word Questions)
            </h3>

            <p className="ps-text">
              <span className="rule-highlight">
                <span className="rule-highlight-emphasis">
                  Wh-word + do / does
                </span>{" "}
                + subiect + verb (forma de bază) + restul propoziției ?
              </span>{" "}
              <span className="ps-structure-note">
                (Where, When, What, Why, How often... )
              </span>
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Întrebuințări</div>
          <div className="ps-structure-box">
            <h3 className="ps-structure-title">
              Folosim Present Simple pentru:
            </h3>
            <p className="ps-text">
              <span className="rule-highlight">1. Rutine și obiceiuri</span>
            </p>

            <p className="ps-text">
              <span className="rule-highlight">
                2. Adevăruri general valabile și legi ale naturii
              </span>
            </p>

            <p className="ps-text">
              <span className="rule-highlight">
                3. Programe fixe / orare (uneori cu valoare de viitor)
              </span>
            </p>

            <p className="ps-text">
              <span className="rule-highlight">
                4. Situații și stări permanente
              </span>
            </p>

            <p className="ps-text">
              <span className="rule-highlight">
                5. Instrucțiuni, rețete și direcții
              </span>
            </p>

            <p className="ps-text">
              <span className="rule-highlight">
                6. Comentarii sportive, transmisiuni live și indicații scenice
              </span>
            </p>

            <p className="ps-text">
              <span className="rule-highlight">7. Titluri de ziar</span>
            </p>

            <p className="ps-text">
              <span className="rule-highlight">
                8. Recenzii de filme / cărți / emisiuni
              </span>
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Expresii de timp</div>
          <div className="ps-structure-box">
            <p className="ps-text">
              <span className="rule-highlight">
                <span className="rule-highlight-emphasis">every</span> day /
                week / month / year/ weekend/ Wednesday
              </span>
            </p>

            <p className="ps-text">
              <span className="rule-highlight">
                <span className="rule-highlight-emphasis">in</span> the morning
                / afternoon / evening
              </span>
            </p>

            <p className="ps-text">
              <span className="rule-highlight">
                <span className="rule-highlight-emphasis">at</span> noon / night
              </span>
            </p>

            <p className="ps-text">
              <span className="rule-highlight">
                <span className="rule-highlight-emphasis">on</span> Monday
                <span className="rule-highlight-emphasis">s</span>
              </span>
            </p>

            <p className="ps-text">
              <span className="rule-highlight">
                Adverbe de frecvență :
                <span className="rule-highlight-emphasis">
                  {" "}
                  always, usually, often, sometimes, rarely/seldom,never
                </span>
              </span>
            </p>
          </div>
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
