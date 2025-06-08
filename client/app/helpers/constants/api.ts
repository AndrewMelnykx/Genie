const API_CONVERSATION = "/api/conversation";
const API_CODE = "/api/code";
const API_MUSIC = "/api/music";
const API_VIDEO = "/api/video";
const API_LIMIT = "/api/limit";

const FETCH_CONVERSATION_MESSAGES = "fetchConversationMessagesList";
const FETCH_CODE_MESSAGES = "fetchCodeMessagesList";
const FETCH_IMAGE = "fetchImage";
const FETCH_MUSIC = "fetchMusic";
const FETCH_VIDEO = "fetchVideo";
const FETCH_LIMIT = "fetchLimit";

const IMAGE_API_LINK = "http://localhost:8000/generate-image";
const MUSIC_API_LINK = "https://api.musicfy.lol/v1/generate-music";
const VIDEO_API_LINK = "http://localhost:5000/generate_video";

enum FeatureType {
  CONVERSATION = "CONVERSATION",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  MUSIC = "MUSIC",
  CODE = "CODE",
}

const FEATURE_REQUEST_LIMITS_BY_NAME: Record<FeatureType, number> = {
  [FeatureType.CONVERSATION]: 2,
  [FeatureType.IMAGE]: 3,
  [FeatureType.VIDEO]: 1,
  [FeatureType.MUSIC]: 1,
  [FeatureType.CODE]: 5,
};

const STABLE_FEATURE_LIMIT_NUMBER = 3;
const ZERO_USERS_REQUEST = 0;
const prerequisiteText =
  "Please only provide the code, and no additional explanations, and after code part explain what you wrote for a beginner in coding , do it relying on complexity of the request.Do a margin for one row after code part";

export {
  API_CONVERSATION,
  API_CODE,
  API_MUSIC,
  API_VIDEO,
  IMAGE_API_LINK,
  MUSIC_API_LINK,
  VIDEO_API_LINK,
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
};
