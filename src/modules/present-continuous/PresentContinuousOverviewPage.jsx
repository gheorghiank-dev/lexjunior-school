import React from "react";
import StandardTenseOverviewPage from "../tenses/ui/StandardTenseOverviewPage.jsx";
import {
  PcAffirmativeStructureBlock,
  PcNegativeStructureBlock,
  PcInterrogativeStructureBlock,
  PcUsesStructureBlock,
  PcTimeExpressionsStructureBlock,
} from "./components/PcPresentContinuousStructureBlocks.jsx";
import { PC_BASE_PATH } from "./pc-paths.js";

/**
 * Present Continuous – Overview
 *
 * IMPORTANT: vizual-only (fără navigație pe hartă).
 */
export default function PresentContinuousOverviewPage() {
  const cards = [
    {
      key: "affirmative",
      title: "Afirmativ",
      content: <PcAffirmativeStructureBlock />,
    },
    {
      key: "negative",
      title: "Negativ",
      content: <PcNegativeStructureBlock />,
    },
    {
      key: "interrogative",
      title: "Interogativ",
      content: <PcInterrogativeStructureBlock />,
    },
    {
      key: "uses",
      title: "Întrebuințări",
      content: <PcUsesStructureBlock />,
    },
    {
      key: "time-expressions",
      title: "Expresii de timp",
      content: <PcTimeExpressionsStructureBlock />,
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
          <td className="ov-center">I</td>
          <td>
            I <span className="ov-em">am</span> working
          </td>
          <td>
            I <span className="ov-em ov-red">am not</span> working
          </td>
          <td>
            <span className="ov-em ov-red">Am</span> I working?
          </td>
        </tr>
        <tr>
          <td className="ov-center">He/She/It</td>
          <td>
            He <span className="ov-em">is</span> working
          </td>
          <td>
            He <span className="ov-em ov-red">isn&apos;t</span> working
          </td>
          <td>
            <span className="ov-em ov-red">Is</span> he working?
          </td>
        </tr>
        <tr>
          <td className="ov-center">We/You/They</td>
          <td>
            They <span className="ov-em">are</span> working
          </td>
          <td>
            They <span className="ov-em ov-red">aren&apos;t</span> working
          </td>
          <td>
            <span className="ov-em ov-red">Are</span> they working?
          </td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <StandardTenseOverviewPage
      title="Present Continuous – Overview"
      lead="Recap rapid + tabelul formelor. (Doar vizual – fără navigație.)"
      backLinkTo={PC_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Present Continuous"
      backLinkClassName="btn btn-soft pc-back-link"
      cards={cards}
      tableTitle="Tabel – formele de bază"
      tableNote="Notă: acesta este un scaffold (Sprint 3). Tabelul se va extinde odată cu modulele viitoare."
      tableNode={tableNode}
    />
  );
}
