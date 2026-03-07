import {
  PAST_PERFECT_CONTINUOUS_MANIFEST,
  buildPastPerfectContinuousRoutes,
} from "./past-perfect-continuous-manifest.jsx";
import { createTenseModule } from "../../tense-kit/index.js";

export default createTenseModule(PAST_PERFECT_CONTINUOUS_MANIFEST, buildPastPerfectContinuousRoutes());
