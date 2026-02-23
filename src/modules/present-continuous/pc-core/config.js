// Present Continuous module config

export const PC_STORAGE_PREFIX = "pc_";
export const PC_ROOMS_PER_SECTION = 7;

// Learning sections + final badge.
// IDs must stay stable – they are used in storage & progress manager.
export const PC_SECTIONS = [
  {
    id: "affirmative",
    title: "Affirmative",
    description: "Formarea propozitiilor afirmative.",
  },
  {
    id: "negative",
    title: "Negative",
    description: "Formarea propozitiilor negative.",
  },
  {
    id: "interrogative",
    title: "Interrogative",
    description: "Intrebari in Present Continuous.",
  },
  {
    id: "uses",
    title: "Uses",
    description: "Intrebuintari ale Present Continuous.",
  },
  {
    id: "time-expressions",
    title: "Time Expressions",
    description: "Expresii de timp frecvente.",
  },
];

// Neutre – contract comun pentru toate timpurile
export const STORAGE_PREFIX = PC_STORAGE_PREFIX;
export const ROOMS_PER_SECTION = PC_ROOMS_PER_SECTION;
export const SECTIONS = PC_SECTIONS;

export const HUD_TEXT = {
  keyObtainedLabel: "Cheia este obtinuta.",
  keyMissingLabel: "Cheia nu este obtinuta.",
  keyMissingAfterPassLabel: "Ai terminat camera, dar nu ai cheia inca.",
};

// Alias-uri PC pentru compatibilitate cu codul existent
export const PC_HUD_TEXT = HUD_TEXT;

// Dev-only helper flag (aliniat la Present Simple)
export const DEV_MODE = true;
export const PC_DEV_MODE = DEV_MODE;
