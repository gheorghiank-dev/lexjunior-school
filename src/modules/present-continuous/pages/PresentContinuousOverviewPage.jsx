import React from "react";
import StandardTenseOverviewPage from "../../tenses/ui/StandardTenseOverviewPage.jsx";
import {
  PcAffirmativeStructureBlock,
  PcNegativeStructureBlock,
  PcInterrogativeStructureBlock,
  PcUsesStructureBlock,
  PcTimeExpressionsStructureBlock,
} from "../components/PcPresentContinuousStructureBlocks.jsx";
import { PC_BASE_PATH } from "../pc-paths.js";

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
        <td>I <span className="ov-em ov-red">am</span> talking</td>
        <td>I <span className="ov-em ov-red">am not</span> talking</td>
        <td>I <span className="ov-em ov-red">&apos;m not</span> talking</td>
        <td><span className="ov-em ov-red">Am</span> I talking?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">are</span> talking</td>
        <td>You <span className="ov-em ov-red">are not</span> talking</td>
        <td>You <span className="ov-em ov-red">aren&apos;t</span> talking</td>
        <td><span className="ov-em ov-red">Are</span> you talking?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>He <span className="ov-em ov-red">is</span> talking</td>
        <td>He <span className="ov-em ov-red">is not</span> talking</td>
        <td>He <span className="ov-em ov-red">isn&apos;t</span> talking</td>
        <td><span className="ov-em ov-red">Is</span> he talking?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>She <span className="ov-em ov-red">is</span> talking</td>
        <td>She <span className="ov-em ov-red">is not</span> talking</td>
        <td>She <span className="ov-em ov-red">isn&apos;t</span> talking</td>
        <td><span className="ov-em ov-red">Is</span> she talking?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>It <span className="ov-em ov-red">is</span> talking</td>
        <td>It <span className="ov-em ov-red">is not</span> talking</td>
        <td>It <span className="ov-em ov-red">isn&apos;t</span> talking</td>
        <td><span className="ov-em ov-red">Is</span> it talking?</td>
      </tr>
      <tr>
        <td className="ov-center">Pl. I</td>
        <td>We <span className="ov-em ov-red">are</span> talking</td>
        <td>We <span className="ov-em ov-red">are not</span> talking</td>
        <td>We <span className="ov-em ov-red">aren&apos;t</span> talking</td>
        <td><span className="ov-em ov-red">Are</span> we talking?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">are</span> talking</td>
        <td>You <span className="ov-em ov-red">are not</span> talking</td>
        <td>You <span className="ov-em ov-red">aren&apos;t</span> talking</td>
        <td><span className="ov-em ov-red">Are</span> you talking?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>They <span className="ov-em ov-red">are</span> talking</td>
        <td>They <span className="ov-em ov-red">are not</span> talking</td>
        <td>They <span className="ov-em ov-red">aren&apos;t</span> talking</td>
        <td><span className="ov-em ov-red">Are</span> they talking?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><strong>Negative – Interrogative</strong></td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Aren&apos;t</span> you talking?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Isn&apos;t</span> he talking?</td>
      </tr>
    </tbody>
    </table>
  </div>
);

export default function PresentContinuousOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Present Continuous – Prezentare generală"
      lead="Scurtă recapitulare + tabel complet al formelor pentru Present Continuous."
      backLinkTo={PC_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Present Continuous"
      backLinkClassName="btn btn-soft pc-back-link"
      cards={cards}
      tableTitle="Tabel – formele complete"
      tableNote="Notă: în roșu sunt evidențiate auxiliarele am / are / is și formele de negativ lungi și scurte."
      tableNode={tableNode}
    />
  );
}
