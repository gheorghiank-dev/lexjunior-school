import React from "react";
import StandardTenseOverviewPage from "../tenses/ui/StandardTenseOverviewPage.jsx";
import { PS_BASE_PATH } from "./ps-paths.js";
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
 * Recapitulare generală + tabel complet al formelor,
 * folosită ca referință vizuală pentru toate ramurile.
 */
export default function PresentSimpleOverviewPage() {
  const cards = [
    {
      key: "affirmative",
      title: "Afirmativ",
      content: <PsAffirmativeStructureBlock />,
    },
    {
      key: "negative",
      title: "Negativ",
      content: <PsNegativeStructureBlock />,
    },
    {
      key: "interrogative",
      title: "Interogativ",
      content: <PsInterrogativeStructureBlock />,
    },
    {
      key: "uses",
      title: "Întrebuințări",
      content: <PsUsesStructureBlock />,
    },
    {
      key: "time-expressions",
      title: "Expresii de timp",
      content: <PsTimeExpressionsStructureBlock />,
    },
  ];

  const tableNode = (
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
  );

  return (
    <StandardTenseOverviewPage
      title="Present Simple – Prezentare generală"
      lead="Scurtă recapitulare + tabel complet al formelor."
      backLinkTo={PS_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Present Simple"
      backLinkClassName="btn btn-soft ps-back-link"
      cards={cards}
      tableTitle="Tabel – formele complete"
      tableNote="Notă: cuvintele evidențiate în roșu sunt terminațiile de persoana a 3-a singular, auxiliarele (do/does) și formele de negativ lungi și scurte."
      tableNode={tableNode}
    />
  );
}
