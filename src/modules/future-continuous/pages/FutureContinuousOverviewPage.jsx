import React from "react";
import StandardTenseOverviewPage from "../../tenses/ui/StandardTenseOverviewPage.jsx";
import { FUTURE_CONTINUOUS_BASE_PATH } from "../future-paths.js";
import {
  FutureContinuousAffirmativeStructureBlock,
  FutureContinuousInterrogativeStructureBlock,
  FutureContinuousNegativeStructureBlock,
  FutureContinuousTimeExpressionsStructureBlock,
  FutureContinuousUsesStructureBlock,
} from "../components/FutureContinuousStructureBlocks.jsx";

const cards = [
  {
    key: "affirmative",
    title: "Afirmativ",
    content: <FutureContinuousAffirmativeStructureBlock />,
  },
  {
    key: "negative",
    title: "Negativ",
    content: <FutureContinuousNegativeStructureBlock />,
  },
  {
    key: "interrogative",
    title: "Interogativ",
    content: <FutureContinuousInterrogativeStructureBlock />,
  },
  {
    key: "uses",
    title: "Întrebuințări",
    content: <FutureContinuousUsesStructureBlock />,
  },
  {
    key: "time-expressions",
    title: "Expresii de timp",
    content: <FutureContinuousTimeExpressionsStructureBlock />,
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
        <td>I <span className="ov-em ov-red">will be</span> walking</td>
        <td>I <span className="ov-em ov-red">will not be</span> walking</td>
        <td>I <span className="ov-em ov-red">won&apos;t be</span> walking</td>
        <td><span className="ov-em ov-red">Will</span> I be walking?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">will be</span> walking</td>
        <td>You <span className="ov-em ov-red">will not be</span> walking</td>
        <td>You <span className="ov-em ov-red">won&apos;t be</span> walking</td>
        <td><span className="ov-em ov-red">Will</span> you be walking?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>He <span className="ov-em ov-red">will be</span> walking</td>
        <td>He <span className="ov-em ov-red">will not be</span> walking</td>
        <td>He <span className="ov-em ov-red">won&apos;t be</span> walking</td>
        <td><span className="ov-em ov-red">Will</span> he be walking?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>She <span className="ov-em ov-red">will be</span> walking</td>
        <td>She <span className="ov-em ov-red">will not be</span> walking</td>
        <td>She <span className="ov-em ov-red">won&apos;t be</span> walking</td>
        <td><span className="ov-em ov-red">Will</span> she be walking?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>It <span className="ov-em ov-red">will be</span> walking</td>
        <td>It <span className="ov-em ov-red">will not be</span> walking</td>
        <td>It <span className="ov-em ov-red">won&apos;t be</span> walking</td>
        <td><span className="ov-em ov-red">Will</span> it be walking?</td>
      </tr>
      <tr>
        <td className="ov-center">Pl. I</td>
        <td>We <span className="ov-em ov-red">will be</span> walking</td>
        <td>We <span className="ov-em ov-red">will not be</span> walking</td>
        <td>We <span className="ov-em ov-red">won&apos;t be</span> walking</td>
        <td><span className="ov-em ov-red">Will</span> we be walking?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">will be</span> walking</td>
        <td>You <span className="ov-em ov-red">will not be</span> walking</td>
        <td>You <span className="ov-em ov-red">won&apos;t be</span> walking</td>
        <td><span className="ov-em ov-red">Will</span> you be walking?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>They <span className="ov-em ov-red">will be</span> walking</td>
        <td>They <span className="ov-em ov-red">will not be</span> walking</td>
        <td>They <span className="ov-em ov-red">won&apos;t be</span> walking</td>
        <td><span className="ov-em ov-red">Will</span> they be walking?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><strong>Negative – Interrogative</strong></td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Won&apos;t</span> I be walking?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Won&apos;t</span> he be walking?</td>
      </tr>
    </tbody>
    </table>
  </div>
);

export default function FutureContinuousOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Future Continuous – Prezentare generală"
      lead="Scurtă recapitulare + tabel complet al formelor."
      backLinkTo={FUTURE_CONTINUOUS_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Future Continuous"
      backLinkClassName="btn btn-soft past-back-link"
      cards={cards}
      tableTitle="Tabel – formele complete"
      tableNote="Notă: în roșu sunt evidențiate auxiliarul will / be și formele de negativ lungi și scurte."
      tableNode={tableNode}
    />
  );
}
