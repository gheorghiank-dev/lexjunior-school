import {
  PRESENT_PERFECT_CONTINUOUS_MANIFEST,
  buildPresentPerfectContinuousRoutes,
} from "./present-manifest.jsx";
import { createTenseModule } from "../../tense-kit/index.js";

export default createTenseModule(PRESENT_PERFECT_CONTINUOUS_MANIFEST, buildPresentPerfectContinuousRoutes());
