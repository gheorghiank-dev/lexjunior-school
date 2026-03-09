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
  <div className="lj-structure-box ps-structure-box">
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
        <td>I walked</td>
        <td>I <span className="ov-em ov-red">did not</span> walk</td>
        <td>I <span className="ov-em ov-red">didn&apos;t</span> walk</td>
        <td><span className="ov-em ov-red">Did</span> I walk?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You walked</td>
        <td>You <span className="ov-em ov-red">did not</span> walk</td>
        <td>You <span className="ov-em ov-red">didn&apos;t</span> walk</td>
        <td><span className="ov-em ov-red">Did</span> you walk?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>He walked</td>
        <td>He <span className="ov-em ov-red">did not</span> walk</td>
        <td>He <span className="ov-em ov-red">didn&apos;t</span> walk</td>
        <td><span className="ov-em ov-red">Did</span> he walk?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>She walked</td>
        <td>She <span className="ov-em ov-red">did not</span> walk</td>
        <td>She <span className="ov-em ov-red">didn&apos;t</span> walk</td>
        <td><span className="ov-em ov-red">Did</span> she walk?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>It walked</td>
        <td>It <span className="ov-em ov-red">did not</span> walk</td>
        <td>It <span className="ov-em ov-red">didn&apos;t</span> walk</td>
        <td><span className="ov-em ov-red">Did</span> it walk?</td>
      </tr>
      <tr>
        <td className="ov-center">Pl. I</td>
        <td>We walked</td>
        <td>We <span className="ov-em ov-red">did not</span> walk</td>
        <td>We <span className="ov-em ov-red">didn&apos;t</span> walk</td>
        <td><span className="ov-em ov-red">Did</span> we walk?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You walked</td>
        <td>You <span className="ov-em ov-red">did not</span> walk</td>
        <td>You <span className="ov-em ov-red">didn&apos;t</span> walk</td>
        <td><span className="ov-em ov-red">Did</span> you walk?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>They walked</td>
        <td>They <span className="ov-em ov-red">did not</span> walk</td>
        <td>They <span className="ov-em ov-red">didn&apos;t</span> walk</td>
        <td><span className="ov-em ov-red">Did</span> they walk?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}>
          <strong>Negativ – Interogativ</strong>
        </td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}>
          <span className="ov-em ov-red">Didn&apos;t</span> you walk?
        </td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}>
          <span className="ov-em ov-red">Didn&apos;t</span> he walk?
        </td>
      </tr>
    </tbody>
    </table>
  </div>
);

export default function PastSimpleOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Past Simple – Prezentare generală"
      lead="Scurtă recapitulare + tabel complet al formelor pentru Past Simple."
      backLinkTo={PAST_SIMPLE_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Past Simple"
      backLinkClassName="btn btn-soft past-back-link"
      cards={cards}
      tableTitle="Tabel – formele complete"
      tableNote="Notă: cuvintele evidențiate în roșu sunt auxiliarele did, formele lungi și scurte de negativ și structura din negativ-interogativ."
      tableNode={tableNode}
    />
  );
}
