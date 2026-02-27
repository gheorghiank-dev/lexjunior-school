import {
  PAST_SIMPLE_MANIFEST,
  buildPastSimpleRoutes,
} from "./past-manifest.jsx";
import { createTenseModule } from "../../tense-kit/index.js";

export default createTenseModule(PAST_SIMPLE_MANIFEST, buildPastSimpleRoutes());
