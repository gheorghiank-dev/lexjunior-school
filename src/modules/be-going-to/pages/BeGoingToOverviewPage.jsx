import React from "react";
import StandardTenseOverviewPage from "../../tenses/ui/StandardTenseOverviewPage.jsx";
import { BE_GOING_TO_BASE_PATH } from "../be-paths.js";
import {
  BeGoingToAffirmativeStructureBlock,
  BeGoingToNegativeStructureBlock,
  BeGoingToInterrogativeStructureBlock,
  BeGoingToUsesStructureBlock,
  BeGoingToTimeExpressionsStructureBlock,
} from "../components/BeGoingToStructureBlocks.jsx";

const cards = [
  {
    key: "affirmative",
    title: "Afirmativ",
    content: <BeGoingToAffirmativeStructureBlock />,
  },
  {
    key: "negative",
    title: "Negativ",
    content: <BeGoingToNegativeStructureBlock />,
  },
  {
    key: "interrogative",
    title: "Interogativ",
    content: <BeGoingToInterrogativeStructureBlock />,
  },
  {
    key: "uses",
    title: "Întrebuințări",
    content: <BeGoingToUsesStructureBlock />,
  },
  {
    key: "time-expressions",
    title: "Expresii de timp",
    content: <BeGoingToTimeExpressionsStructureBlock />,
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
        <td>I <span className="ov-em ov-red">am going to</span> eat</td>
        <td>I <span className="ov-em ov-red">am not going to</span> eat</td>
        <td>I <span className="ov-em ov-red">&apos;m not going to</span> eat</td>
        <td><span className="ov-em ov-red">Am</span> I going to eat?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">are going to</span> eat</td>
        <td>You <span className="ov-em ov-red">are not going to</span> eat</td>
        <td>You <span className="ov-em ov-red">aren&apos;t going to</span> eat</td>
        <td><span className="ov-em ov-red">Are</span> you going to eat?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>He <span className="ov-em ov-red">is going to</span> eat</td>
        <td>He <span className="ov-em ov-red">is not going to</span> eat</td>
        <td>He <span className="ov-em ov-red">isn&apos;t going to</span> eat</td>
        <td><span className="ov-em ov-red">Is</span> he going to eat?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>She <span className="ov-em ov-red">is going to</span> eat</td>
        <td>She <span className="ov-em ov-red">is not going to</span> eat</td>
        <td>She <span className="ov-em ov-red">isn&apos;t going to</span> eat</td>
        <td><span className="ov-em ov-red">Is</span> she going to eat?</td>
      </tr>
      <tr>
        <td className="ov-center" />
        <td>It <span className="ov-em ov-red">is going to</span> eat</td>
        <td>It <span className="ov-em ov-red">is not going to</span> eat</td>
        <td>It <span className="ov-em ov-red">isn&apos;t going to</span> eat</td>
        <td><span className="ov-em ov-red">Is</span> it going to eat?</td>
      </tr>
      <tr>
        <td className="ov-center">Pl. I</td>
        <td>We <span className="ov-em ov-red">are going to</span> eat</td>
        <td>We <span className="ov-em ov-red">are not going to</span> eat</td>
        <td>We <span className="ov-em ov-red">aren&apos;t going to</span> eat</td>
        <td><span className="ov-em ov-red">Are</span> we going to eat?</td>
      </tr>
      <tr>
        <td className="ov-center">II</td>
        <td>You <span className="ov-em ov-red">are going to</span> eat</td>
        <td>You <span className="ov-em ov-red">are not going to</span> eat</td>
        <td>You <span className="ov-em ov-red">aren&apos;t going to</span> eat</td>
        <td><span className="ov-em ov-red">Are</span> you going to eat?</td>
      </tr>
      <tr>
        <td className="ov-center">III</td>
        <td>They <span className="ov-em ov-red">are going to</span> eat</td>
        <td>They <span className="ov-em ov-red">are not going to</span> eat</td>
        <td>They <span className="ov-em ov-red">aren&apos;t going to</span> eat</td>
        <td><span className="ov-em ov-red">Are</span> they going to eat?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><strong>Negative – Interrogative</strong></td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Aren&apos;t</span> you going to eat?</td>
      </tr>
      <tr>
        <td className="ov-center" colSpan={5}><span className="ov-em ov-red">Isn&apos;t</span> he going to eat?</td>
      </tr>
    </tbody>
    </table>
  </div>
);

export default function BeGoingToOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Be Going To – Prezentare generală"
      lead="Scurtă recapitulare + tabel complet al formelor."
      backLinkTo={BE_GOING_TO_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Be Going To"
      backLinkClassName="btn btn-soft past-back-link"
      cards={cards}
      tableTitle="Tabel – formele complete"
      tableNote="Notă: în roșu sunt evidențiate structurile de bază și formele negative lungi și scurte."
      tableNode={tableNode}
    />
  );
}
