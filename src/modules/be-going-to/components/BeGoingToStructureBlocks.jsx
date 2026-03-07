import React from "react";

/**
 * Be Going To – canonical structure blocks
 *
 * These blocks are shared between the Be Going To overview and (optionally)
 * the theory pages, so that wording and layout stay perfectly in sync.
 */

export function BeGoingToAffirmativeStructureBlock() {
  return (
    <div className="lj-structure-box">
      <h3 className="lj-structure-title">Affirmative – basic structure</h3>

      <p className="ps-text">
        <span className="rule-highlight">
          Subject + <strong>past form</strong> of the verb
        </span>
      </p>

      <p className="ps-text">
        For <strong>regular verbs</strong>, we usually add{" "}
        <span className="rule-highlight-emphasis">-ed</span>:
      </p>

      <ul className="ps-mini-list">
        <li>
          I <strong>visited</strong> my grandparents yesterday.
        </li>
        <li>
          She <strong>watched</strong> a film last night.
        </li>
      </ul>

      <p className="ps-text">
        For <strong>irregular verbs</strong>, we use the{" "}
        <span className="rule-highlight-emphasis">2nd form (V2)</span>:
      </p>

      <ul className="ps-mini-list">
        <li>
          They <strong>went</strong> to the park on Sunday.{" "}
          <span className="ps-structure-note">(go → went)</span>
        </li>
        <li>
          He <strong>saw</strong> his friends at the concert.{" "}
          <span className="ps-structure-note">(see → saw)</span>
        </li>
      </ul>
    </div>
  );
}

export function BeGoingToNegativeStructureBlock() {
  return (
    <div className="lj-structure-box">
      <h3 className="lj-structure-title">Negative – basic structure</h3>

      <p className="ps-text">
        <span className="rule-highlight">
          Subject + <strong>did not</strong> (<strong>didn&apos;t</strong>) +
          verb (base form)
        </span>
      </p>

      <ul className="ps-mini-list">
        <li>
          I <strong>didn&apos;t play</strong> tennis yesterday.
        </li>
        <li>
          She <strong>didn&apos;t eat</strong> breakfast this morning.
        </li>
        <li>
          They <strong>didn&apos;t go</strong> to school on Friday.
        </li>
      </ul>

      <p className="ps-text">
        Notice that the main verb stays in the{" "}
        <span className="rule-highlight-emphasis">base form</span> after{" "}
        <strong>didn&apos;t</strong>.
      </p>
    </div>
  );
}

export function BeGoingToInterrogativeStructureBlock() {
  return (
    <div className="lj-structure-box">
      <h3 className="lj-structure-title">Interrogative – basic structure</h3>

      <p className="ps-text">
        <span className="rule-highlight">
          <strong>Did</strong> + subject + verb (base form) + <strong>?</strong>
        </span>
      </p>

      <ul className="ps-mini-list">
        <li>
          <strong>Did</strong> you <strong>finish</strong> your homework?
        </li>
        <li>
          <strong>Did</strong> they <strong>travel</strong> to London last year?
        </li>
      </ul>

      <p className="ps-text">
        For <strong>WH-questions</strong>, add the question word at the
        beginning:
      </p>

      <ul className="ps-mini-list">
        <li>
          <strong>When did</strong> you <strong>arrive</strong>?
        </li>
        <li>
          <strong>Where did</strong> she <strong>grow up</strong>?
        </li>
      </ul>
    </div>
  );
}

export function BeGoingToUsesStructureBlock() {
  return (
    <div className="lj-structure-box">
      <h3 className="lj-structure-title">Typical uses of Be Going To</h3>

      <ul className="ps-mini-list">
        <li>
          <span className="rule-highlight-emphasis">
            Completed actions in the past
          </span>{" "}
          with a finished time:
          <br />I <strong>visited</strong> London in 2019.
        </li>
        <li>
          <span className="rule-highlight-emphasis">
            Actions in a story, in chronological order
          </span>
          :
          <br />
          He <strong>woke up</strong>, <strong>got dressed</strong> and{" "}
          <strong>left</strong> the house.
        </li>
        <li>
          <span className="rule-highlight-emphasis">
            Past habits and routines
          </span>{" "}
          (often with adverbs of frequency):
          <br />
          We <strong>often played</strong> football after school.
        </li>
        <li>
          <span className="rule-highlight-emphasis">
            Past states or facts that are no longer true
          </span>
          :
          <br />
          She <strong>lived</strong> in Spain when she was a child.
        </li>
      </ul>
    </div>
  );
}

export function BeGoingToTimeExpressionsStructureBlock() {
  return (
    <div className="lj-structure-box">
      <h3 className="lj-structure-title">Common time expressions</h3>

      <p className="ps-text">
        These expressions are very common with <strong>Be Going To</strong>{" "}
        because they show a finished time in the past:
      </p>

      <ul className="ps-mini-list">
        <li>
          <em>yesterday</em>, <em>the day before yesterday</em>
        </li>
        <li>
          <em>last night</em>, <em>last week</em>, <em>last month</em>,{" "}
          <em>last year</em>
        </li>
        <li>
          <em>two days ago</em>, <em>a week ago</em>, <em>a long time ago</em>
        </li>
        <li>
          <em>in 2010</em>, <em>in the 1990s</em>, <em>when I was a child</em>
        </li>
      </ul>
    </div>
  );
}
