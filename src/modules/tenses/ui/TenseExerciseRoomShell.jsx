import React from "react";
import { Link } from "react-router-dom";
import { TenseRoomTemplateV1 } from "./TenseRoomTemplateV1.jsx";
import TenseExerciseActions from "./TenseExerciseActions.jsx";
import { TenseRoomDevToolsAndStatus } from "./TenseRoomDevToolsAndStatus.jsx";
import TenseLexBubble from "./TenseLexBubble.jsx";
import { TenseMiniDictionaryCard } from "./TenseMiniDictionaryCard.jsx";

/**
 * TenseExerciseRoomShell
 *
 * Room skeleton that mirrors the Present Simple room layout:
 *  - header + HUD (via TenseRoomTemplateV1)
 *  - optional mini-dictionary card
 *  - main exercise card (title + intro + exercise component)
 *  - dev bar + "starea camerei" card (via TenseRoomDevToolsAndStatus)
 *  - Lex Junior bubble
 *
 * It is tense-agnostic and can be reused by any tense.
 */
export function TenseExerciseRoomShell({
  useRoomEngineHook,
  sectionId,
  sectionLabel,
  roomNumber,
  pageTitle,
  roomLabel,
  theoryRoute,
  mapRoute,
  retryForKeyTestId,
  exercises,
  testIdPrefix,
  cardTitle,
  cardIntro,
  renderExercises,
  dictionaryItems,
  dictionaryDescription = "Apasă pe butonul 🔊 pentru pronunție, apoi citește traducerea în română.",
  lexHints,
  lexAvatarSrc,
  lexTestIdPrefix,
  nextTo,
}) {
  const tenseLabel = pageTitle ? pageTitle.split("–")[0].trim() : "";
  return (
    <TenseRoomTemplateV1
      useRoomEngineHook={useRoomEngineHook}
      sectionId={sectionId}
      roomNumber={roomNumber}
      pageTitle={pageTitle}
      roomLabel={roomLabel}
      sectionLabel={sectionLabel}
      theoryRoute={theoryRoute}
      mapRoute={mapRoute}
      retryForKeyTestId={retryForKeyTestId}
      exercises={exercises}
      renderDevTools={({ roomState, handleDevAutofill, handleDevReset }) => (
        <TenseRoomDevToolsAndStatus
          roomState={roomState}
          onDevAutofill={handleDevAutofill}
          onDevReset={handleDevReset}
        />
      )}
      renderLex={() => (
        <TenseLexBubble
          avatarSrc={lexAvatarSrc}
          hints={lexHints}
          testIdPrefix={lexTestIdPrefix}
        />
      )}
    >
      {({ answers, feedback, roomState, handleChange, handleVerify }) => (
        <>
          {dictionaryItems && dictionaryItems.length > 0 && (
            <TenseMiniDictionaryCard
              description={dictionaryDescription}
              items={dictionaryItems}
            />
          )}

          <section className="card">
            <h2 className="card-title">{cardTitle}</h2>
            {cardIntro && <p className="card-text">{cardIntro}</p>}

            {renderExercises({
              exercises,
              answers,
              feedback,
              handleChange,
              testIdPrefix,
            })}

            <TenseExerciseActions
              onVerify={handleVerify}
              nextTo={nextTo}
              passed={roomState.passed}
              verifyTestId={testIdPrefix + "-verify"}
            />
          </section>

          {(!nextTo && roomState.passed) && (
            <section className="card section-complete-card">
              <h2 className="card-title">
                {tenseLabel
                  ? `Bravo! Ai terminat toate camerele din secțiunea ${sectionLabel} – ${tenseLabel}. 🎉`
                  : `Bravo! Ai terminat toate camerele din secțiunea ${sectionLabel}. 🎉`}
              </h2>
              <p className="card-description">
                {tenseLabel
                  ? `Ai parcurs toată ruta pentru secțiunea ${sectionLabel} la ${tenseLabel}. Mergi la hartă ca să vezi progresul cheilor și următorul pas.`
                  : `Ai parcurs toată ruta pentru această secțiune. Mergi la hartă ca să vezi progresul cheilor și următorul pas.`}
              </p>
              <div className="buttons">
                <Link to={mapRoute} className="btn btn-outline">
                  🏁 Înapoi la hartă
                </Link>
              </div>
            </section>
          )}
        </>
      )}
    </TenseRoomTemplateV1>
  );
}
