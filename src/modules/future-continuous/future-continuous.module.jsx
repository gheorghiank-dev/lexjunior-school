import {
  FUTURE_CONTINUOUS_MANIFEST,
  buildFutureContinuousRoutes,
} from "./future-manifest.jsx";
import { createTenseModule } from "../../tense-kit/index.js";

export default createTenseModule(FUTURE_CONTINUOUS_MANIFEST, buildFutureContinuousRoutes());
