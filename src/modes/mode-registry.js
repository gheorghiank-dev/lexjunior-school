import { ENV } from "../environment.js";

export function getBuildMode() {
  return ENV.BUILD_MODE;
}

export function isSchoolMode() {
  return getBuildMode() === "school";
}

export function isProductionMode() {
  return getBuildMode() === "production";
}
