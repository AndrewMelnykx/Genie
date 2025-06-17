// import {
//   Code,
//   ImageIcon,
//   LayoutDashboard,
//   MessageSquare,
//   Music,
//   Settings,
//   VideoIcon,
// } from "lucide-react";
// import { Montserrat } from "next/font/google";

// const routes = [
//   {
//     label: "Dashboard",
//     icon: LayoutDashboard,
//     href: "/dashboard",
//     color: "text-sky-500",
//   },
//   {
//     label: "Conversation",
//     icon: MessageSquare,
//     href: "/conversation",
//     color: "text-violet-500",
//   },
//   {
//     label: "Image Generation",
//     icon: ImageIcon,
//     href: "/image",
//     color: "text-pink-700",
//   },
//   {
//     label: "Video Generation",
//     icon: VideoIcon,
//     href: "/video",
//     color: "text-orange-700",
//   },
//   {
//     label: "Music Generation",
//     icon: Music,
//     href: "/music",
//     color: "text-yellow-500",
//   },
//   {
//     label: "Code Generation",
//     icon: Code,
//     href: "/code",
//     color: "text-emerald-500",
//   },
//   {
//     label: "Settings",
//     icon: Settings,
//     href: "/settings",
//   },
// ];
// const tools = [
//   {
//     label: "Conversation",
//     icon: MessageSquare,
//     color: "text-violet-500",
//     bg: "bg-violet-500/10",
//     href: "conversation",
//   },

//   {
//     label: "Image Generation",
//     icon: ImageIcon,
//     href: "/image",
//     color: "text-pink-700",
//   },
//   {
//     label: "Music Generation",
//     icon: Music,
//     href: "/music",
//     color: "text-yellow-500",
//   },
//   {
//     label: "Video Generation",
//     icon: VideoIcon,
//     href: "/video",
//     color: "text-orange-700",
//   },

//   {
//     label: "Code Generation",
//     icon: Code,
//     href: "/code",
//     color: "text-emerald-500",
//   },
// ];
// const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

// const API_CONVERSATION = "/api/conversation";
// const API_CODE = "/api/code";
// const API_MUSIC = "/api/music";
// const API_VIDEO = "/api/video";

// const FETCH_CONVERSATION_MESSAGES = "fetchConversationMessagesList";
// const FETCH_CODE_MESSAGES = "fetchCodeMessagesList";
// const FETCH_IMAGE = "fetchImage";
// const FETCH_MUSIC = "fetchMusic";
// const FETCH_VIDEO = "fetchVideo";

// const IMAGE_API_LINK = "http://localhost:8000/generate-image";
// const MUSIC_API_LINK = "https://api.musicfy.lol/v1/generate-music";
// const VIDEO_API_LINK = "http://localhost:5000/generate_video";

// // const prerequisiteText =
// //   "Please only provide the code, and no additional explanations, and after code part explain what you wrote for a beginner in coding , do it relying on complexity of the request.Do a margin for one row after code part";

// const input = (prompt: string) => {
//   return {
//     fps: 24,
//     width: 1024,
//     height: 576,
//     prompt: prompt,
//     guidance_scale: 17.5,
//     negative_prompt: "very blue, dust, noisy, washed out, ugly, distorted, broken",
//   };
// };

// enum FeatureType {
//   CONVERSATION = "CONVERSATION",
//   IMAGE = "IMAGE",
//   VIDEO = "VIDEO",
//   MUSIC = "MUSIC",
//   CODE = "CODE",
// }
// const FEATURE_REQUEST_LIMITS_BY_NAME: Record<string, number> = {
//   CONVERSATION: 2,
//   IMAGE: 3,
//   VIDEO: 1,
//   MUSIC: 1,
//   CODE: 5,
// };

// const STABLE_FEATURE_LIMIT_NUMBER = 3;

// export {
//   routes,
//   montserrat,
//   tools,
//   // prerequisiteText,
//   API_CODE,
//   API_CONVERSATION,
//   API_MUSIC,
//   API_VIDEO,
//   FETCH_VIDEO,
//   FETCH_CONVERSATION_MESSAGES,
//   FETCH_CODE_MESSAGES,
//   FETCH_IMAGE,
//   FETCH_MUSIC,
//   IMAGE_API_LINK,
//   VIDEO_API_LINK,
//   MUSIC_API_LINK,
//   input,
//   STABLE_FEATURE_LIMIT_NUMBER,
//   FEATURE_REQUEST_LIMITS_BY_NAME,
//   FeatureType,
// };
