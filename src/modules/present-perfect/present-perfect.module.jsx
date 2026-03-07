import {
  PRESENT_PERFECT_MANIFEST,
  buildPresentPerfectRoutes,
} from "./present-manifest.jsx";
import { createTenseModule } from "../../tense-kit/index.js";

export default createTenseModule(PRESENT_PERFECT_MANIFEST, buildPresentPerfectRoutes());
