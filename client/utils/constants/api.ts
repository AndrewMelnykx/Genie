const input = (prompt: string) => {
  return {
    fps: 24,
    width: 1024,
    height: 576,
    prompt: prompt,
    guidance_scale: 17.5,
    negative_prompt: "very blue, dust, noisy, washed out, ugly, distorted, broken",
  };
};

const FeatureType = {
  CONVERSATION: "conversation",
  IMAGE: "image",
  VIDEO: "video",
  MUSIC: "music",
  CODE: "code",
};

const statuses = {
  success: 200,
  forbidden: 403,
  notFound: 404,
  internalServerError: 500,
  unauthorized: 401,
  badRequestError: 400,
};

const IMAGE_API_LINK = `${process.env.NEXT_PUBLIC_API_URL}/generate-image`;
const MUSIC_API_LINK = "https://api.musicfy.lol/v1/generate-music";
const VIDEO_API_LINK = "http://localhost:5000/generate_video";

export { FeatureType, statuses, IMAGE_API_LINK, MUSIC_API_LINK, VIDEO_API_LINK, input };
