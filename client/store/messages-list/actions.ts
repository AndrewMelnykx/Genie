import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MessageType, MusicFile, MusicGenerationRequest, VideoFileFullResponse } from "./types";
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
import { AppAsyncThunkConfig, RejectedValue } from "@/helpers/types";
import { handleAxiosError } from "@/helpers/validating-funcs/error";
const fetchMessagesList = createAsyncThunk<
  MessageType[],
  MessageType[],
  { rejectValue: RejectedValue }
>(FETCH_CONVERSATION_MESSAGES, async (messages, { rejectWithValue }) => {
  try {
    const response = await axios.post(API_CONVERSATION, { messages });
    return [...messages, response.data];
  } catch (err) {
    return rejectWithValue(handleAxiosError(err));
  }
});

const fetchCodeMessagesList = createAsyncThunk<MessageType[], MessageType[]>(
  FETCH_CODE_MESSAGES,
  async (messages, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_CODE, { messages });
      return [...messages, response.data];
    } catch (err) {
      return rejectWithValue(handleAxiosError(err));
    }
  },
);

const fetchImage = createAsyncThunk<MessageType[], { prompt: string; messages: MessageType[] }>(
  FETCH_IMAGE,
  async ({ prompt, messages }, { rejectWithValue }) => {
    try {
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
    } catch (err) {
      return rejectWithValue(handleAxiosError(err));
    }
  },
);
const fetchMusic = createAsyncThunk<MusicFile[], MusicGenerationRequest>(
  FETCH_MUSIC,
  async (musicData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_MUSIC, musicData);
      return response.data;
    } catch (err) {
      return rejectWithValue(handleAxiosError(err));
    }
  },
);

//HANDLE  video request

const fetchVideo = createAsyncThunk<VideoFileFullResponse, { prompt: string }>(
  FETCH_VIDEO,
  async ({ prompt }, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_VIDEO, { prompt });

      return response.data;
    } catch (err) {
      return rejectWithValue(handleAxiosError(err));
    }
  },
);
export const setVideoData = (videoData: string) => ({
  type: "SET_VIDEO_DATA",
  payload: videoData,
});

const fetchApiLimitCount = createAsyncThunk<number, string, AppAsyncThunkConfig>(
  FETCH_LIMIT,
  async (feature, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_LIMIT}?feature=${feature}`);
      return response.data.count;
    } catch (err) {
      return rejectWithValue(handleAxiosError(err));
    }
  },
);

export {
  fetchMessagesList,
  fetchCodeMessagesList,
  fetchImage,
  fetchMusic,
  fetchVideo,
  fetchApiLimitCount,
};
