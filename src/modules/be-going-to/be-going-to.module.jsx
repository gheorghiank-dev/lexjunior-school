import {
  BE_GOING_TO_MANIFEST,
  buildBeGoingToRoutes,
} from "./be-manifest.jsx";
import { createTenseModule } from "../../tense-kit/index.js";

export default createTenseModule(BE_GOING_TO_MANIFEST, buildBeGoingToRoutes());
