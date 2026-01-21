// Sprint 14 – Certificate PDF (template loader)

export async function loadCertificateTemplateBytes(templateUrl) {
  if (!templateUrl) {
    throw new Error("Missing certificate template URL");
  }

  const res = await fetch(templateUrl);
  if (!res.ok) {
    throw new Error(`Failed to load certificate template: ${res.status}`);
  }
  const buf = await res.arrayBuffer();
  return new Uint8Array(buf);
}
