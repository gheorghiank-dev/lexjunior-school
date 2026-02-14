import React from "react";

/**
 * Present Continuous – canonical structure blocks
 *
 * Sprint OV1: for now we only expose the Affirmative structure block,
 * extracted from PcAffirmativeTheoryPage so that theory + overview
 * share the exact same markup and wording.
 */
export function PcAffirmativeStructureBlock() {
  return (
    <div className="lj-structure-box pc-structure-box">
      <h3 className="ps-structure-title">Structură generală</h3>

      <p className="ps-text">
        <span className="rule-highlight">
          Subiect + <span className="rule-highlight-emphasis">am / is / are</span> +
          verb
          <span className="rule-highlight-emphasis">-ing</span>
        </span>
      </p>

      <div className="ps-structure-grid">
        <div>
          <p className="ps-text ps-structure-note-heading">Forme ale lui to be</p>
          <ul className="ps-list">
            <li>
              <span className="rule-highlight-emphasis">I am</span> (I&apos;m)
            </li>
            <li>
              <span className="rule-highlight-emphasis">You are</span> (You&apos;re)
            </li>
            <li>
              <span className="rule-highlight-emphasis">He / She / It is</span>{" "}
              (He&apos;s / She&apos;s / It&apos;s)
            </li>
            <li>
              <span className="rule-highlight-emphasis">We are</span> (We&apos;re)
            </li>
            <li>
              <span className="rule-highlight-emphasis">You are</span> (You&apos;re)
            </li>
            <li>
              <span className="rule-highlight-emphasis">They are</span> (They&apos;re)
            </li>
          </ul>
        </div>

        <div>
          <p className="ps-text ps-structure-note-heading">Model complet</p>
          <ul className="ps-list">
            <li>
              I <strong>am working</strong>.
            </li>
            <li>
              You <strong>are reading</strong>.
            </li>
            <li>
              He / She / It <strong>is playing</strong>.
            </li>
            <li>
              We <strong>are studying</strong>.
            </li>
            <li>
              They <strong>are talking</strong>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export function PcNegativeStructureBlock() {
  return (
    <div className="lj-structure-box pc-structure-box">
      <h3 className="ps-structure-title">Forma negativă</h3>
      <p className="ps-text">
        <span className="rule-highlight">
          Subiect + <strong>am / is / are</strong> + <strong>not</strong> + verb-<strong>ing</strong>
        </span>
      </p>
      <ul className="ps-mini-list">
        <li>
          I <strong>am not</strong> working.
        </li>
        <li>
          He / She / It <strong>isn&apos;t</strong> watching TV.
        </li>
        <li>
          We / You / They <strong>aren&apos;t</strong> studying.
        </li>
      </ul>
    </div>
  );
}

export function PcInterrogativeStructureBlock() {
  return (
    <div className="lj-structure-box pc-structure-box">
      <h3 className="ps-structure-title">Forma interogativă</h3>
      <p className="ps-text">
        <span className="rule-highlight">
          <strong>Am / Is / Are</strong> + subiect + verb-<strong>ing</strong> + <strong>?</strong>
        </span>
      </p>
      <ul className="ps-mini-list">
        <li>
          <strong>Am</strong> I dreaming?
        </li>
        <li>
          <strong>Is</strong> she reading?
        </li>
        <li>
          <strong>Are</strong> they playing outside?
        </li>
      </ul>
    </div>
  );
}

export function PcUsesStructureBlock() {
  return (
    <div className="lj-structure-box pc-structure-box">
      <h3 className="ps-structure-title">Întrebuințări de bază</h3>
      <ul className="ps-mini-list">
        <li>acțiuni care se întâmplă chiar acum;</li>
        <li>acțiuni temporare în perioada de acum;</li>
        <li>schimbări și tendințe în desfășurare;</li>
        <li>planuri aranjate pentru viitorul apropiat.</li>
      </ul>
    </div>
  );
}

export function PcTimeExpressionsStructureBlock() {
  return (
    <div className="lj-structure-box pc-structure-box">
      <h3 className="ps-structure-title">Expresii de timp tipice</h3>
      <p className="ps-text">
        Expresii care apar foarte des cu <strong>Present Continuous</strong>:
      </p>
      <ul className="ps-mini-list">
        <li>
          <em>now</em>, <em>right now</em>, <em>at the moment</em>;
        </li>
        <li>
          <em>today</em>, <em>this morning</em>, <em>this week</em>,{" "}
          <em>this month</em>;
        </li>
        <li>
          <em>these days</em>, <em>at present</em>, <em>for a few days</em>.
        </li>
      </ul>
    </div>
  );
}
