// src/modules/past-perfect-continuous/pages/PastPerfectContinuousOverviewPage.jsx
import React from "react";
import StandardTenseOverviewPage from "../../tenses/ui/StandardTenseOverviewPage.jsx";
import { PAST_PERFECT_CONTINUOUS_BASE_PATH } from "../past-perfect-continuous-paths.js";
import {
  PastPerfectContinuousAffirmativeStructureBlock,
  PastPerfectContinuousNegativeStructureBlock,
  PastPerfectContinuousInterrogativeStructureBlock,
  PastPerfectContinuousUsesStructureBlock,
  PastPerfectContinuousTimeExpressionsStructureBlock,
} from "../components/PastPerfectContinuousStructureBlocks.jsx";

/**
 * Past Perfect Continuous – Overview
 *
 * Short recap + visual summary of the main structures.
 */
const cards = [
  {
    key: "affirmative",
    title: "Afirmativ",
    content: <PastPerfectContinuousAffirmativeStructureBlock />,
  },
  {
    key: "negative",
    title: "Negativ",
    content: <PastPerfectContinuousNegativeStructureBlock />,
  },
  {
    key: "interrogative",
    title: "Interogativ",
    content: <PastPerfectContinuousInterrogativeStructureBlock />,
  },
  {
    key: "uses",
    title: "Întrebuințări",
    content: <PastPerfectContinuousUsesStructureBlock />,
  },
  {
    key: "time-expressions",
    title: "Expresii de timp",
    content: <PastPerfectContinuousTimeExpressionsStructureBlock />,
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

export default function PastPerfectContinuousOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Past Perfect Continuous – Prezentare generală"
      lead="Scurtă recapitulare + structura de bază pentru Past Perfect Continuous."
      backLinkTo={PAST_PERFECT_CONTINUOUS_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Past Perfect Continuous"
      backLinkClassName="btn btn-soft past-back-link"
      cards={cards}
      tableTitle="Tabel – formele de bază (scaffold)"
      tableNote="Notă: acesta este un scaffold pentru Past Perfect Continuous. Tabelul complet pentru toate persoanele va fi adăugat într-un sprint viitor."
      tableNode={tableNode}
    />
  );
}
