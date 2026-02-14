import { test, expect } from "@playwright/test";

const BASE = "/grammar/tenses/present-continuous";
const MAP = `${BASE}/map`;

// Same answers as in pc-key-flow.spec.js
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

async function earnKeyForRoom1(page) {
  // 1) Wrong attempt
  const inputs = page.getByRole("textbox");
  await inputs.nth(0).fill("run");
  await page.getByTestId(/-verify$/).first().click();

  // 2) Normal perfect attempt (no key yet)
  await fillAllCorrect(page);
  await page.getByTestId(/-verify$/).first().click();

  // 3) Retry for key
  await page.getByTestId("pc-retry-for-key").click();
  await fillAllCorrect(page);
  await page.getByTestId(/-verify$/).first().click();
}

async function expectRoom1HasKeyOnMap(page, expectFn) {
  await page.goto(MAP);
  const hasKeyAttr = await page
    .getByTestId("pc-room-affirmative-1")
    .getAttribute("data-has-key");
  expectFn(hasKeyAttr).toBe("true");
}

test("Present Continuous – Affirmative: key persists after refresh (Room 1)", async ({
  page,
}) => {
  await setupStorage(page);
  await openMap(page);
  await completeAffirmativeTheory(page);
  await openAffirmativeRoom1(page);

  await earnKeyForRoom1(page);

  // Still on room 1 after earning key
  await expect(page).toHaveURL(/present-continuous\/affirmative\/room-1/i);

  // Refresh and re-check
  await page.reload();
  await expect(page).toHaveURL(/present-continuous\/affirmative\/room-1/i);

  // Map reflects key after refresh
  await expectRoom1HasKeyOnMap(page, expect);
});
