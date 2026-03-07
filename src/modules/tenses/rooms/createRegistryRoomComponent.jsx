import React, { useMemo } from "react";
import { TenseExerciseRoomShell } from "../ui/TenseExerciseRoomShell.jsx";
import { createRoomTypeRenderer } from "./createRoomTypeRenderer.js";

function resolveValue(value, roomNumber) {
  return typeof value === "function" ? value(roomNumber) : value;
}

export function createRegistryRoomComponent(config) {
  const {
    useRoomEngineHook,
    sectionId,
    sectionLabel,
    getExercises,
    getDictionaryItems = () => [],
    getLexHintsForRoom = () => [],
    lexAvatarSrc,
    getTheoryRoute,
    getMapRoute,
    getNextTo,
    getPageTitle,
    getRetryForKeyTestId,
    getTestIdPrefix,
    getLexTestIdPrefix,
    cardTitleByRoom = {},
    cardIntroByRoom = {},
    defaultCardTitle,
    dictionaryDescription,
    getValidationPolicy,
    validationFamily,
    renderConfig,
    renderExercises: renderExercisesFactory,
  } = config;

  function RegistryRoomComponent({ roomNumber }) {
    const exercises = useMemo(() => getExercises(roomNumber), [roomNumber]);

    if (!exercises || exercises.length === 0) {
      return null;
    }

    const pageTitle = resolveValue(getPageTitle, roomNumber);
    const roomLabel = `Camera ${roomNumber}`;
    const retryForKeyTestId = resolveValue(getRetryForKeyTestId, roomNumber);
    const testIdPrefix = resolveValue(getTestIdPrefix, roomNumber);
    const lexTestIdPrefix = resolveValue(getLexTestIdPrefix, roomNumber);
    const cardTitle =
      cardTitleByRoom[roomNumber] ?? resolveValue(defaultCardTitle, roomNumber);
    const cardIntro = cardIntroByRoom[roomNumber] ?? "";
    const dictionaryItems = getDictionaryItems(roomNumber);
    const lexHints = getLexHintsForRoom(roomNumber);
    const theoryRoute = getTheoryRoute(sectionId);
    const mapRoute = getMapRoute();
    const nextTo = getNextTo(roomNumber, sectionId);
    const validationPolicy = getValidationPolicy
      ? getValidationPolicy(roomNumber, sectionId)
      : undefined;
    const renderExercises = renderExercisesFactory
      ? renderExercisesFactory(roomNumber)
      : createRoomTypeRenderer(roomNumber, renderConfig);

    return (
      <TenseExerciseRoomShell
        useRoomEngineHook={useRoomEngineHook}
        sectionId={sectionId}
        sectionLabel={sectionLabel}
        roomNumber={roomNumber}
        validationPolicy={validationPolicy}
        validationFamily={validationFamily}
        pageTitle={pageTitle}
        roomLabel={roomLabel}
        theoryRoute={theoryRoute}
        mapRoute={mapRoute}
        retryForKeyTestId={retryForKeyTestId}
        exercises={exercises}
        testIdPrefix={testIdPrefix}
        cardTitle={cardTitle}
        cardIntro={cardIntro}
        renderExercises={renderExercises}
        dictionaryItems={dictionaryItems}
        dictionaryDescription={dictionaryDescription}
        lexHints={lexHints}
        lexAvatarSrc={lexAvatarSrc}
        lexTestIdPrefix={lexTestIdPrefix}
        nextTo={nextTo}
      />
    );
  }

  RegistryRoomComponent.displayName =
    config.displayName ?? `RegistryRoomComponent(${sectionId})`;

  return RegistryRoomComponent;
}
