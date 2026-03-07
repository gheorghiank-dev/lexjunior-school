// src/modules/present-perfect/pages/PresentPerfectOverviewPage.jsx
import React from "react";
import StandardTenseOverviewPage from "../../tenses/ui/StandardTenseOverviewPage.jsx";
import { PRESENT_PERFECT_BASE_PATH } from "../present-paths.js";
import {
  PresentPerfectAffirmativeStructureBlock,
  PresentPerfectNegativeStructureBlock,
  PresentPerfectInterrogativeStructureBlock,
  PresentPerfectUsesStructureBlock,
  PresentPerfectTimeExpressionsStructureBlock,
} from "../components/PresentPerfectStructureBlocks.jsx";

/**
 * Present Perfect – Overview
 *
 * Short recap + visual summary of the main structures.
 */
const cards = [
  {
    key: "affirmative",
    title: "Afirmativ",
    content: <PresentPerfectAffirmativeStructureBlock />,
  },
  {
    key: "negative",
    title: "Negativ",
    content: <PresentPerfectNegativeStructureBlock />,
  },
  {
    key: "interrogative",
    title: "Interogativ",
    content: <PresentPerfectInterrogativeStructureBlock />,
  },
  {
    key: "uses",
    title: "Întrebuințări",
    content: <PresentPerfectUsesStructureBlock />,
  },
  {
    key: "time-expressions",
    title: "Expresii de timp",
    content: <PresentPerfectTimeExpressionsStructureBlock />,
  },
];

const tableNode = (
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
        <td className="ov-center">I/He/She/It</td>
        <td>
          I <span className="ov-em">walked</span>
        </td>
        <td>
          I <span className="ov-em ov-red">did not walk</span>
        </td>
        <td>
          <span className="ov-em ov-red">Did</span> I walk?
        </td>
      </tr>
      <tr>
        <td className="ov-center">We/You/They</td>
        <td>
          They <span className="ov-em">played</span>
        </td>
        <td>
          They <span className="ov-em ov-red">did not play</span>
        </td>
        <td>
          <span className="ov-em ov-red">Did</span> they play?
        </td>
      </tr>
    </tbody>
  </table>
);

export default function PresentPerfectOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Present Perfect – Prezentare generală"
      lead="Scurtă recapitulare + structura de bază pentru Present Perfect."
      backLinkTo={PRESENT_PERFECT_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Present Perfect"
      backLinkClassName="btn btn-soft past-back-link"
      cards={cards}
      tableTitle="Tabel – formele de bază (scaffold)"
      tableNote="Notă: acesta este un scaffold pentru Present Perfect. Tabelul complet pentru toate persoanele va fi adăugat într-un sprint viitor."
      tableNode={tableNode}
    />
  );
}
