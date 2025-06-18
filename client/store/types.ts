import { MessageType, MusicFile, VideoFileFullResponse } from "./messages-list/types";

interface requestAIHandlingTypes {
  conversationMessages: MessageType[];
  codeMessages: MessageType[];
  imagesData: MessageType[];
  musicData: MusicFile[];
  videoData: VideoFileFullResponse | null;
  dataFromStorage: string;
  apiLimitCount: number;
}

export type { requestAIHandlingTypes };
