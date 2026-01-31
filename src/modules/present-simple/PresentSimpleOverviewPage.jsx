import React from "react";
import { Link } from "react-router-dom";
import { PS_BASE_PATH, psMapPath, psRoomPath } from "./ps-paths.js";
import "../../styles/overview.css";
import {
  PsAffirmativeStructureBlock,
  PsNegativeStructureBlock,
  PsInterrogativeStructureBlock,
  PsUsesStructureBlock,
  PsTimeExpressionsStructureBlock,
} from "./components/PsPresentSimpleStructureBlocks.jsx";

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
          <PsAffirmativeStructureBlock />
        </div>

        <div className="card">
          <div className="card-title">Negativ</div>
          <PsNegativeStructureBlock />
        </div>

        <div className="card">
          <div className="card-title">Interogativ</div>
          <PsInterrogativeStructureBlock />
        </div>

        <div className="card">
          <div className="card-title">Întrebuințări</div>
          <PsUsesStructureBlock />
        </div>

        <div className="card">
          <div className="card-title">Expresii de timp</div>
          <PsTimeExpressionsStructureBlock />
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
