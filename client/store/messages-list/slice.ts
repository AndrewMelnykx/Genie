import { createSlice } from "@reduxjs/toolkit";

import { requestAIHandlingTypes } from "../types";
import {
  fetchCodeMessagesList,
  fetchImage,
  fetchMessagesList,
  fetchMusic,
  fetchVideo,
} from "./actions";

const initialAIDataState: requestAIHandlingTypes = {
  conversationMessages: [],
  codeMessages: [],
  imagesData: [],
  musicData: [],
  videoData: null,
  dataFromStorage: "",
};
const requestAISlice = createSlice({
  name: "conversation-data",
  initialState: initialAIDataState,
  reducers: {
    handleConversationAI: (state, action) => {
      state.conversationMessages = action.payload;
    },
    handleCodeAI: (state, action) => {
      state.codeMessages = action.payload;
    },
    handleImagesFetch: (state, action) => {
      state.imagesData = action.payload;
    },
    handleMusicFetch: (state, action) => {
      state.musicData = action.payload;
    },
    handleVideoFetch: (state, action) => {
      state.videoData = action.payload;
    },
    handlePushingStorage: (state, action) => {
      state.dataFromStorage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessagesList.fulfilled, (state, action) => {
      state.conversationMessages = action.payload;
    });
    builder.addCase(fetchCodeMessagesList.fulfilled, (state, action) => {
      state.codeMessages = action.payload;
    });
    builder.addCase(fetchImage.fulfilled, (state, action) => {
      state.imagesData = action.payload;
    });
    builder.addCase(fetchMusic.fulfilled, (state, action) => {
      state.musicData = action.payload;
    });
    builder.addCase(fetchVideo.fulfilled, (state, action) => {
      state.videoData = action.payload;
    });
  },
});
export const {
  handleConversationAI,
  handleCodeAI,
  handleImagesFetch,
  handlePushingStorage,
} = requestAISlice.actions;

export default requestAISlice;
