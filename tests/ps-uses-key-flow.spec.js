import { test, expect } from "@playwright/test";

const BASE = "/grammar/tenses/present-simple";
const MAP = `${BASE}/map`;

// Correct answers for Uses – Room 1
const ROOM1_CORRECT = {
  1: "N", // The museum opens at 9 a.m.
  2: "R", // We play tennis on Saturdays.
  3: "N", // My brother lives in Madrid.
  4: "R", // He usually walks to work.
  5: "N", // The train leaves at 6:30.
  6: "R", // I get up at 7 o’clock.
  7: "N", // The film starts at 8 p.m.
  8: "R", // We have English on Mondays.
  9: "R", // She goes to school every day.
  10: "R", // My dad drinks coffee every morning.
};

async function openMap(page) {
  await page.goto(BASE);
  await expect(page).toHaveURL(/present-simple\/map/i);
}

async function completeTheory(page) {
  await page.goto(MAP);
  await page.getByTestId("ps-start-theory-uses").click();
  await expect(page).toHaveURL(/uses\/theory/i);
}

async function pick(page, exId, value) {
  // stable: added in McqExerciseList via testIdPrefix
  await page.getByTestId(`ps-uses-room1-ex-${exId}-${value}`).click();
}

async function fillAllCorrect(page) {
  for (const [exId, value] of Object.entries(ROOM1_CORRECT)) {
    await pick(page, exId, value);
  }
}

async function readKeyFlag(page) {
  return page.evaluate(() => {
    const raw = localStorage.getItem("ps_uses_room1_key");
    if (!raw) return false;
    try {
      return JSON.parse(raw) === true;
    } catch {
      return false;
    }
  });
}

test("Uses: key via Retry for key (Room 1)", async ({ page }) => {
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
  await page.getByTestId("ps-room-uses-1").click();
  await expect(page).toHaveURL(/uses\/room-1/i);

  // 1) First attempt: intentionally wrong => no key
  await pick(page, 1, "R"); // correct is N
  await page.getByTestId("ps-check").click();
  await expect(page.getByTestId("ps-feedback")).toBeVisible();
  expect(await readKeyFlag(page)).toBe(false);

  // 2) Make it perfect (normal run) => passed=true, key still false => Retry appears
  await fillAllCorrect(page);
  await page.getByTestId("ps-check").click();
  await expect(page.getByTestId("ps-feedback")).toBeVisible();
  await expect(page.getByTestId("ps-retry-for-key")).toBeVisible();
  expect(await readKeyFlag(page)).toBe(false);

  // 3) Retry for key: one perfect attempt grants key
  await page.getByTestId("ps-retry-for-key").click();
  await fillAllCorrect(page);
  await page.getByTestId("ps-check").click();
  await expect(page.getByTestId("ps-feedback")).toBeVisible();
  expect(await readKeyFlag(page)).toBe(true);

  // Map should show has-key state (stable attribute)
  await page.goto(MAP);
  const hasKeyAttr = await page
    .getByTestId("ps-room-uses-1")
    .getAttribute("data-has-key");
  expect(hasKeyAttr).toBe("true");
});
