# Controlled Long/Short Answer Validation (Global)

## Goal

We want **controlled** answer acceptance for negative forms:

- Some rooms must be **strict long** (e.g., `is not`)
- Some rooms must be **strict short** (e.g., `isn't`)
- Some rooms must accept **both** (long + short)

This must work for **all tenses**, but only **where we explicitly allow it** (per-room control), without breaking existing behavior.

✅ **Important:** We do **not** modify the existing `normalizeAnswer()` logic. It continues to handle case/spacing/punctuation consistently.

---

## What we added (high-level)

We introduced a small “validation policy” system:

### Policies (per room)

- `strict-long` — accept only the long form written in `correct`
- `strict-short` — accept only the short form written in `correct`
- `flex-both` — accept both long and short using a safe mapping table

### Variant Families (what conversions are allowed)

We use explicit “families” of equivalents (no guessing):

- `BE_NEGATIVE`: `is not` ↔ `isn't`, `are not` ↔ `aren't`, etc.

(Other families like `DO_NEGATIVE`, `WILL_NEGATIVE` can be enabled later.)

---

## Files created

### 1) Policies enum

**File:** `src/core/validation/validationPolicies.js`

**Why:** Single source of truth for policy names (avoids typos).

**Exports:**

- `VALIDATION_POLICIES.STRICT_LONG`
- `VALIDATION_POLICIES.STRICT_SHORT`
- `VALIDATION_POLICIES.FLEX_BOTH`

---

### 2) Accepted variants table (safe mapping)

**File:** `src/core/validation/acceptedVariants.js`

**Why:** A predictable list of allowed equivalents (no “smart” heuristics).

**Current family:**

- `ACCEPTED_VARIANT_FAMILIES.BE_NEGATIVE`

---

### 3) Global per-module / per-section / per-room policy config

**File:** `src/modules/tenses/config/validationPolicyByRoom.js`

**Why:** Central place to define room-level validation rules.

**Current config included:**

- `present-continuous → negative → rooms 1..7`
  - Room 1: strict long
  - Room 2: strict short
  - Rooms 3–7: flex both

---

### 4) Policy lookup helper

**File:** `src/core/validation/getRoomValidationPolicy.js`

**Why:** A simple function to get the policy for a given module/section/room with a safe fallback.

**Fallback:**

- `STRICT_LONG` (predictable by default)

---

### 5) Accepted-variants generator

**File:** `src/core/validation/getAcceptedAnswerVariants.js`

**Why:** Given:

- `correct` (string or string[])
- current `policy`
- current `family`
- the existing `normalize` function

…it returns a list of **normalized accepted variants**.

Rules:

- If policy is strict → accept ONLY what content says (no extra expansion)
- If policy is flex → expand using the chosen family (e.g., `BE_NEGATIVE`)

---

## Files modified

### A) Room engine verification (core)

**File:** `src/core/room-engine/createUseRoomEngine.js`

**Why:** This is where answers are compared to `correct`. We updated it to:

- support `correct: string | string[]`
- use `getAcceptedAnswerVariants(...)` so we can accept long/short when policy allows

**Key changes:**

1. Import:

- `getAcceptedAnswerVariants`

2. Hook signature now accepts:

- `validationPolicy`
- `validationFamily`

3. Verification logic:

- `got = normalize(userInput)`
- `accepted = getAcceptedAnswerVariants({ correct, normalizeFn: normalize, policy: validationPolicy, family: validationFamily })`
- correct if `accepted.includes(got)`

4. Dev autofill safety:

- if `correct` is array, autofill uses first variant

---

### B) Pass policy/family through UI shells (tenses)

We needed to pass two new “props” (parameters) from room pages to the engine.

#### 1) Shell layer

**File:** `src/modules/tenses/ui/TenseExerciseRoomShell.jsx`

**Why:** It wraps room pages and forwards props to the template.

**Added props:**

- `validationPolicy`
- `validationFamily`

Forwarded to `TenseRoomTemplateV1`.

#### 2) Template layer

**File:** `src/modules/tenses/ui/TenseRoomTemplateV1.jsx`

**Why:** This is where `useRoomEngineHook(...)` is called.
We pass the policy/family into the engine hook call:

useRoomEngineHook({
sectionId,
roomNumber,
exercises,
validationPolicy,
validationFamily,
})

---

### C) Present Continuous Negative room page wiring

**File:** `src/modules/present-continuous/PcNegativeRoomFromRegistry.jsx`

**Why:** We want **room-level control** for negative rooms only.
This page:

1. Calculates policy for the current room:

- getRoomValidationPolicy({ moduleKey: "present-continuous", sectionId: "negative", roomNumber })

2. Sends to the shell:

- validationPolicy={validationPolicy}
- validationFamily="BE_NEGATIVE"

✅ Result: only PC Negative rooms use this system right now.

---

## How it behaves (expected)

### Present Continuous → Negative

- **Room 1** (strict-long):
  - ✅ `is not`
  - ❌ `isn't`

- **Room 2** (strict-short):
  - ✅ `isn't`
  - ❌ `is not`

- **Rooms 3–7** (flex-both):
  - ✅ `is not`
  - ✅ `isn't`

---

---

## Accepted Variant Families (current)

Variant families define **which exact long↔short conversions are allowed** when a room uses:

- `validationPolicy = flex-both`
- AND a specific `validationFamily` (e.g. `"BE_NEGATIVE"`)

These mappings are explicit and predictable (no guessing). They live in:

**File:** `src/core/validation/acceptedVariants.js`

### `BE_NEGATIVE` (to be)

Used for negative forms with **am/is/are/was/were**.

Accepts:

- `am not` ↔ `'m not`
- `is not` ↔ `isn't`
- `are not` ↔ `aren't`
- `was not` ↔ `wasn't`
- `were not` ↔ `weren't`

> Note: we do **not** accept `amn’t`.

### `DO_NEGATIVE` (do/does/did)

Used for Present Simple / Past Simple negatives:

- `do not` ↔ `don't`
- `does not` ↔ `doesn't`
- `did not` ↔ `didn't`

### `HAVE_NEGATIVE` (have/has/had)

Used mainly for Present Perfect / Past Perfect negatives:

- `have not` ↔ `haven't`
- `has not` ↔ `hasn't`
- `had not` ↔ `hadn't`
- `have not` ↔ `'ve not`
- `has not` ↔ `'s not`
- `had not` ↔ `'d not`

### `WILL_NEGATIVE` (will)

Used for Future Simple negatives:

- `will not` ↔ `won't`

### Optional extra

(Only if you decide to use it later.)

- `CAN_NEGATIVE`: `cannot` ↔ `can't`

## How to extend to other tenses

1. Add the module key + section rooms to:

- `src/modules/tenses/config/validationPolicyByRoom.js`

2. In that tense’s Negative RoomFromRegistry component:

- compute validationPolicy using getRoomValidationPolicy(...)
- pass validationFamily appropriate to that tense:
  - Present Simple negative → (future) DO_NEGATIVE
  - Past Simple negative → (future) DO_NEGATIVE (did not ↔ didn't)
  - Future Simple negative → (future) WILL_NEGATIVE

3. When ready, uncomment/add those families in acceptedVariants.js.

---

## Why this is “senior-dev safe”

- Minimal surface area: we do not rewrite the engine, only extend comparison logic.
- No behavior change unless a page passes validationPolicy + validationFamily.
- normalizeAnswer remains unchanged.
- Explicit mappings, no unpredictable “smart” matching.
- Central configuration for policies ensures consistent behavior across modules.
