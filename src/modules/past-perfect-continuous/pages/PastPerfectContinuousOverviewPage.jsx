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
        <td>I <span className="ov-em ov-red">had</span> been talking</td>
        <td>I <span className="ov-em ov-red">had not</span> been talking</td>
        <td>I <span className="ov-em ov-red">hadn&apos;t</span> been talking</td>
        <td><span className="ov-em ov-red">Had</span> I been talking?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">had</span> been talking</td>
        <td>You <span className="ov-em ov-red">had not</span> been talking</td>
        <td>You <span className="ov-em ov-red">hadn&apos;t</span> been talking</td>
        <td><span className="ov-em ov-red">Had</span> you been talking?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>He <span className="ov-em ov-red">had</span> been talking</td>
        <td>He <span className="ov-em ov-red">had not</span> been talking</td>
        <td>He <span className="ov-em ov-red">hadn&apos;t</span> been talking</td>
        <td><span className="ov-em ov-red">Had</span> he been talking?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>She <span className="ov-em ov-red">had</span> been talking</td>
        <td>She <span className="ov-em ov-red">had not</span> been talking</td>
        <td>She <span className="ov-em ov-red">hadn&apos;t</span> been talking</td>
        <td><span className="ov-em ov-red">Had</span> she been talking?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>It <span className="ov-em ov-red">had</span> been talking</td>
        <td>It <span className="ov-em ov-red">had not</span> been talking</td>
        <td>It <span className="ov-em ov-red">hadn&apos;t</span> been talking</td>
        <td><span className="ov-em ov-red">Had</span> it been talking?</td>
      </tr>
      <tr>
        <td className="ov-center">Pl. I</td>
        <td>We <span className="ov-em ov-red">had</span> been talking</td>
        <td>We <span className="ov-em ov-red">had not</span> been talking</td>
        <td>We <span className="ov-em ov-red">hadn&apos;t</span> been talking</td>
        <td><span className="ov-em ov-red">Had</span> we been talking?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">had</span> been talking</td>
        <td>You <span className="ov-em ov-red">had not</span> been talking</td>
        <td>You <span className="ov-em ov-red">hadn&apos;t</span> been talking</td>
        <td><span className="ov-em ov-red">Had</span> you been talking?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>They <span className="ov-em ov-red">had</span> been talking</td>
        <td>They <span className="ov-em ov-red">had not</span> been talking</td>
        <td>They <span className="ov-em ov-red">hadn&apos;t</span> been talking</td>
        <td><span className="ov-em ov-red">Had</span> they been talking?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><strong>Negative – Interrogative</strong></td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Hadn&apos;t</span> you been talking?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Hadn&apos;t</span> he been talking?</td>
      </tr>
    </tbody>
    </table>
  </div>
);

export default function PastPerfectContinuousOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Past Perfect Continuous – Prezentare generală"
      lead="Scurtă recapitulare + tabel complet al formelor."
      backLinkTo={PAST_PERFECT_CONTINUOUS_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Past Perfect Continuous"
      backLinkClassName="btn btn-soft past-back-link"
      cards={cards}
      tableTitle="Tabel – formele complete"
      tableNote="Notă: în roșu sunt evidențiate auxiliarul had și formele de negativ lungi și scurte."
      tableNode={tableNode}
    />
  );
}
