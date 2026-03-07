// src/modules/future-perfect-continuous/pages/FuturePerfectContinuousOverviewPage.jsx
import React from "react";
import StandardTenseOverviewPage from "../../tenses/ui/StandardTenseOverviewPage.jsx";
import { FUTURE_PERFECT_CONTINUOUS_BASE_PATH } from "../future-paths.js";
import {
  FuturePerfectContinuousAffirmativeStructureBlock,
  FuturePerfectContinuousNegativeStructureBlock,
  FuturePerfectContinuousInterrogativeStructureBlock,
  FuturePerfectContinuousUsesStructureBlock,
  FuturePerfectContinuousTimeExpressionsStructureBlock,
} from "../components/FuturePerfectContinuousStructureBlocks.jsx";

/**
 * Future Perfect Continuous – Overview
 *
 * Short recap + visual summary of the main structures.
 */
const cards = [
  {
    key: "affirmative",
    title: "Afirmativ",
    content: <FuturePerfectContinuousAffirmativeStructureBlock />,
  },
  {
    key: "negative",
    title: "Negativ",
    content: <FuturePerfectContinuousNegativeStructureBlock />,
  },
  {
    key: "interrogative",
    title: "Interogativ",
    content: <FuturePerfectContinuousInterrogativeStructureBlock />,
  },
  {
    key: "uses",
    title: "Întrebuințări",
    content: <FuturePerfectContinuousUsesStructureBlock />,
  },
  {
    key: "time-expressions",
    title: "Expresii de timp",
    content: <FuturePerfectContinuousTimeExpressionsStructureBlock />,
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

export default function FuturePerfectContinuousOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Future Perfect Continuous – Prezentare generală"
      lead="Scurtă recapitulare + structura de bază pentru Future Perfect Continuous."
      backLinkTo={FUTURE_PERFECT_CONTINUOUS_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Future Perfect Continuous"
      backLinkClassName="btn btn-soft past-back-link"
      cards={cards}
      tableTitle="Tabel – formele de bază (scaffold)"
      tableNote="Notă: acesta este un scaffold pentru Future Perfect Continuous. Tabelul complet pentru toate persoanele va fi adăugat într-un sprint viitor."
      tableNode={tableNode}
    />
  );
}
