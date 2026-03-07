// src/modules/be-going-to/pages/BeGoingToOverviewPage.jsx
import React from "react";
import StandardTenseOverviewPage from "../../tenses/ui/StandardTenseOverviewPage.jsx";
import { BE_GOING_TO_BASE_PATH } from "../be-paths.js";
import {
  BeGoingToAffirmativeStructureBlock,
  BeGoingToNegativeStructureBlock,
  BeGoingToInterrogativeStructureBlock,
  BeGoingToUsesStructureBlock,
  BeGoingToTimeExpressionsStructureBlock,
} from "../components/BeGoingToStructureBlocks.jsx";

/**
 * Be Going To – Overview
 *
 * Short recap + visual summary of the main structures.
 */
const cards = [
  {
    key: "affirmative",
    title: "Afirmativ",
    content: <BeGoingToAffirmativeStructureBlock />,
  },
  {
    key: "negative",
    title: "Negativ",
    content: <BeGoingToNegativeStructureBlock />,
  },
  {
    key: "interrogative",
    title: "Interogativ",
    content: <BeGoingToInterrogativeStructureBlock />,
  },
  {
    key: "uses",
    title: "Întrebuințări",
    content: <BeGoingToUsesStructureBlock />,
  },
  {
    key: "time-expressions",
    title: "Expresii de timp",
    content: <BeGoingToTimeExpressionsStructureBlock />,
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

export default function BeGoingToOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Be Going To – Prezentare generală"
      lead="Scurtă recapitulare + structura de bază pentru Be Going To."
      backLinkTo={BE_GOING_TO_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Be Going To"
      backLinkClassName="btn btn-soft past-back-link"
      cards={cards}
      tableTitle="Tabel – formele de bază (scaffold)"
      tableNote="Notă: acesta este un scaffold pentru Be Going To. Tabelul complet pentru toate persoanele va fi adăugat într-un sprint viitor."
      tableNode={tableNode}
    />
  );
}
