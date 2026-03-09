import React from "react";

export function PcAffirmativeStructureBlock() {
  return (
    <div className="lj-structure-box ps-structure-box">
      <h3 className="lj-structure-title">Structură generală</h3>
      <p className="ps-text">
        <span className="rule-highlight">
          Subiect + <span className="ov-red"><strong>am / are / is</strong></span> + verb
          <span className="ov-red"><strong>-ing</strong></span>
        </span>
      </p>
      <ul className="ps-list">
        <li>I <span className="ov-red"><strong>am</strong></span> talking.</li>
        <li>You <span className="ov-red"><strong>are</strong></span> talking.</li>
        <li>He / She / It <span className="ov-red"><strong>is</strong></span> talking.</li>
        <li>We / You / They <span className="ov-red"><strong>are</strong></span> talking.</li>
      </ul>
    </div>
  );
}

export function PcNegativeStructureBlock() {
  return (
    <div className="lj-structure-box ps-structure-box">
      <h3 className="lj-structure-title">Forma negativă</h3>
      <p className="ps-text">
        <span className="rule-highlight">
          Subiect + <span className="ov-red"><strong>am / are / is + not</strong></span> + verb
          <span className="ov-red"><strong>-ing</strong></span>
        </span>
      </p>
      <ul className="ps-mini-list">
        <li>I <span className="ov-red"><strong>am not</strong></span> talking.</li>
        <li>You / We / They <span className="ov-red"><strong>are not / aren&apos;t</strong></span> talking.</li>
        <li>He / She / It <span className="ov-red"><strong>is not / isn&apos;t</strong></span> talking.</li>
      </ul>
    </div>
  );
}

export function PcInterrogativeStructureBlock() {
  return (
    <div className="lj-structure-box ps-structure-box">
      <h3 className="lj-structure-title">Forma interogativă</h3>
      <p className="ps-text">
        <span className="rule-highlight">
          <span className="ov-red"><strong>Am / Are / Is</strong></span> + subiect + verb
          <span className="ov-red"><strong>-ing</strong></span>?
        </span>
      </p>
      <ul className="ps-mini-list">
        <li><span className="ov-red"><strong>Am</strong></span> I talking?</li>
        <li><span className="ov-red"><strong>Are</strong></span> you talking?</li>
        <li><span className="ov-red"><strong>Is</strong></span> he / she / it talking?</li>
      </ul>
    </div>
  );
}

export function PcUsesStructureBlock() {
  return (
    <div className="lj-structure-box ps-structure-box">
      <h3 className="lj-structure-title">Întrebuințări de bază</h3>
      <ul className="ps-mini-list">
        <li>acțiuni în desfășurare în momentul vorbirii;</li>
        <li>acțiuni temporare în jurul momentului vorbirii;</li>
        <li>acțiuni repetate care îl enervează pe vorbitor;</li>
        <li>aranjamente fixe în viitor;</li>
        <li>situații în schimbare sau dezvoltare.</li>
      </ul>
    </div>
  );
}

export function PcTimeExpressionsStructureBlock() {
  return (
    <div className="lj-structure-box ps-structure-box">
      <h3 className="lj-structure-title">Expresii de timp tipice</h3>
      <ul className="ps-mini-list">
        <li><em>now</em>, <em>at the moment</em>, <em>at present</em>;</li>
        <li><em>these days</em>, <em>nowadays</em>, <em>still</em>;</li>
        <li><em>tonight</em>.</li>
      </ul>
    </div>
  );
}
