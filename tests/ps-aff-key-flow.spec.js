import { test, expect } from "@playwright/test";

const BASE = "/grammar/tenses/present-simple";
const MAP = `${BASE}/map`;

// Correct answers for Affirmative – Room 1 (stable vs wording/design).
// NOTE: If you change the actual exercise key set in PsAffirmativeRoom1Page.jsx,
// update this mapping.
const ROOM1_CORRECT = {
  1: "joins",
  2: "likes",
  3: "kisses",
  4: "flies",
  5: "watches",
  6: "enjoys",
  7: "talks",
  8: "goes",
  9: "washes",
  10: "dances",
  11: "paints",
  12: "teaches",
  13: "studies",
  14: "tries",
  15: "watches",
  16: "cleans",
  17: "does",
  18: "fixes",
  19: "wishes",
  20: "goes",
};

async function openMap(page) {
  await page.goto(BASE);
  await expect(page).toHaveURL(/present-simple\/map/i);
}

async function completeTheory(page) {
  await page.goto(MAP);
  await page.getByTestId("ps-start-theory-affirmative").click();
  await expect(page).toHaveURL(/affirmative\/theory/i);
}

async function setInput(page, exId, value) {
  await page.getByTestId(`ps-aff-room1-input-${exId}`).fill(value);
}

async function fillAllCorrect(page) {
  for (const [exId, value] of Object.entries(ROOM1_CORRECT)) {
    await setInput(page, exId, value);
  }
}

async function readKeyFlag(page) {
  return page.evaluate(() => {
    const raw = localStorage.getItem("ps_affirmative_room1_key");
    if (!raw) return false;
    try {
      return JSON.parse(raw) === true;
    } catch {
      return false;
    }
  });
}

test("Affirmative: key via Retry for key (Room 1)", async ({ page }) => {
  // Clear once at the beginning of the test run for this page (avoid re-clearing on page.goto)
  await page.addInitScript(() => {
    try {
      if (!sessionStorage.getItem("__e2e_ls_cleared__")) {
        localStorage.clear();
        sessionStorage.setItem("__e2e_ls_cleared__", "1");
      }
    } catch {
      // ignore
    }
  });

  await openMap(page);
  await completeTheory(page);

  // Enter Room 1
  await page.goto(MAP);
  await page.getByTestId("ps-room-affirmative-1").click();
  await expect(page).toHaveURL(/affirmative\/room-1/i);

  // 1) First attempt: intentionally wrong => no key
  await setInput(page, 1, "join");
  await page.getByTestId(/-verify$/).first().click();
    expect(await readKeyFlag(page)).toBe(false);

  // 2) Make it perfect (normal run) => passed=true, key still false => Retry appears
  await fillAllCorrect(page);
  await page.getByTestId(/-verify$/).first().click();
    await expect(page.getByTestId(/-retry-key$/).first()).toBeVisible();
  expect(await readKeyFlag(page)).toBe(false);

  // 3) Retry for key: one perfect attempt grants key
  await page.getByTestId(/-retry-key$/).first().click();
  await fillAllCorrect(page);
  await page.getByTestId(/-verify$/).first().click();
    expect(await readKeyFlag(page)).toBe(true);

  // Map should show has-key state (stable attribute)
  await page.goto(MAP);
  const hasKeyAttr = await page
    .getByTestId("ps-room-affirmative-1")
    .getAttribute("data-has-key");
  expect(hasKeyAttr).toBe("true");
});
