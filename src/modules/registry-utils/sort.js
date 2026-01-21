/**
 * Shared registry helpers (sorting).
 *
 * Keep ordering stable and predictable across registries.
 */

export function sortByOrderThenLabel(a, b, { orderKey = "order", labelKey = "label" } = {}) {
  const ao = typeof (a && a[orderKey]) === "number" ? a[orderKey] : 999;
  const bo = typeof (b && b[orderKey]) === "number" ? b[orderKey] : 999;

  if (ao !== bo) return ao - bo;

  const al = String((a && a[labelKey]) || "");
  const bl = String((b && b[labelKey]) || "");
  return al.localeCompare(bl);
}

export function sortByOrder(a, b, { orderKey = "order" } = {}) {
  const ao = typeof (a && a[orderKey]) === "number" ? a[orderKey] : 999;
  const bo = typeof (b && b[orderKey]) === "number" ? b[orderKey] : 999;
  return ao - bo;
}
