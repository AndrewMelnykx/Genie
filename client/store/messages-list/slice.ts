import { createSlice } from "@reduxjs/toolkit";

import { requestAIHandlingTypes } from "../types";
import {
  fetchApiLimitCount,
  fetchCodeMessagesList,
  fetchImage,
  fetchMessagesList,
  fetchMusic,
  fetchVideo,
} from "./actions";
import { ZERO_USERS_REQUEST } from "helpers/constants/api";

const initialAIDataState: requestAIHandlingTypes = {
  conversationMessages: [],
  codeMessages: [],
  imagesData: [],
  musicData: [],
  videoData: null,
  dataFromStorage: "",
  apiLimitCount: ZERO_USERS_REQUEST,
};
const requestAISlice = createSlice({
  name: "conversation-data",
  initialState: initialAIDataState,
  reducers: {},
  extraReducers: builder => {
    //ADD .addMatcher here https://stackoverflow.com/questions/75469146/how-to-use-same-rejected-in-same-slice-in-redux-toolkit
    builder
      .addCase(fetchMessagesList.fulfilled, (state, action) => {
        state.conversationMessages = action.payload;
      })
      .addCase(fetchCodeMessagesList.fulfilled, (state, action) => {
        state.codeMessages = action.payload;
      })
      .addCase(fetchImage.fulfilled, (state, action) => {
        state.imagesData = action.payload;
      })
      .addCase(fetchMusic.fulfilled, (state, action) => {
        state.musicData = action.payload;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.videoData = action.payload;
      })
      .addCase(fetchApiLimitCount.fulfilled, (state, action) => {
        state.apiLimitCount = action.payload;
      });
  },
});
// export const { handleConversationAI, handleCodeAI, handleImagesFetch, handlePushingStorage } =
//   requestAISlice.actions;

export default requestAISlice;
