import { test, expect } from "@playwright/test";

test("Time Expressions: room is gated until theory is completed", async ({
  page,
}) => {
  // Start clean before app loads (but don't wipe progress on every navigation)
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

  // Go to Present Simple map
  await page.goto("/grammar/tenses/present-simple");

  // Open the React map (stable selector; avoids wording-dependent click)
  await expect(page).toHaveURL(/present-simple\/map/i);

  // Confirm we are on the map and the Time Expressions path is rendered
  await expect(page.getByTestId("ps-path-time-expressions")).toBeVisible();

  // Room 1 exists even when locked
  await expect(page.getByTestId("ps-room-time-expressions-1")).toBeVisible();

  // Click Room 1 (should be blocked because theory not done)
  await page.getByTestId("ps-room-time-expressions-1").click();

  // Must NOT navigate to the room page
  await expect(page).toHaveURL(/present-simple\/map/i);

  // Open theory (this should mark theory as completed)
  await page.getByTestId("ps-start-theory-time-expressions").click();
  await expect(page).toHaveURL(/time-expressions\/theory/i);

  // Back to map
  await page.goto("/grammar/tenses/present-simple");
  await expect(page.getByTestId("ps-path-time-expressions")).toBeVisible();

  // Now Room 1 should navigate
  await page.getByTestId("ps-room-time-expressions-1").click();
  await expect(page).toHaveURL(/time-expressions\/room-1/i);
});
