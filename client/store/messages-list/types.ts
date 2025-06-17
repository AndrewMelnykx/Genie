import { AppAsyncThunkConfig } from "helpers/types";
import { AsyncThunk } from "@reduxjs/toolkit";

// interface requestAIHandlingTypes {
//   conversationMessages: MessageType[];
//   codeMessages: MessageType[];
//   imagesData: MessageType[];
//   musicData: MusicFile[];
//   videoData: VideoFileFullResponse | null;
//   dataFromStorage: string;
//   apiLimitCount: number;
// }

type RoleType = "user" | "system" | "bot";

interface MessageType {
  role?: RoleType;
  content?: string;
  image_url?: string;
  image_data?: string;
  mime_type?: string;
  prompt?: string;
}
type SubmitMode = "conversation-code" | "image" | "music" | "video";

type SubmitHandlerProps =
  | {
      mode: "conversation-code";
      dispatchAction: AsyncThunk<MessageType[], MessageType[], AppAsyncThunkConfig>;
      messagesData: MessageType[];
      prerequisiteFormText?: string;
    }
  | {
      mode: "image";
      dispatchAction: AsyncThunk<
        MessageType[],
        { prompt: string; messages: MessageType[] },
        AppAsyncThunkConfig
      >;
      messagesData: MessageType[];
    }
  | {
      mode: "music";
      dispatchAction: AsyncThunk<MusicFile[], { prompt: string }, AppAsyncThunkConfig>;
      musicData: MusicFile[];
    }
  | {
      mode: "video";
      dispatchAction: AsyncThunk<VideoFileFullResponse, { prompt: string }, AppAsyncThunkConfig>;
      videoData: string;
    };
type MusicGenerationRequest = {
  prompt: string;
};
interface MusicFile {
  file_url: string;
  type: string;
}
interface VideoFIle {
  link: string;
}
interface VideoFileFullResponse {
  completed_at: string;
  created_at: string;
  data_removed: boolean;
  error: string | null;
  id: string;
  input: {
    fps: number;
    fast?: boolean;
    width: number;
    height: number;
    prompt: string;
    num_frames?: number;
    guidance_scale: number;
    negative_prompt?: string;
    num_inference_steps?: number;
  };
  logs: string;
  metrics: {
    predict_time: number;
    total_time: number;
  };
  output: string;
  started_at: string;
  status: string;
  urls: {
    get: string;
    cancel: string;
  };
  version: string;
}

export type {
  MessageType,
  SubmitMode,
  SubmitHandlerProps,
  MusicGenerationRequest,
  MusicFile,
  VideoFIle,
  VideoFileFullResponse,
};
