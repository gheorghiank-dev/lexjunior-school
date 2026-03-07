import {
  PAST_CONTINUOUS_MANIFEST,
  buildPastContinuousRoutes,
} from "./past-continuous-manifest.jsx";
import { createTenseModule } from "../../tense-kit/index.js";

export default createTenseModule(PAST_CONTINUOUS_MANIFEST, buildPastContinuousRoutes());
