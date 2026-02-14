import { test, expect } from "@playwright/test";

const BASE = "/grammar/tenses/present-continuous";

test("Present Continuous – Affirmative: room is gated until theory is completed", async ({
  page,
}) => {
  // Start clean before app loads (but don't wipe progress on every navigation)
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

  // Go to Present Continuous map
  await page.goto(BASE);
  await expect(page).toHaveURL(/present-continuous\/map/i);

  // Map link for Affirmative should be visible
  await expect(page.getByTestId("pc-path-affirmative")).toBeVisible();

  // Room 1 should be gated before theory is completed
  await page.getByTestId("pc-room-affirmative-1").click();

  // Must NOT navigate to the room page yet – still on map
  await expect(page).toHaveURL(/present-continuous\/map/i);

  // Open theory (this should mark theory as completed)
  await page.getByTestId("pc-start-theory-affirmative").click();
  await expect(page).toHaveURL(/present-continuous\/affirmative$/i);

  // Back to map
  await page.goto(BASE);
  await expect(page.getByTestId("pc-path-affirmative")).toBeVisible();

  // Now Room 1 should navigate correctly
  await page.getByTestId("pc-room-affirmative-1").click();
  await expect(page).toHaveURL(/present-continuous\/affirmative\/room-1/i);
});
