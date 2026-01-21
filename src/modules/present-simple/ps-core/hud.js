import { HUD_TEXT } from "./config.js";
import { HUD as CoreHUD } from "../../../core/room-engine/hud.js";

export class HUD extends CoreHUD {
  constructor(root) {
    super(root, HUD_TEXT);
  }
}
