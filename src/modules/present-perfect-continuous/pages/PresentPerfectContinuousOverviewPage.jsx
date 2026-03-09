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
        <td>I <span className="ov-em ov-red">have</span> been talking</td>
        <td>I <span className="ov-em ov-red">have not</span> been talking</td>
        <td>I <span className="ov-em ov-red">haven&apos;t</span> been talking</td>
        <td><span className="ov-em ov-red">Have</span> I been talking?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">have</span> been talking</td>
        <td>You <span className="ov-em ov-red">have not</span> been talking</td>
        <td>You <span className="ov-em ov-red">haven&apos;t</span> been talking</td>
        <td><span className="ov-em ov-red">Have</span> you been talking?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>He <span className="ov-em ov-red">has</span> been talking</td>
        <td>He <span className="ov-em ov-red">has not</span> been talking</td>
        <td>He <span className="ov-em ov-red">hasn&apos;t</span> been talking</td>
        <td><span className="ov-em ov-red">Has</span> he been talking?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>She <span className="ov-em ov-red">has</span> been talking</td>
        <td>She <span className="ov-em ov-red">has not</span> been talking</td>
        <td>She <span className="ov-em ov-red">hasn&apos;t</span> been talking</td>
        <td><span className="ov-em ov-red">Has</span> she been talking?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>It <span className="ov-em ov-red">has</span> been talking</td>
        <td>It <span className="ov-em ov-red">has not</span> been talking</td>
        <td>It <span className="ov-em ov-red">hasn&apos;t</span> been talking</td>
        <td><span className="ov-em ov-red">Has</span> it been talking?</td>
      </tr>
      <tr>
        <td className="ov-center">Pl. I</td>
        <td>We <span className="ov-em ov-red">have</span> been talking</td>
        <td>We <span className="ov-em ov-red">have not</span> been talking</td>
        <td>We <span className="ov-em ov-red">haven&apos;t</span> been talking</td>
        <td><span className="ov-em ov-red">Have</span> we been talking?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">have</span> been talking</td>
        <td>You <span className="ov-em ov-red">have not</span> been talking</td>
        <td>You <span className="ov-em ov-red">haven&apos;t</span> been talking</td>
        <td><span className="ov-em ov-red">Have</span> you been talking?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>They <span className="ov-em ov-red">have</span> been talking</td>
        <td>They <span className="ov-em ov-red">have not</span> been talking</td>
        <td>They <span className="ov-em ov-red">haven&apos;t</span> been talking</td>
        <td><span className="ov-em ov-red">Have</span> they been talking?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><strong>Negative – Interrogative</strong></td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Haven&apos;t</span> you been talking?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Hasn&apos;t</span> he been talking?</td>
      </tr>
    </tbody>
    </table>
  </div>
);

export default function PresentPerfectContinuousOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Present Perfect Continuous – Prezentare generală"
      lead="Scurtă recapitulare + tabel complet al formelor."
      backLinkTo={PRESENT_PERFECT_CONTINUOUS_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Present Perfect Continuous"
      backLinkClassName="btn btn-soft past-back-link"
      cards={cards}
      tableTitle="Tabel – formele complete"
      tableNote="Notă: în roșu sunt evidențiate auxiliarele have / has și formele de negativ lungi și scurte."
      tableNode={tableNode}
    />
  );
}
