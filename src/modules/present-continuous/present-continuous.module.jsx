import {
  PRESENT_CONTINUOUS_MANIFEST,
  buildPresentContinuousRoutes,
} from "./pc-manifest.jsx";
import { createTenseModule } from "../../tense-kit/index.js";

export default createTenseModule(
  PRESENT_CONTINUOUS_MANIFEST,
  buildPresentContinuousRoutes(),
);
