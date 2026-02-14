import { test, expect } from "@playwright/test";

const BASE = "/grammar/tenses/present-continuous";
const MAP = `${BASE}/map`;

// Correct answers for Present Continuous – Affirmative, Room 1
// (aligned with pc-affirmative-rooms.jsx, PC_AFFIRMATIVE_EXERCISES_BY_ROOM[1])
const ROOM1_CORRECT = [
  "running",
  "swimming",
  "stopping",
  "planning",
  "shopping",
  "getting",
  "sitting",
  "beginning",
  "travelling",
  "studying",
  "making",
  "taking",
  "writing",
  "driving",
  "coming",
  "dancing",
  "reading",
  "playing",
  "talking",
  "opening",
];

async function setupStorage(page) {
  await page.addInitScript(() => {
    try {
      if (!sessionStorage.getItem("__e2e_ls_cleared_pc__")) {
        localStorage.clear();
        sessionStorage.setItem("__e2e_ls_cleared_pc__", "1");
      }
    } catch {
      // ignore
    }
  });
}

async function openMap(page) {
  await page.goto(BASE);
  await expect(page).toHaveURL(/present-continuous\/map/i);
}

async function completeAffirmativeTheory(page) {
  // Go via map to keep behavior similar to PS tests
  await page.goto(MAP);
  await page.getByTestId("pc-start-theory-affirmative").click();
  await expect(page).toHaveURL(/present-continuous\/affirmative$/i);
}

async function openAffirmativeRoom1(page) {
  await page.goto(MAP);
  await page.getByTestId("pc-room-affirmative-1").click();
  await expect(page).toHaveURL(/present-continuous\/affirmative\/room-1/i);
}

async function fillAllCorrect(page) {
  const inputs = page.getByRole("textbox");
  for (let i = 0; i < ROOM1_CORRECT.length; i += 1) {
    await inputs.nth(i).fill(ROOM1_CORRECT[i]);
  }
}

async function expectRoom1HasKeyOnMap(page, expectFn) {
  await page.goto(MAP);
  const hasKeyAttr = await page
    .getByTestId("pc-room-affirmative-1")
    .getAttribute("data-has-key");
  expectFn(hasKeyAttr).toBe("true");
}

test("Present Continuous – Affirmative: key via Retry for key (Room 1)", async ({ page }) => {
  await setupStorage(page);
  await openMap(page);
  await completeAffirmativeTheory(page);
  await openAffirmativeRoom1(page);

  // 1) First attempt: intentionally wrong => no key
  const inputs = page.getByRole("textbox");
  await inputs.nth(0).fill("run"); // wrong on purpose
  await page.getByTestId(/-verify$/).first().click();

  // 2) Normal perfect attempt (no key yet, only passed)
  await fillAllCorrect(page);
  await page.getByTestId(/-verify$/).first().click();

  // 3) Retry for key: one perfect attempt grants key
  await page.getByTestId("pc-retry-for-key").click();
  await fillAllCorrect(page);
  await page.getByTestId(/-verify$/).first().click();

  // Map must reflect the key state
  await expectRoom1HasKeyOnMap(page, expect);
});
