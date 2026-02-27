// src/modules/past-simple/pages/PastSimpleOverviewPage.jsx
import React from "react";
import StandardTenseOverviewPage from "../../tenses/ui/StandardTenseOverviewPage.jsx";
import { PAST_SIMPLE_BASE_PATH } from "../past-paths.js";
import {
  PastSimpleAffirmativeStructureBlock,
  PastSimpleNegativeStructureBlock,
  PastSimpleInterrogativeStructureBlock,
  PastSimpleUsesStructureBlock,
  PastSimpleTimeExpressionsStructureBlock,
} from "../components/PastSimpleStructureBlocks.jsx";

/**
 * Past Simple – Overview
 *
 * Short recap + visual summary of the main structures.
 */
const cards = [
  {
    key: "affirmative",
    title: "Afirmativ",
    content: <PastSimpleAffirmativeStructureBlock />,
  },
  {
    key: "negative",
    title: "Negativ",
    content: <PastSimpleNegativeStructureBlock />,
  },
  {
    key: "interrogative",
    title: "Interogativ",
    content: <PastSimpleInterrogativeStructureBlock />,
  },
  {
    key: "uses",
    title: "Întrebuințări",
    content: <PastSimpleUsesStructureBlock />,
  },
  {
    key: "time-expressions",
    title: "Expresii de timp",
    content: <PastSimpleTimeExpressionsStructureBlock />,
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

export default function PastSimpleOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Past Simple – Prezentare generală"
      lead="Scurtă recapitulare + structura de bază pentru Past Simple."
      backLinkTo={PAST_SIMPLE_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Past Simple"
      backLinkClassName="btn btn-soft past-back-link"
      cards={cards}
      tableTitle="Tabel – formele de bază (scaffold)"
      tableNote="Notă: acesta este un scaffold pentru Past Simple. Tabelul complet pentru toate persoanele va fi adăugat într-un sprint viitor."
      tableNode={tableNode}
    />
  );
}
