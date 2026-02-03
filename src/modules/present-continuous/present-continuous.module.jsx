import {
  PRESENT_CONTINUOUS_MANIFEST,
  buildPresentContinuousRoutes,
} from "./pc-manifest.jsx";
import { createTenseModule } from "../../core/tense/tense-kit.js";

export default createTenseModule(
  PRESENT_CONTINUOUS_MANIFEST,
  buildPresentContinuousRoutes(),
);
