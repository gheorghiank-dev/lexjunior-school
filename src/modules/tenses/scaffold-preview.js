export function createPreviewExercisesByRoom({ prefix, tenseLabel, sectionLabel }) {
  const baseAnswers = {
    1: ["ready", "steady", "go"],
    2: ["alpha", "beta", "gamma"],
    3: ["north", "south", "west"],
    4: ["red", "blue", "green"],
    5: ["spring", "summer", "winter"],
    6: ["river", "forest", "mountain"],
    7: ["badge", "preview", "complete"],
  };

  return Object.fromEntries(
    Object.entries(baseAnswers).map(([roomNumber, answers]) => [
      Number(roomNumber),
      answers.map((answer, index) => ({
        id: `${prefix}-r${roomNumber}-ex${index + 1}`,
        prompt: `${tenseLabel} – ${sectionLabel} – preview room ${roomNumber}. Type exactly: ${answer}`,
        correct: answer,
        tts: `${tenseLabel}. ${sectionLabel}. Preview room ${roomNumber}. ${answer}.`,
      })),
    ]),
  );
}

export function createPreviewGlossaryByRoom({ tenseLabel, sectionLabel }) {
  return Object.fromEntries(
    Array.from({ length: 7 }, (_, idx) => {
      const roomNumber = idx + 1;
      return [
        roomNumber,
        [
          {
            word: `${sectionLabel} preview`,
            meaning: `placeholder support card for ${tenseLabel}`,
            tts: `${sectionLabel} preview`,
          },
          {
            word: `room ${roomNumber}`,
            meaning: `developer preview checkpoint`,
            tts: `room ${roomNumber}`,
          },
        ],
      ];
    }),
  );
}

export function createPreviewBadgeConfig(tenseName) {
  const safeName = String(tenseName || 'this tense');

  return {
    badgeStoryConfig: {
      verbs: ['study', 'play', 'watch'],
      slotAnswers: ['study', 'play', 'watch'],
    },
    badgeEx2Questions: [
      {
        id: 'preview-badge-q1',
        prompt: `Is this a preview badge for ${safeName}?`,
        correctShort: 'yes',
        sentence: `Yes, this is a preview badge for ${safeName}.`,
      },
      {
        id: 'preview-badge-q2',
        prompt: `Can you reach the badge page in ${safeName}?`,
        correctShort: 'yes',
        sentence: `Yes, I can reach the badge page in ${safeName}.`,
      },
      {
        id: 'preview-badge-q3',
        prompt: `Does this module now have a playable preview flow?`,
        correctShort: 'yes',
        sentence: 'Yes, this module now has a playable preview flow.',
      },
    ],
    badgeEx3Prompts: [
      `Write one short sentence about why ${safeName} is easier to test now.`,
      `Write one short sentence about reaching the badge in ${safeName}.`,
    ],
    badgeMiniDictionaryItems: [
      {
        word: 'preview',
        meaning: 'o versiune de testare a modulului',
        tts: 'preview',
      },
      {
        word: 'badge',
        meaning: 'recompensa finală a modulului',
        tts: 'badge',
      },
      {
        word: 'complete',
        meaning: 'a finaliza tot traseul',
        tts: 'complete',
      },
    ],
    badgeStoryTtsText: `This is the preview badge story for ${safeName}. First we study, then we play, and in the end we watch our final result.`,
  };
}
