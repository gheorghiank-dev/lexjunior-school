import {
  PAST_PERFECT_MANIFEST,
  buildPastPerfectRoutes,
} from "./past-perfect-manifest.jsx";
import { createTenseModule } from "../../tense-kit/index.js";

export default createTenseModule(PAST_PERFECT_MANIFEST, buildPastPerfectRoutes());
