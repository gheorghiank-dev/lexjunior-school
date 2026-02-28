import { VALIDATION_POLICIES } from "./validationPolicies.js";
import { VALIDATION_POLICY_BY_MODULE } from "../../modules/tenses/config/validationPolicyByRoom.js";

/**
 * Returns the validation policy for a given module/section/room.
 * Falls back to STRICT_LONG to keep behavior predictable by default.
 */
export const getRoomValidationPolicy = ({
  moduleKey,
  sectionId,
  roomNumber,
}) => {
  const policy =
    VALIDATION_POLICY_BY_MODULE?.[moduleKey]?.[sectionId]?.[roomNumber];

  return policy ?? VALIDATION_POLICIES.STRICT_LONG;
};
