import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MessageType, MusicFile, MusicGenerationRequest, VideoFileFullResponse } from "../types";
import {
  API_CONVERSATION,
  API_CODE,
  IMAGE_API_LINK,
  FETCH_CONVERSATION_MESSAGES,
  FETCH_CODE_MESSAGES,
  FETCH_IMAGE,
  FETCH_MUSIC,
  API_MUSIC,
  FETCH_VIDEO,
  API_VIDEO,
  FETCH_LIMIT,
  API_LIMIT,
} from "@/constants/api";
// import { ApiFeatureTypeKeyof } from "@/helpers/types";

const fetchMessagesList = createAsyncThunk<MessageType[], MessageType[]>(
  FETCH_CONVERSATION_MESSAGES,
  async messages => {
    const response = await axios.post(API_CONVERSATION, { messages });
    return [...messages, response.data];
  },
);

const fetchCodeMessagesList = createAsyncThunk<MessageType[], MessageType[]>(
  FETCH_CODE_MESSAGES,
  async messages => {
    const response = await axios.post(API_CODE, { messages });
    return [...messages, response.data];
  },
);

const fetchImage = createAsyncThunk<MessageType[], { prompt: string; messages: MessageType[] }>(
  FETCH_IMAGE,
  async ({ prompt, messages }) => {
    const userMessage: MessageType = {
      role: "user",
      content: prompt,
    };

    const response = await axios.post(IMAGE_API_LINK, { prompt });

    const imageMessage: MessageType = {
      role: "system",
      content: response.data.content || "Here is your image",
      image_data: response.data.image_data,
      mime_type: response.data.mime_type || "image/png",
    };

    return [...messages, userMessage, imageMessage];
  },
);
const fetchMusic = createAsyncThunk<MusicFile[], MusicGenerationRequest>(
  FETCH_MUSIC,
  async musicData => {
    const response = await axios.post(API_MUSIC, musicData);
    return response.data;
  },
);

//HANDLE  video request

const fetchVideo = createAsyncThunk<VideoFileFullResponse, { prompt: string }>(
  FETCH_VIDEO,
  async ({ prompt }) => {
    const response = await axios.post(API_VIDEO, { prompt });

    return response.data;
  },
);
export const setVideoData = (videoData: string) => ({
  type: "SET_VIDEO_DATA",
  payload: videoData,
});

const fetchApiLimitCount = createAsyncThunk<number, string>(FETCH_LIMIT, async feature => {
  const response = await axios.get(`${API_LIMIT}?feature=${feature}`);
  // console.log("API DATA", response.data);
  return response.data.count;
});

export {
  fetchMessagesList,
  fetchCodeMessagesList,
  fetchImage,
  fetchMusic,
  fetchVideo,
  fetchApiLimitCount,
};
