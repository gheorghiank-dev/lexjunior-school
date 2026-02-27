import {
  PRESENT_SIMPLE_MANIFEST,
  buildPresentSimpleRoutes,
} from "./ps-manifest.jsx";
import { createTenseModule } from "../../tense-kit/index.js";

export default createTenseModule(
  PRESENT_SIMPLE_MANIFEST,
  buildPresentSimpleRoutes(),
);
