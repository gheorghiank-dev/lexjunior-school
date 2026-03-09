import React from "react";
import StandardTenseOverviewPage from "../../tenses/ui/StandardTenseOverviewPage.jsx";
import { PAST_PERFECT_BASE_PATH } from "../past-perfect-paths.js";
import {
  PastPerfectAffirmativeStructureBlock,
  PastPerfectNegativeStructureBlock,
  PastPerfectInterrogativeStructureBlock,
  PastPerfectUsesStructureBlock,
  PastPerfectTimeExpressionsStructureBlock,
} from "../components/PastPerfectStructureBlocks.jsx";

const cards = [
  {
    key: "affirmative",
    title: "Afirmativ",
    content: <PastPerfectAffirmativeStructureBlock />,
  },
  {
    key: "negative",
    title: "Negativ",
    content: <PastPerfectNegativeStructureBlock />,
  },
  {
    key: "interrogative",
    title: "Interogativ",
    content: <PastPerfectInterrogativeStructureBlock />,
  },
  {
    key: "uses",
    title: "Întrebuințări",
    content: <PastPerfectUsesStructureBlock />,
  },
  {
    key: "time-expressions",
    title: "Expresii de timp",
    content: <PastPerfectTimeExpressionsStructureBlock />,
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
        <td>I <span className="ov-em ov-red">had</span> walked</td>
        <td>I <span className="ov-em ov-red">had not</span> walked</td>
        <td>I <span className="ov-em ov-red">hadn&apos;t</span> walked</td>
        <td><span className="ov-em ov-red">Had</span> I walked?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">had</span> walked</td>
        <td>You <span className="ov-em ov-red">had not</span> walked</td>
        <td>You <span className="ov-em ov-red">hadn&apos;t</span> walked</td>
        <td><span className="ov-em ov-red">Had</span> you walked?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>He <span className="ov-em ov-red">had</span> walked</td>
        <td>He <span className="ov-em ov-red">had not</span> walked</td>
        <td>He <span className="ov-em ov-red">hadn&apos;t</span> walked</td>
        <td><span className="ov-em ov-red">Had</span> he walked?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>She <span className="ov-em ov-red">had</span> walked</td>
        <td>She <span className="ov-em ov-red">had not</span> walked</td>
        <td>She <span className="ov-em ov-red">hadn&apos;t</span> walked</td>
        <td><span className="ov-em ov-red">Had</span> she walked?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>It <span className="ov-em ov-red">had</span> walked</td>
        <td>It <span className="ov-em ov-red">had not</span> walked</td>
        <td>It <span className="ov-em ov-red">hadn&apos;t</span> walked</td>
        <td><span className="ov-em ov-red">Had</span> it walked?</td>
      </tr>
      <tr>
        <td className="ov-center">Pl. I</td>
        <td>We <span className="ov-em ov-red">had</span> walked</td>
        <td>We <span className="ov-em ov-red">had not</span> walked</td>
        <td>We <span className="ov-em ov-red">hadn&apos;t</span> walked</td>
        <td><span className="ov-em ov-red">Had</span> we walked?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">had</span> walked</td>
        <td>You <span className="ov-em ov-red">had not</span> walked</td>
        <td>You <span className="ov-em ov-red">hadn&apos;t</span> walked</td>
        <td><span className="ov-em ov-red">Had</span> you walked?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>They <span className="ov-em ov-red">had</span> walked</td>
        <td>They <span className="ov-em ov-red">had not</span> walked</td>
        <td>They <span className="ov-em ov-red">hadn&apos;t</span> walked</td>
        <td><span className="ov-em ov-red">Had</span> they walked?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><strong>Negative – Interrogative</strong></td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Hadn&apos;t</span> you walked?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Hadn&apos;t</span> he walked?</td>
      </tr>
    </tbody>
    </table>
  </div>
);

export default function PastPerfectOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Past Perfect – Prezentare generală"
      lead="Scurtă recapitulare + tabel complet al formelor."
      backLinkTo={PAST_PERFECT_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Past Perfect"
      backLinkClassName="btn btn-soft past-back-link"
      cards={cards}
      tableTitle="Tabel – formele complete"
      tableNote="Notă: în roșu sunt evidențiate auxiliarul had și formele de negativ lungi și scurte."
      tableNode={tableNode}
    />
  );
}
