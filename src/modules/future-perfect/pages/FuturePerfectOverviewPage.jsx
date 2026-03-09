import React from "react";
import StandardTenseOverviewPage from "../../tenses/ui/StandardTenseOverviewPage.jsx";
import { FUTURE_PERFECT_BASE_PATH } from "../future-paths.js";
import {
  FuturePerfectAffirmativeStructureBlock,
  FuturePerfectInterrogativeStructureBlock,
  FuturePerfectNegativeStructureBlock,
  FuturePerfectTimeExpressionsStructureBlock,
  FuturePerfectUsesStructureBlock,
} from "../components/FuturePerfectStructureBlocks.jsx";

const cards = [
  {
    key: "affirmative",
    title: "Afirmativ",
    content: <FuturePerfectAffirmativeStructureBlock />,
  },
  {
    key: "negative",
    title: "Negativ",
    content: <FuturePerfectNegativeStructureBlock />,
  },
  {
    key: "interrogative",
    title: "Interogativ",
    content: <FuturePerfectInterrogativeStructureBlock />,
  },
  {
    key: "uses",
    title: "Întrebuințări",
    content: <FuturePerfectUsesStructureBlock />,
  },
  {
    key: "time-expressions",
    title: "Expresii de timp",
    content: <FuturePerfectTimeExpressionsStructureBlock />,
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
        <td>I <span className="ov-em ov-red">will have</span> walked</td>
        <td>I <span className="ov-em ov-red">will not have</span> walked</td>
        <td>I <span className="ov-em ov-red">won&apos;t have</span> walked</td>
        <td><span className="ov-em ov-red">Will</span> I have walked?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">will have</span> walked</td>
        <td>You <span className="ov-em ov-red">will not have</span> walked</td>
        <td>You <span className="ov-em ov-red">won&apos;t have</span> walked</td>
        <td><span className="ov-em ov-red">Will</span> you have walked?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>He <span className="ov-em ov-red">will have</span> walked</td>
        <td>He <span className="ov-em ov-red">will not have</span> walked</td>
        <td>He <span className="ov-em ov-red">won&apos;t have</span> walked</td>
        <td><span className="ov-em ov-red">Will</span> he have walked?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>She <span className="ov-em ov-red">will have</span> walked</td>
        <td>She <span className="ov-em ov-red">will not have</span> walked</td>
        <td>She <span className="ov-em ov-red">won&apos;t have</span> walked</td>
        <td><span className="ov-em ov-red">Will</span> she have walked?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>It <span className="ov-em ov-red">will have</span> walked</td>
        <td>It <span className="ov-em ov-red">will not have</span> walked</td>
        <td>It <span className="ov-em ov-red">won&apos;t have</span> walked</td>
        <td><span className="ov-em ov-red">Will</span> it have walked?</td>
      </tr>
      <tr>
        <td className="ov-center">Pl. I</td>
        <td>We <span className="ov-em ov-red">will have</span> walked</td>
        <td>We <span className="ov-em ov-red">will not have</span> walked</td>
        <td>We <span className="ov-em ov-red">won&apos;t have</span> walked</td>
        <td><span className="ov-em ov-red">Will</span> we have walked?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">will have</span> walked</td>
        <td>You <span className="ov-em ov-red">will not have</span> walked</td>
        <td>You <span className="ov-em ov-red">won&apos;t have</span> walked</td>
        <td><span className="ov-em ov-red">Will</span> you have walked?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>They <span className="ov-em ov-red">will have</span> walked</td>
        <td>They <span className="ov-em ov-red">will not have</span> walked</td>
        <td>They <span className="ov-em ov-red">won&apos;t have</span> walked</td>
        <td><span className="ov-em ov-red">Will</span> they have walked?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><strong>Negative – Interrogative</strong></td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Won&apos;t</span> I have walked?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Won&apos;t</span> he have walked?</td>
      </tr>
    </tbody>
    </table>
  </div>
);

export default function FuturePerfectOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Future Perfect – Prezentare generală"
      lead="Scurtă recapitulare + tabel complet al formelor."
      backLinkTo={FUTURE_PERFECT_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Future Perfect"
      backLinkClassName="btn btn-soft past-back-link"
      cards={cards}
      tableTitle="Tabel – formele complete"
      tableNote="Notă: în roșu sunt evidențiate auxiliarul will / have și formele de negativ lungi și scurte."
      tableNode={tableNode}
    />
  );
}
