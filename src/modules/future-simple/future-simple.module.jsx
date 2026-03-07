import {
  FUTURE_SIMPLE_MANIFEST,
  buildFutureSimpleRoutes,
} from "./future-manifest.jsx";
import { createTenseModule } from "../../tense-kit/index.js";

export default createTenseModule(FUTURE_SIMPLE_MANIFEST, buildFutureSimpleRoutes());
