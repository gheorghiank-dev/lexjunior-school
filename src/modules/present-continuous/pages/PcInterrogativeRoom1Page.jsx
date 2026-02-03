import React, { useMemo } from "react";
import { TenseRoomPageShell } from "../../tenses/ui/TenseRoomPageShell.jsx";
import TextInputExerciseList from "../../tenses/exercises/TextInputExerciseList.jsx";
import TenseExerciseActions from "../../tenses/ui/TenseExerciseActions.jsx";
import { useRoomEngine } from "../pc-core/useRoomEngine.js";
import { pcMapPath, pcTheoryPath } from "../pc-paths.js";

export default function PcInterrogativeRoom1Page() {
  const exercises = useMemo(
    () => [
      {
        id: "pc-interrogative-r1-ex1",
        prompt: "Scrie forma interogativă corectă a propoziției date.",
        correct: "todo",
      },
    ],
    []
  );

  const {
    answers,
    feedback,
    roomState,
    hudRootRef,
    handleChange,
    handlePracticeReset,
    handleVerify,
    startKeyAttempt,
    keyButtonVisible,
    practiceResetVisible,
  } = useRoomEngine({ sectionId: "interrogative", roomNumber: 1, exercises });

  const pageTitle = "Camera 1 – Present Continuous Interrogative";

  return (
    <TenseRoomPageShell
      pageTitle={pageTitle}
      roomLabel="Camera 1"
      sectionLabel="Interrogative"
      theoryRoute={pcTheoryPath("interrogative")}
      mapRoute={pcMapPath()}
      hudRootRef={hudRootRef}
      onRetryForKey={startKeyAttempt}
      keyButtonVisible={keyButtonVisible}
      practiceResetVisible={practiceResetVisible}
      onPracticeReset={handlePracticeReset}
      retryForKeyTestId="pc-retry-for-key-interrogative-1"
    >
      <section className="card">
        <h2 className="card-title">Scrie forma interogativă corectă</h2>
        <p className="card-text">Exercițiu placeholder – vom adăuga întrebări reale în Present Continuous.</p>

        <TextInputExerciseList
          exercises={exercises}
          answers={answers}
          feedback={feedback}
          onChange={handleChange}
          testIdPrefix="pc-interrogative-room1"
        />

        <TenseExerciseActions
          onVerify={handleVerify}
          passed={roomState.passed}
          verifyTestId="pc-interrogative-room1-verify"
        />
      </section>
    </TenseRoomPageShell>
  );
}
