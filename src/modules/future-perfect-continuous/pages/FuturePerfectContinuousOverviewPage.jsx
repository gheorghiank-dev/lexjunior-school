import React from "react";
import StandardTenseOverviewPage from "../../tenses/ui/StandardTenseOverviewPage.jsx";
import { FUTURE_PERFECT_CONTINUOUS_BASE_PATH } from "../future-paths.js";
import {
  FuturePerfectContinuousAffirmativeStructureBlock,
  FuturePerfectContinuousInterrogativeStructureBlock,
  FuturePerfectContinuousNegativeStructureBlock,
  FuturePerfectContinuousTimeExpressionsStructureBlock,
  FuturePerfectContinuousUsesStructureBlock,
} from "../components/FuturePerfectContinuousStructureBlocks.jsx";

const cards = [
  {
    key: "affirmative",
    title: "Afirmativ",
    content: <FuturePerfectContinuousAffirmativeStructureBlock />,
  },
  {
    key: "negative",
    title: "Negativ",
    content: <FuturePerfectContinuousNegativeStructureBlock />,
  },
  {
    key: "interrogative",
    title: "Interogativ",
    content: <FuturePerfectContinuousInterrogativeStructureBlock />,
  },
  {
    key: "uses",
    title: "Întrebuințări",
    content: <FuturePerfectContinuousUsesStructureBlock />,
  },
  {
    key: "time-expressions",
    title: "Expresii de timp",
    content: <FuturePerfectContinuousTimeExpressionsStructureBlock />,
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
        <td>I <span className="ov-em ov-red">will have been</span> talking</td>
        <td>I <span className="ov-em ov-red">will not have been</span> talking</td>
        <td>I <span className="ov-em ov-red">won&apos;t have been</span> talking</td>
        <td><span className="ov-em ov-red">Will</span> I have been talking?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">will have been</span> talking</td>
        <td>You <span className="ov-em ov-red">will not have been</span> talking</td>
        <td>You <span className="ov-em ov-red">won&apos;t have been</span> talking</td>
        <td><span className="ov-em ov-red">Will</span> you have been talking?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>He <span className="ov-em ov-red">will have been</span> talking</td>
        <td>He <span className="ov-em ov-red">will not have been</span> talking</td>
        <td>He <span className="ov-em ov-red">won&apos;t have been</span> talking</td>
        <td><span className="ov-em ov-red">Will</span> he have been talking?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>She <span className="ov-em ov-red">will have been</span> talking</td>
        <td>She <span className="ov-em ov-red">will not have been</span> talking</td>
        <td>She <span className="ov-em ov-red">won&apos;t have been</span> talking</td>
        <td><span className="ov-em ov-red">Will</span> she have been talking?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>It <span className="ov-em ov-red">will have been</span> talking</td>
        <td>It <span className="ov-em ov-red">will not have been</span> talking</td>
        <td>It <span className="ov-em ov-red">won&apos;t have been</span> talking</td>
        <td><span className="ov-em ov-red">Will</span> it have been talking?</td>
      </tr>
      <tr>
        <td className="ov-center">Pl. I</td>
        <td>We <span className="ov-em ov-red">will have been</span> talking</td>
        <td>We <span className="ov-em ov-red">will not have been</span> talking</td>
        <td>We <span className="ov-em ov-red">won&apos;t have been</span> talking</td>
        <td><span className="ov-em ov-red">Will</span> we have been talking?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">will have been</span> talking</td>
        <td>You <span className="ov-em ov-red">will not have been</span> talking</td>
        <td>You <span className="ov-em ov-red">won&apos;t have been</span> talking</td>
        <td><span className="ov-em ov-red">Will</span> you have been talking?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>They <span className="ov-em ov-red">will have been</span> talking</td>
        <td>They <span className="ov-em ov-red">will not have been</span> talking</td>
        <td>They <span className="ov-em ov-red">won&apos;t have been</span> talking</td>
        <td><span className="ov-em ov-red">Will</span> they have been talking?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><strong>Negative – Interrogative</strong></td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Won&apos;t</span> I have been talking?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Won&apos;t</span> he have been talking?</td>
      </tr>
    </tbody>
    </table>
  </div>
);

export default function FuturePerfectContinuousOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Future Perfect Continuous – Prezentare generală"
      lead="Scurtă recapitulare + tabel complet al formelor."
      backLinkTo={FUTURE_PERFECT_CONTINUOUS_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Future Perfect Continuous"
      backLinkClassName="btn btn-soft past-back-link"
      cards={cards}
      tableTitle="Tabel – formele complete"
      tableNote="Notă: în roșu sunt evidențiate auxiliarul will / have been și formele de negativ lungi și scurte."
      tableNode={tableNode}
    />
  );
}
