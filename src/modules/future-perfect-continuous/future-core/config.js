// Future Perfect Continuous module config

export const FUTURE_PERFECT_CONTINUOUS_STORAGE_PREFIX = "fpc_";
export const FUTURE_PERFECT_CONTINUOUS_ROOMS_PER_SECTION = 7;

export const FUTURE_PERFECT_CONTINUOUS_SECTIONS = [
  {
    id: "affirmative",
    title: "Affirmative",
    description: "Formarea propozițiilor afirmative la Future Perfect Continuous.",
  },
  {
    id: "negative",
    title: "Negative",
    description: "Formarea propozițiilor negative la Future Perfect Continuous.",
  },
  {
    id: "interrogative",
    title: "Interrogative",
    description: "Întrebări în Future Perfect Continuous.",
  },
  {
    id: "uses",
    title: "Uses",
    description: "Întrebuințări ale Future Perfect Continuous.",
  },
  {
    id: "time-expressions",
    title: "Time Expressions",
    description: "Expresii de timp frecvente pentru Future Perfect Continuous.",
  },
];

export const STORAGE_PREFIX = FUTURE_PERFECT_CONTINUOUS_STORAGE_PREFIX;
export const ROOMS_PER_SECTION = FUTURE_PERFECT_CONTINUOUS_ROOMS_PER_SECTION;
export const SECTIONS = FUTURE_PERFECT_CONTINUOUS_SECTIONS;

export const HUD_TEXT = {
  keyObtainedLabel: "Cheia este obținută.",
  keyMissingLabel: "Cheia nu este obținută.",
  keyMissingAfterPassLabel: "Ai terminat camera, dar nu ai cheia încă.",
  hudNear: "Încearcă din nou, ești foarte aproape!",
  hudNeedKey:
    "Ai rezolvat camera, dar ai nevoie de o încercare perfectă pentru cheie.",
  hudHasKey: "Perfect! Ai obținut cheia pentru această cameră.",
  roomNear: "Sunt câteva greșeli. Mai aruncă o privire :)",
  roomPerfect: "Bravo! Ai terminat corect această cameră!",
};

export const FUTURE_PERFECT_CONTINUOUS_HUD_TEXT = HUD_TEXT;

export const DEV_MODE = true;
export const FUTURE_PERFECT_CONTINUOUS_DEV_MODE = DEV_MODE;
