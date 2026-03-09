from pathlib import Path
base = Path('/tmp/futureperfect/src/modules/future-perfect')

(base/'components'/'FuturePerfectStructureBlocks.jsx').write_text('''import React from "react";

export function FuturePerfectAffirmativeStructureBlock() {
  return (
    <div className="lj-structure-box">
      <h3 className="lj-structure-title">Affirmative – basic structure</h3>

      <p className="ps-text">
        <span className="rule-highlight">
          Subject + <strong>will</strong> + <strong>have</strong> + V3
        </span>
      </p>

      <p className="ps-text">
        <strong>V3</strong> = past participle. For <strong>regular verbs</strong>, this is usually
        <strong> V1 + -ed</strong>. For <strong>irregular verbs</strong>, we use the third form from the verb list.
      </p>

      <ul className="ps-mini-list">
        <li>I <strong>will have walked</strong>.</li>
        <li>She <strong>will have finished</strong> her homework by 6 o&apos;clock.</li>
        <li>They <strong>will have arrived</strong> before dinner.</li>
      </ul>
    </div>
  );
}

export function FuturePerfectNegativeStructureBlock() {
  return (
    <div className="lj-structure-box">
      <h3 className="lj-structure-title">Negative – basic structure</h3>

      <p className="ps-text">
        <span className="rule-highlight">
          Subject + <strong>will not</strong> (<strong>won&apos;t</strong>) + <strong>have</strong> + V3
        </span>
      </p>

      <ul className="ps-mini-list">
        <li>I <strong>will not have walked</strong>.</li>
        <li>He <strong>won&apos;t have finished</strong> the project by Monday.</li>
        <li>We <strong>won&apos;t have arrived</strong> by 8 p.m.</li>
      </ul>

      <p className="ps-text">
        The short negative form is <strong>won&apos;t</strong>. The main verb stays in the <strong>third form (V3)</strong>.
      </p>
    </div>
  );
}

export function FuturePerfectInterrogativeStructureBlock() {
  return (
    <div className="lj-structure-box">
      <h3 className="lj-structure-title">Interrogative – basic structure</h3>

      <p className="ps-text">
        <span className="rule-highlight">
          <strong>Will</strong> + subject + <strong>have</strong> + V3 + <strong>?</strong>
        </span>
      </p>

      <ul className="ps-mini-list">
        <li><strong>Will</strong> you <strong>have finished</strong> by tonight?</li>
        <li><strong>Will</strong> they <strong>have arrived</strong> before the meeting?</li>
      </ul>

      <p className="ps-text">Short answers:</p>
      <ul className="ps-mini-list">
        <li><strong>Yes</strong>, I / he / she / it / we / you / they <strong>will</strong>.</li>
        <li><strong>No</strong>, I / he / she / it / we / you / they <strong>won&apos;t</strong>.</li>
      </ul>
    </div>
  );
}

export function FuturePerfectUsesStructureBlock() {
  return (
    <div className="lj-structure-box">
      <h3 className="lj-structure-title">Typical uses of Future Perfect</h3>

      <ul className="ps-mini-list">
        <li>
          <span className="rule-highlight-emphasis">An action that will be completed before a specific moment in the future</span>:
          <br />They <strong>will have finished</strong> their project <strong>by next Friday</strong>.
        </li>
      </ul>
    </div>
  );
}

export function FuturePerfectTimeExpressionsStructureBlock() {
  return (
    <div className="lj-structure-box">
      <h3 className="lj-structure-title">Common time expressions</h3>

      <ul className="ps-mini-list">
        <li><em>by</em></li>
        <li><em>by the time</em></li>
        <li><em>before</em></li>
        <li><em>until</em></li>
      </ul>

      <p className="ps-text">
        These expressions usually show the <strong>deadline</strong> or the <strong>future point</strong> before which the action will be completed.
      </p>
    </div>
  );
}
''')

(base/'pages'/'FuturePerfectOverviewPage.jsx').write_text('''import React from "react";
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
''')

(base/'theory'/'FuturePerfectAffirmativeTheoryPage.jsx').write_text('''import React, { useEffect } from "react";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { FUTURE_PERFECT_BASE_PATH, futurePerfectMapPath, futurePerfectRoomPath, futurePerfectOverviewPath } from "../future-paths.js";
import TenseAffirmativeTheoryTemplate from "../../tenses/ui/TenseAffirmativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "affirmative";

export default function FuturePerfectAffirmativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseAffirmativeTheoryTemplate
      backTo={FUTURE_PERFECT_BASE_PATH}
      backLabel="← Înapoi la modulul Future Perfect"
      title="Future Perfect – Afirmativ"
      lead="Reguli, exemple și explicații pentru formarea Future Perfect la afirmativ."
      section1Intro={
        <>
          La afirmativ, Future Perfect se formează cu <strong>will + have + V3</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + will + have + V3</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I will have walked.</li>
              <li>She will have finished the report by 6 o&apos;clock.</li>
              <li>They will have arrived before dinner.</li>
            </ul>
          </div>
        </>
      }
      section2Title="Detalii importante"
      section2Intro={
        <>
          <strong>V3</strong> înseamnă participiul trecut: la verbele regulate este de obicei <strong>V1 + -ed</strong>, iar la verbele neregulate folosim forma a treia din listă.
        </>
      }
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Verbe regulate</h3>
            <ul className="ps-mini-list">
              <li><strong>walk → walked</strong></li>
              <li><strong>finish → finished</strong></li>
              <li><strong>play → played</strong></li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Verbe neregulate</h3>
            <ul className="ps-mini-list">
              <li><strong>go → gone</strong></li>
              <li><strong>see → seen</strong></li>
              <li><strong>write → written</strong></li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar frecvent greșeli legate de folosirea formei a doua în loc de <strong>V3</strong> sau de omiterea lui <strong>have</strong>.</>}
      mistakes={[
        { wrong: "She will finished by 5.", correct: "She will have finished by 5." },
        { wrong: "They will have went home.", correct: "They will have gone home." },
        { wrong: "I will have wrote the email.", correct: "I will have written the email." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: futurePerfectRoomPath(SECTION_ID, 1), label: "Camera 1 – Afirmativ" },
        { to: futurePerfectMapPath(), label: "Harta modulului" },
        { to: futurePerfectOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
''')

(base/'theory'/'FuturePerfectNegativeTheoryPage.jsx').write_text('''import React, { useEffect } from "react";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { FUTURE_PERFECT_BASE_PATH, futurePerfectMapPath, futurePerfectRoomPath, futurePerfectOverviewPath } from "../future-paths.js";
import TenseNegativeTheoryTemplate from "../../tenses/ui/TenseNegativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "negative";

export default function FuturePerfectNegativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseNegativeTheoryTemplate
      backTo={FUTURE_PERFECT_BASE_PATH}
      backLabel="← Înapoi la modulul Future Perfect"
      title="Future Perfect – Negativ"
      lead="Reguli, exemple și explicații pentru formarea Future Perfect la negativ."
      section1Intro={
        <>
          La negativ folosim <strong>will not + have + V3</strong>. Forma scurtă este <strong>won&apos;t</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + will + not + have + V3</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I will not have walked.</li>
              <li>He won&apos;t have finished the project by Monday.</li>
              <li>We won&apos;t have arrived by 8 p.m.</li>
            </ul>
          </div>
        </>
      }
      section2Intro={<>Trebuie să știi atât forma lungă, cât și forma scurtă.</>}
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Forme lungi</h3>
            <ul className="ps-mini-list">
              <li><strong>will not have</strong></li>
              <li>ex.: I <strong>will not have finished</strong>.</li>
              <li>verbul rămâne la <strong>V3</strong></li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Forme scurte și note</h3>
            <ul className="ps-mini-list">
              <li><strong>will not → won&apos;t</strong></li>
              <li>ex.: She <strong>won&apos;t have arrived</strong>.</li>
              <li>după <strong>have</strong> folosim tot <strong>V3</strong></li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar frecvent greșeli de contracție sau de folosire a formei greșite a verbului principal.</>}
      mistakes={[
        { wrong: "He won&apos;t finished by noon.", correct: "He won&apos;t have finished by noon." },
        { wrong: "They will not have went home.", correct: "They will not have gone home." },
        { wrong: "We won&apos;t have wrote the test.", correct: "We won&apos;t have written the test." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: futurePerfectRoomPath(SECTION_ID, 1), label: "Camera 1 – Negativ" },
        { to: futurePerfectMapPath(), label: "Harta modulului" },
        { to: futurePerfectOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
''')

(base/'theory'/'FuturePerfectInterrogativeTheoryPage.jsx').write_text('''import React, { useEffect } from "react";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { FUTURE_PERFECT_BASE_PATH, futurePerfectMapPath, futurePerfectRoomPath, futurePerfectOverviewPath } from "../future-paths.js";
import TenseInterrogativeTheoryTemplate from "../../tenses/ui/TenseInterrogativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "interrogative";

export default function FuturePerfectInterrogativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseInterrogativeTheoryTemplate
      backTo={FUTURE_PERFECT_BASE_PATH}
      backLabel="← Înapoi la modulul Future Perfect"
      title="Future Perfect – Interogativ"
      lead="Reguli, exemple și explicații pentru formarea Future Perfect la interogativ."
      section1Intro={
        <>
          La interogativ, <strong>will</strong> trece înaintea subiectului, apoi urmează <strong>have + V3</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">Will + S + have + V3?</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>Will you have finished by tonight?</li>
              <li>Will they have arrived before the meeting?</li>
              <li>Will she have written the email by then?</li>
            </ul>
          </div>
        </>
      }
      section2Intro={<>Răspunsurile scurte folosesc doar auxiliarul <strong>will</strong>.</>}
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Răspunsuri scurte</h3>
            <ul className="ps-mini-list">
              <li><strong>Yes</strong>, I / he / she / it / we / you / they <strong>will</strong>.</li>
              <li><strong>No</strong>, I / he / she / it / we / you / they <strong>won&apos;t</strong>.</li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Model util</h3>
            <ul className="ps-mini-list">
              <li>întrebarea completă păstrează <strong>have + V3</strong></li>
              <li>răspunsul scurt păstrează doar auxiliarul</li>
              <li>ex.: <strong>Will</strong> he <strong>have finished</strong>? — Yes, he <strong>will</strong>.</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar frecvent greșeli de ordine a cuvintelor sau de folosire a formei greșite după <strong>have</strong>.</>}
      mistakes={[
        { wrong: "Will she finished by 6?", correct: "Will she have finished by 6?" },
        { wrong: "You will have arrived by then?", correct: "Will you have arrived by then?" },
        { wrong: "Will they have went home?", correct: "Will they have gone home?" },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: futurePerfectRoomPath(SECTION_ID, 1), label: "Camera 1 – Interogativ" },
        { to: futurePerfectMapPath(), label: "Harta modulului" },
        { to: futurePerfectOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
''')

(base/'theory'/'FuturePerfectUsesTheoryPage.jsx').write_text('''import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import {
  futurePerfectMapPath,
  futurePerfectOverviewPath,
  futurePerfectRoomPath,
} from "../future-paths.js";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "uses";

export default function FuturePerfectUsesTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={futurePerfectMapPath()}
      backLabel="← Înapoi la harta Future Perfect"
      title="Future Perfect – Întrebuințări"
      lead="Aici vezi când folosim Future Perfect și ce situație exprimă cel mai frecvent."
      card1Title="Ideea generală"
      card1Intro={<>Future Perfect arată că o acțiune va fi terminată înainte de un anumit moment din viitor.</>}
      card1Content={
        <TenseStructureBox title="Ce transmite">
          <p className="ps-text">
            Folosim Future Perfect pentru a vorbi despre <strong>o acțiune care va fi încheiată până la un moment specificat din viitor</strong>.
          </p>
        </TenseStructureBox>
      }
      card2Title="Întrebuințarea principală"
      card2Intro={<>Aceasta este utilizarea esențială din materialul tău.</>}
      card2Content={
        <div className="example-box">
          <h3>Use de bază</h3>
          <ul className="ps-mini-list">
            <li>o acțiune care va fi complet terminată înainte de un termen sau punct viitor</li>
            <li>accentul cade pe <strong>rezultat / finalizare</strong>, nu pe desfășurare</li>
          </ul>
        </div>
      }
      card3Title="Exemplu-cheie"
      card3Intro={<>Exemplul acesta arată exact ideea de deadline viitor.</>}
      card3Content={
        <div className="rule-box">
          <ul className="ps-mini-list">
            <li>
              They <strong>will have finished</strong> their project <strong>by next Friday</strong>.
            </li>
          </ul>
        </div>
      }
      nextStepsDescription="Acum poți merge spre camerele de uses sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: futurePerfectRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: futurePerfectMapPath(), label: "Harta modulului" },
        { to: futurePerfectOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
''')

(base/'theory'/'FuturePerfectTimeExpressionsTheoryPage.jsx').write_text('''import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import {
  futurePerfectMapPath,
  futurePerfectOverviewPath,
  futurePerfectRoomPath,
} from "../future-paths.js";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "time-expressions";

export default function FuturePerfectTimeExpressionsTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={futurePerfectMapPath()}
      backLabel="← Înapoi la harta Future Perfect"
      title="Future Perfect – Expresii de timp"
      lead="Aici vezi expresiile de timp care apar cel mai des cu Future Perfect și cum te ajută ele să recunoști timpul."
      card1Title="Ideea generală"
      card1Intro={<>Future Perfect apare frecvent cu expresii care arată un termen-limită sau un punct clar din viitor.</>}
      card1Content={
        <TenseStructureBox title="Ce arată aceste expresii">
          <p className="ps-text">
            Aceste expresii indică <strong>momentul până la care</strong> o acțiune va fi deja terminată.
          </p>
        </TenseStructureBox>
      }
      card2Title="Expresii de timp frecvente"
      card2Intro={<>Acestea sunt expresiile din materialul tău.</>}
      card2Content={
        <div className="columns-2">
          <div className="example-box">
            <h3>Expresii de bază</h3>
            <ul className="ps-mini-list">
              <li><strong>by</strong></li>
              <li><strong>by the time</strong></li>
            </ul>
          </div>
          <div className="example-box">
            <h3>Alte expresii utile</h3>
            <ul className="ps-mini-list">
              <li><strong>before</strong></li>
              <li><strong>until</strong></li>
            </ul>
          </div>
        </div>
      }
      card3Title="Model util"
      card3Intro={<>Leagă expresia de timp de ideea de finalizare.</>}
      card3Content={
        <div className="rule-box">
          <ul className="ps-mini-list">
            <li><strong>By next Friday</strong>, they will have finished their project.</li>
            <li><strong>By the time</strong> you arrive, I will have cleaned the house.</li>
            <li>I will have done my homework <strong>before</strong> dinner.</li>
          </ul>
        </div>
      }
      nextStepsDescription="Acum poți merge spre camerele de time expressions sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: futurePerfectRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: futurePerfectMapPath(), label: "Harta modulului" },
        { to: futurePerfectOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
''')
