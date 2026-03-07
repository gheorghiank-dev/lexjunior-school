// src/modules/present-perfect-continuous/pages/PresentPerfectContinuousOverviewPage.jsx
import React from "react";
import StandardTenseOverviewPage from "../../tenses/ui/StandardTenseOverviewPage.jsx";
import { PRESENT_PERFECT_CONTINUOUS_BASE_PATH } from "../present-paths.js";
import {
  PresentPerfectContinuousAffirmativeStructureBlock,
  PresentPerfectContinuousNegativeStructureBlock,
  PresentPerfectContinuousInterrogativeStructureBlock,
  PresentPerfectContinuousUsesStructureBlock,
  PresentPerfectContinuousTimeExpressionsStructureBlock,
} from "../components/PresentPerfectContinuousStructureBlocks.jsx";

/**
 * Present Perfect Continuous – Overview
 *
 * Short recap + visual summary of the main structures.
 */
const cards = [
  {
    key: "affirmative",
    title: "Afirmativ",
    content: <PresentPerfectContinuousAffirmativeStructureBlock />,
  },
  {
    key: "negative",
    title: "Negativ",
    content: <PresentPerfectContinuousNegativeStructureBlock />,
  },
  {
    key: "interrogative",
    title: "Interogativ",
    content: <PresentPerfectContinuousInterrogativeStructureBlock />,
  },
  {
    key: "uses",
    title: "Întrebuințări",
    content: <PresentPerfectContinuousUsesStructureBlock />,
  },
  {
    key: "time-expressions",
    title: "Expresii de timp",
    content: <PresentPerfectContinuousTimeExpressionsStructureBlock />,
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

export default function PresentPerfectContinuousOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Present Perfect Continuous – Prezentare generală"
      lead="Scurtă recapitulare + structura de bază pentru Present Perfect Continuous."
      backLinkTo={PRESENT_PERFECT_CONTINUOUS_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Present Perfect Continuous"
      backLinkClassName="btn btn-soft past-back-link"
      cards={cards}
      tableTitle="Tabel – formele de bază (scaffold)"
      tableNote="Notă: acesta este un scaffold pentru Present Perfect Continuous. Tabelul complet pentru toate persoanele va fi adăugat într-un sprint viitor."
      tableNode={tableNode}
    />
  );
}
