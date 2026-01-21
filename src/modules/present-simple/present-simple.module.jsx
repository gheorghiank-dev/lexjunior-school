import { PRESENT_SIMPLE_MANIFEST, buildPresentSimpleRoutes } from "./ps-manifest.jsx";
import { createTenseModule } from "../../core/tense/tense-kit.js";

export default createTenseModule(PRESENT_SIMPLE_MANIFEST, buildPresentSimpleRoutes());
