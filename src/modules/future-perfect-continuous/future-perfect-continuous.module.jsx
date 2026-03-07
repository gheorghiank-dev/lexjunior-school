import {
  FUTURE_PERFECT_CONTINUOUS_MANIFEST,
  buildFuturePerfectContinuousRoutes,
} from "./future-manifest.jsx";
import { createTenseModule } from "../../tense-kit/index.js";

export default createTenseModule(FUTURE_PERFECT_CONTINUOUS_MANIFEST, buildFuturePerfectContinuousRoutes());
