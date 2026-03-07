// src/modules/past-continuous/pages/PastContinuousOverviewPage.jsx
import React from "react";
import StandardTenseOverviewPage from "../../tenses/ui/StandardTenseOverviewPage.jsx";
import { PAST_CONTINUOUS_BASE_PATH } from "../past-continuous-paths.js";
import {
  PastContinuousAffirmativeStructureBlock,
  PastContinuousNegativeStructureBlock,
  PastContinuousInterrogativeStructureBlock,
  PastContinuousUsesStructureBlock,
  PastContinuousTimeExpressionsStructureBlock,
} from "../components/PastContinuousStructureBlocks.jsx";

const cards = [
  {
    key: "affirmative",
    title: "Afirmativ",
    content: <PastContinuousAffirmativeStructureBlock />,
  },
  {
    key: "negative",
    title: "Negativ",
    content: <PastContinuousNegativeStructureBlock />,
  },
  {
    key: "interrogative",
    title: "Interogativ",
    content: <PastContinuousInterrogativeStructureBlock />,
  },
  {
    key: "uses",
    title: "Întrebuințări",
    content: <PastContinuousUsesStructureBlock />,
  },
  {
    key: "time-expressions",
    title: "Expresii de timp",
    content: <PastContinuousTimeExpressionsStructureBlock />,
  },
];

const tableNode = (
  <table className="overview-table">
    <thead>
      <tr>
        <th className="ov-center">Nr./Pers</th>
        <th>Affirmative</th>
        <th>Negative (long form)</th>
        <th>Negative (short form)</th>
        <th>Interrogative</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="ov-center">Sg. I</td>
        <td>I <span className="ov-em">was talking</span></td>
        <td>I <span className="ov-em ov-red">was not talking</span></td>
        <td>I <span className="ov-em ov-red">wasn&apos;t talking</span></td>
        <td><span className="ov-em ov-red">Was</span> I talking?</td>
      </tr>
      <tr>
        <td className="ov-center">Sg. II</td>
        <td>You <span className="ov-em">were talking</span></td>
        <td>You <span className="ov-em ov-red">were not talking</span></td>
        <td>You <span className="ov-em ov-red">weren&apos;t talking</span></td>
        <td><span className="ov-em ov-red">Were</span> you talking?</td>
      </tr>
      <tr>
        <td className="ov-center">Sg. III he</td>
        <td>He <span className="ov-em">was talking</span></td>
        <td>He <span className="ov-em ov-red">was not talking</span></td>
        <td>He <span className="ov-em ov-red">wasn&apos;t talking</span></td>
        <td><span className="ov-em ov-red">Was</span> he talking?</td>
      </tr>
      <tr>
        <td className="ov-center">Sg. III she</td>
        <td>She <span className="ov-em">was talking</span></td>
        <td>She <span className="ov-em ov-red">was not talking</span></td>
        <td>She <span className="ov-em ov-red">wasn&apos;t talking</span></td>
        <td><span className="ov-em ov-red">Was</span> she talking?</td>
      </tr>
      <tr>
        <td className="ov-center">Sg. III it</td>
        <td>It <span className="ov-em">was talking</span></td>
        <td>It <span className="ov-em ov-red">was not talking</span></td>
        <td>It <span className="ov-em ov-red">wasn&apos;t talking</span></td>
        <td><span className="ov-em ov-red">Was</span> it talking?</td>
      </tr>
      <tr>
        <td className="ov-center">Pl. I</td>
        <td>We <span className="ov-em">were talking</span></td>
        <td>We <span className="ov-em ov-red">were not talking</span></td>
        <td>We <span className="ov-em ov-red">weren&apos;t talking</span></td>
        <td><span className="ov-em ov-red">Were</span> we talking?</td>
      </tr>
      <tr>
        <td className="ov-center">Pl. II</td>
        <td>You <span className="ov-em">were talking</span></td>
        <td>You <span className="ov-em ov-red">were not talking</span></td>
        <td>You <span className="ov-em ov-red">weren&apos;t talking</span></td>
        <td><span className="ov-em ov-red">Were</span> you talking?</td>
      </tr>
      <tr>
        <td className="ov-center">Pl. III</td>
        <td>They <span className="ov-em">were talking</span></td>
        <td>They <span className="ov-em ov-red">were not talking</span></td>
        <td>They <span className="ov-em ov-red">weren&apos;t talking</span></td>
        <td><span className="ov-em ov-red">Were</span> they talking?</td>
      </tr>
    </tbody>
  </table>
);

export default function PastContinuousOverviewPage() {
  return (
    <StandardTenseOverviewPage
      title="Past Continuous – Prezentare generală"
      lead="Recap rapid al structurii pentru afirmativ, negativ, interogativ, întrebuințări și expresii de timp."
      backLinkTo={PAST_CONTINUOUS_BASE_PATH}
      backLinkLabel="← Înapoi la modulul Past Continuous"
      backLinkClassName="btn btn-soft past-back-link"
      cards={cards}
      tableTitle="Tabel complet – toate persoanele"
      tableNote="În Past Continuous, folosim was la I / he / she / it și were la we / you / they."
      tableNode={tableNode}
    />
  );
}
