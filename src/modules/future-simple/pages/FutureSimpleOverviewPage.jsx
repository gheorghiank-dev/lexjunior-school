import React from "react";
import StandardTenseOverviewPage from "../../tenses/ui/StandardTenseOverviewPage.jsx";
import { FUTURE_SIMPLE_BASE_PATH } from "../future-paths.js";
import {
  FutureSimpleAffirmativeStructureBlock,
  FutureSimpleNegativeStructureBlock,
  FutureSimpleInterrogativeStructureBlock,
  FutureSimpleUsesStructureBlock,
  FutureSimpleTimeExpressionsStructureBlock,
} from "../components/FutureSimpleStructureBlocks.jsx";

const cards = [
  {
    key: "affirmative",
    title: "Afirmativ",
    content: <FutureSimpleAffirmativeStructureBlock />,
  },
  {
    key: "negative",
    title: "Negativ",
    content: <FutureSimpleNegativeStructureBlock />,
  },
  {
    key: "interrogative",
    title: "Interogativ",
    content: <FutureSimpleInterrogativeStructureBlock />,
  },
  {
    key: "uses",
    title: "Întrebuințări",
    content: <FutureSimpleUsesStructureBlock />,
  },
  {
    key: "time-expressions",
    title: "Expresii de timp",
    content: <FutureSimpleTimeExpressionsStructureBlock />,
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
        <td>I <span className="ov-em ov-red">will</span> walk</td>
        <td>I <span className="ov-em ov-red">will not</span> walk</td>
        <td>I <span className="ov-em ov-red">won&apos;t</span> walk</td>
        <td><span className="ov-em ov-red">Will</span> I walk?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">will</span> walk</td>
        <td>You <span className="ov-em ov-red">will not</span> walk</td>
        <td>You <span className="ov-em ov-red">won&apos;t</span> walk</td>
        <td><span className="ov-em ov-red">Will</span> you walk?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>He <span className="ov-em ov-red">will</span> walk</td>
        <td>He <span className="ov-em ov-red">will not</span> walk</td>
        <td>He <span className="ov-em ov-red">won&apos;t</span> walk</td>
        <td><span className="ov-em ov-red">Will</span> he walk?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>She <span className="ov-em ov-red">will</span> walk</td>
        <td>She <span className="ov-em ov-red">will not</span> walk</td>
        <td>She <span className="ov-em ov-red">won&apos;t</span> walk</td>
        <td><span className="ov-em ov-red">Will</span> she walk?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>It <span className="ov-em ov-red">will</span> walk</td>
        <td>It <span className="ov-em ov-red">will not</span> walk</td>
        <td>It <span className="ov-em ov-red">won&apos;t</span> walk</td>
        <td><span className="ov-em ov-red">Will</span> it walk?</td>
      </tr>
      <tr>
        <td className="ov-center">Pl. I</td>
        <td>We <span className="ov-em ov-red">will</span> walk</td>
        <td>We <span className="ov-em ov-red">will not</span> walk</td>
        <td>We <span className="ov-em ov-red">won&apos;t</span> walk</td>
        <td><span className="ov-em ov-red">Will</span> we walk?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">will</span> walk</td>
        <td>You <span className="ov-em ov-red">will not</span> walk</td>
        <td>You <span className="ov-em ov-red">won&apos;t</span> walk</td>
        <td><span className="ov-em ov-red">Will</span> you walk?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>They <span className="ov-em ov-red">will</span> walk</td>
        <td>They <span className="ov-em ov-red">will not</span> walk</td>
        <td>They <span className="ov-em ov-red">won&apos;t</span> walk</td>
        <td><span className="ov-em ov-red">Will</span> they walk?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><strong>Negative – Interrogative</strong></td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Won&apos;t</span> I walk?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Won&apos;t</span> he walk?</td>
      </tr>
    </tbody>
    </table>
  </div>
);

export default function FutureSimpleOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Future Simple – Prezentare generală"
      lead="Scurtă recapitulare + tabel complet al formelor."
      backLinkTo={FUTURE_SIMPLE_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Future Simple"
      backLinkClassName="btn btn-soft past-back-link"
      cards={cards}
      tableTitle="Tabel – formele complete"
      tableNote="Notă: în roșu sunt evidențiate auxiliarul will și formele negative lungi și scurte."
      tableNode={tableNode}
    />
  );
}
