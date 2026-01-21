import { APP_NAV_STATUS, validateAppNavItem } from "./app-nav-contract.js";
import { sortByOrder } from "../registry-utils/sort.js";

/**
 * Single source of truth for the header navigation.
 *
 * Vocabulary/Cambridge are intentionally disabled for now.
 */
const NAV_ITEMS = [
  {
    id: "grammar",
    label: "Grammar",
    href: "/grammar",
    status: APP_NAV_STATUS.READY,
    order: 1,
  },
  {
    id: "vocabulary",
    label: "Vocabulary",
    status: APP_NAV_STATUS.DISABLED,
    order: 2,
  },
  {
    id: "cambridge",
    label: "Cambridge",
    status: APP_NAV_STATUS.DISABLED,
    order: 3,
  },
];

export function getAppNavItems() {
  // Dev-time validation (non-fatal): return only valid items.
  const valid = [];
  for (const item of NAV_ITEMS) {
    const err = validateAppNavItem(item);
    if (err) {
      // eslint-disable-next-line no-console
      console.warn("[app-nav] Invalid nav item:", err, item);
      continue;
    }
    valid.push(item);
  }
  return valid.sort((a, b) => sortByOrder(a, b, { orderKey: "order" }));
}
