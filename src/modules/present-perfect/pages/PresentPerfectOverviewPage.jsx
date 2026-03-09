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
  <div className="lj-structure-box ps-structure-box">
    <table className="overview-table">
    <thead>
      <tr>
        <th className="ov-center">Nr/Pers</th>
        <th>Afirmativ</th>
        <th className="ov-center" colSpan={2}>Negativ</th>
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
        <td>I <span className="ov-em ov-red">have</span> walked</td>
        <td>I <span className="ov-em ov-red">have not</span> walked</td>
        <td>I <span className="ov-em ov-red">haven&apos;t</span> walked</td>
        <td><span className="ov-em ov-red">Have</span> I walked?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">have</span> walked</td>
        <td>You <span className="ov-em ov-red">have not</span> walked</td>
        <td>You <span className="ov-em ov-red">haven&apos;t</span> walked</td>
        <td><span className="ov-em ov-red">Have</span> you walked?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>He <span className="ov-em ov-red">has</span> walked</td>
        <td>He <span className="ov-em ov-red">has not</span> walked</td>
        <td>He <span className="ov-em ov-red">hasn&apos;t</span> walked</td>
        <td><span className="ov-em ov-red">Has</span> he walked?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>She <span className="ov-em ov-red">has</span> walked</td>
        <td>She <span className="ov-em ov-red">has not</span> walked</td>
        <td>She <span className="ov-em ov-red">hasn&apos;t</span> walked</td>
        <td><span className="ov-em ov-red">Has</span> she walked?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>It <span className="ov-em ov-red">has</span> walked</td>
        <td>It <span className="ov-em ov-red">has not</span> walked</td>
        <td>It <span className="ov-em ov-red">hasn&apos;t</span> walked</td>
        <td><span className="ov-em ov-red">Has</span> it walked?</td>
      </tr>
      <tr>
        <td className="ov-center">Pl. I</td>
        <td>We <span className="ov-em ov-red">have</span> walked</td>
        <td>We <span className="ov-em ov-red">have not</span> walked</td>
        <td>We <span className="ov-em ov-red">haven&apos;t</span> walked</td>
        <td><span className="ov-em ov-red">Have</span> we walked?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">have</span> walked</td>
        <td>You <span className="ov-em ov-red">have not</span> walked</td>
        <td>You <span className="ov-em ov-red">haven&apos;t</span> walked</td>
        <td><span className="ov-em ov-red">Have</span> you walked?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>They <span className="ov-em ov-red">have</span> walked</td>
        <td>They <span className="ov-em ov-red">have not</span> walked</td>
        <td>They <span className="ov-em ov-red">haven&apos;t</span> walked</td>
        <td><span className="ov-em ov-red">Have</span> they walked?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><strong>Negative – Interrogative</strong></td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Haven&apos;t</span> you walked?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Hasn&apos;t</span> he walked?</td>
      </tr>
    </tbody>
    </table>
  </div>
);

export default function PresentPerfectOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Present Perfect – Prezentare generală"
      lead="Scurtă recapitulare + tabel complet al formelor."
      backLinkTo={PRESENT_PERFECT_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Present Perfect"
      backLinkClassName="btn btn-soft past-back-link"
      cards={cards}
      tableTitle="Tabel – formele complete"
      tableNote="Notă: în roșu sunt evidențiate auxiliarele have / has și formele de negativ lungi și scurte."
      tableNode={tableNode}
    />
  );
}
