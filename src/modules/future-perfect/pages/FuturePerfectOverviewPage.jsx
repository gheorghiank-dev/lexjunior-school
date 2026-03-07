// src/modules/future-perfect/pages/FuturePerfectOverviewPage.jsx
import React from "react";
import StandardTenseOverviewPage from "../../tenses/ui/StandardTenseOverviewPage.jsx";
import { FUTURE_PERFECT_BASE_PATH } from "../future-paths.js";
import {
  FuturePerfectAffirmativeStructureBlock,
  FuturePerfectNegativeStructureBlock,
  FuturePerfectInterrogativeStructureBlock,
  FuturePerfectUsesStructureBlock,
  FuturePerfectTimeExpressionsStructureBlock,
} from "../components/FuturePerfectStructureBlocks.jsx";

/**
 * Future Perfect – Overview
 *
 * Short recap + visual summary of the main structures.
 */
const cards = [
  {
    key: "affirmative",
    title: "Afirmativ",
    content: <FuturePerfectAffirmativeStructureBlock />,
  },
  {
    key: "negative",
    title: "Negativ",
    content: <FuturePerfectNegativeStructureBlock />,
  },
  {
    key: "interrogative",
    title: "Interogativ",
    content: <FuturePerfectInterrogativeStructureBlock />,
  },
  {
    key: "uses",
    title: "Întrebuințări",
    content: <FuturePerfectUsesStructureBlock />,
  },
  {
    key: "time-expressions",
    title: "Expresii de timp",
    content: <FuturePerfectTimeExpressionsStructureBlock />,
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

export default function FuturePerfectOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Future Perfect – Prezentare generală"
      lead="Scurtă recapitulare + structura de bază pentru Future Perfect."
      backLinkTo={FUTURE_PERFECT_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Future Perfect"
      backLinkClassName="btn btn-soft past-back-link"
      cards={cards}
      tableTitle="Tabel – formele de bază (scaffold)"
      tableNote="Notă: acesta este un scaffold pentru Future Perfect. Tabelul complet pentru toate persoanele va fi adăugat într-un sprint viitor."
      tableNode={tableNode}
    />
  );
}
