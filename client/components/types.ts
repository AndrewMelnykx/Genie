import { FEATURE_REQUEST_LIMITS_BY_NAME } from "@/helpers/constants/api";

interface ConversationMessage {
  role: "user" | "system";
  content: string;
}
type FeatureType = keyof typeof FEATURE_REQUEST_LIMITS_BY_NAME;

export type { ConversationMessage, FeatureType };
