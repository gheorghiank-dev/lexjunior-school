// src/modules/past-continuous/pages/PastContinuousOverviewPage.jsx
import React from "react";
import StandardTenseOverviewPage from "../../tenses/ui/StandardTenseOverviewPage.jsx";
import { PAST_CONTINUOUS_BASE_PATH } from "../past-continuous-paths.js";
import {
  PastContinuousAffirmativeStructureBlock,
  PastContinuousNegativeStructureBlock,
  PastContinuousInterrogativeStructureBlock,
  PastContinuousUsesStructureBlock,
  PastContinuousTimeExpressionsStructureBlock,
} from "../components/PastContinuousStructureBlocks.jsx";

/**
 * Past Continuous – Overview
 *
 * Short recap + visual summary of the main structures.
 */
const cards = [
  {
    key: "affirmative",
    title: "Afirmativ",
    content: <PastContinuousAffirmativeStructureBlock />,
  },
  {
    key: "negative",
    title: "Negativ",
    content: <PastContinuousNegativeStructureBlock />,
  },
  {
    key: "interrogative",
    title: "Interogativ",
    content: <PastContinuousInterrogativeStructureBlock />,
  },
  {
    key: "uses",
    title: "Întrebuințări",
    content: <PastContinuousUsesStructureBlock />,
  },
  {
    key: "time-expressions",
    title: "Expresii de timp",
    content: <PastContinuousTimeExpressionsStructureBlock />,
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

export default function PastContinuousOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Past Continuous – Prezentare generală"
      lead="Scurtă recapitulare + structura de bază pentru Past Continuous."
      backLinkTo={PAST_CONTINUOUS_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Past Continuous"
      backLinkClassName="btn btn-soft past-back-link"
      cards={cards}
      tableTitle="Tabel – formele de bază (scaffold)"
      tableNote="Notă: acesta este un scaffold pentru Past Continuous. Tabelul complet pentru toate persoanele va fi adăugat într-un sprint viitor."
      tableNode={tableNode}
    />
  );
}
