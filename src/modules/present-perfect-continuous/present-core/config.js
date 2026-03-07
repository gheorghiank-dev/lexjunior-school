// Present Perfect Continuous module config

export const PRESENT_PERFECT_CONTINUOUS_STORAGE_PREFIX = "pas_";
export const PRESENT_PERFECT_CONTINUOUS_ROOMS_PER_SECTION = 7;

export const PRESENT_PERFECT_CONTINUOUS_SECTIONS = [
  {
    id: "affirmative",
    title: "Affirmative",
    description: "Formarea propozițiilor afirmative la Present Perfect Continuous.",
  },
  {
    id: "negative",
    title: "Negative",
    description: "Formarea propozițiilor negative la Present Perfect Continuous.",
  },
  {
    id: "interrogative",
    title: "Interrogative",
    description: "Întrebări în Present Perfect Continuous.",
  },
  {
    id: "uses",
    title: "Uses",
    description: "Întrebuințări ale Present Perfect Continuous.",
  },
  {
    id: "time-expressions",
    title: "Time Expressions",
    description: "Expresii de timp frecvente pentru Present Perfect Continuous.",
  },
];

export const STORAGE_PREFIX = PRESENT_PERFECT_CONTINUOUS_STORAGE_PREFIX;
export const ROOMS_PER_SECTION = PRESENT_PERFECT_CONTINUOUS_ROOMS_PER_SECTION;
export const SECTIONS = PRESENT_PERFECT_CONTINUOUS_SECTIONS;

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

export const PRESENT_PERFECT_CONTINUOUS_HUD_TEXT = HUD_TEXT;

export const DEV_MODE = true;
export const PRESENT_PERFECT_CONTINUOUS_DEV_MODE = DEV_MODE;
