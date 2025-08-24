import { FeatureType } from "utils/constants/api";

const API_CONVERSATION = "/api/conversation";
const API_CODE = "/api/code";
const API_MUSIC = "/api/music";
const API_VIDEO = "/api/video";
const API_LIMIT = "/api/limit";
const API_STRIPE = "/api/stripe";
const API_SUBSCRIPTION = "/api/subscription";

const FETCH_CONVERSATION_MESSAGES = "fetchConversationMessagesList";
const FETCH_CODE_MESSAGES = "fetchCodeMessagesList";
const FETCH_IMAGE = "fetchImage";
const FETCH_MUSIC = "fetchMusic";
const FETCH_VIDEO = "fetchVideo";
const FETCH_LIMIT = "fetchLimit";
const FETCH_STRIPE = "fetchStripe";
const FETCH_SUBSCRIPTION = "fetchSubscription";

const BASIC_LINK_ENDING = FeatureType.CONVERSATION;

const FEATURE_REQUEST_LIMITS_BY_NAME: Record<string, number> = {
  [FeatureType.CONVERSATION]: 7,
  [FeatureType.IMAGE]: 3,
  [FeatureType.VIDEO]: 1,
  [FeatureType.MUSIC]: 1,
  [FeatureType.CODE]: 5,
};

const LAST_SEGMENT_TO_FEATURE_TYPE: Record<string, string> = {
  conversation: FeatureType.CONVERSATION,
  image: FeatureType.IMAGE,
  video: FeatureType.VIDEO,
  music: FeatureType.MUSIC,
  code: FeatureType.CODE,
};

const STABLE_FEATURE_LIMIT_NUMBER = 2;
const ZERO_USERS_REQUEST = 0;
const prerequisiteText =
  "Please only provide the code, and no additional explanations, and after code part explain what you wrote for a beginner in coding , do it relying on complexity of the request.Do a margin for one row after code part";

export {
  API_SUBSCRIPTION,
  FETCH_SUBSCRIPTION,
  API_CONVERSATION,
  API_CODE,
  API_MUSIC,
  API_VIDEO,
  FeatureType,
  FEATURE_REQUEST_LIMITS_BY_NAME,
  STABLE_FEATURE_LIMIT_NUMBER,
  prerequisiteText,
  FETCH_CODE_MESSAGES,
  FETCH_CONVERSATION_MESSAGES,
  FETCH_IMAGE,
  FETCH_MUSIC,
  FETCH_VIDEO,
  ZERO_USERS_REQUEST,
  API_LIMIT,
  FETCH_LIMIT,
  LAST_SEGMENT_TO_FEATURE_TYPE,
  BASIC_LINK_ENDING,
  API_STRIPE,
  FETCH_STRIPE,
};
