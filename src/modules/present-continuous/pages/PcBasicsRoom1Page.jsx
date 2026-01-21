import React, { useMemo } from "react";
import { TenseRoomPageShell } from "../../tenses/ui/TenseRoomPageShell.jsx";
import TextInputExerciseList from "../../tenses/exercises/TextInputExerciseList.jsx";
import TenseExerciseActions from "../../tenses/ui/TenseExerciseActions.jsx";
import { useRoomEngine } from "../pc-core/useRoomEngine.js";

export default function PcBasicsRoom1Page() {
  const exercises = useMemo(
    () => [
      {
        id: "pc-r1-ex1",
        prompt: "Completează: I ____ (read) a book now.",
        correct: "am reading",
      },
      {
        id: "pc-r1-ex2",
        prompt: "Completează: She ____ (play) football.",
        correct: "is playing",
      },
      {
        id: "pc-r1-ex3",
        prompt: "Completează: We ____ (study) English.",
        correct: "are studying",
      },
      {
        id: "pc-r1-ex4",
        prompt: "Completează: They ____ (watch) TV.",
        correct: "are watching",
      },
      {
        id: "pc-r1-ex5",
        prompt: "Completează: He ____ (sleep) right now.",
        correct: "is sleeping",
      },
    ],
    []
  );

  const {
    answers,
    feedback,
    roomState,
    hudRootRef,
    keyButtonVisible,
    practiceResetVisible,
    handleChange,
    handleVerify,
    startKeyAttempt,
    handlePracticeReset,
  } = useRoomEngine({ sectionId: "basics", roomNumber: 1, exercises });

  const pageTitle = "Camera 1 – Present Continuous Basics";

  return (
    <TenseRoomPageShell
      pageTitle={pageTitle}
      roomLabel="Camera 1"
      sectionLabel="Basics"
      theoryRoute="/grammar/tenses/present-continuous/basics"
      mapRoute="/grammar/tenses/present-continuous/map"
      hudRootRef={hudRootRef}
      onRetryForKey={startKeyAttempt}
      keyButtonVisible={keyButtonVisible}
      practiceResetVisible={practiceResetVisible}
      onPracticeReset={handlePracticeReset}
      retryForKeyTestId="pc-retry-for-key"
    >
      <section className="card">
        <h2 className="card-title">Scrie forma corectă (am/is/are + -ing)</h2>
        <p className="card-text">Ex: <em>I am playing.</em></p>

        <TextInputExerciseList
          exercises={exercises}
          answers={answers}
          feedback={feedback}
          onChange={handleChange}
          testIdPrefix="pc-basics-room1"
        />

        <TenseExerciseActions
          onVerify={handleVerify}
          passed={roomState.passed}
          verifyTestId="pc-basics-room1-verify"
        />
      </section>
    </TenseRoomPageShell>
  );
}
