// Tense Kit (minimal)
// A tiny helper to keep all tense modules the same shape.

/**
 * Returns a module object consumed by the global registry.
 * This is intentionally small and non-opinionated to avoid UX/route changes.
 */
export function createTenseModule(manifest, routes) {
  return {
    ...manifest,
    routes: routes || manifest.routes || [],
  };
}
