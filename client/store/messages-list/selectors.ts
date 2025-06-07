import { RootState } from "../index";

const conversationMessagesDataSelector = (state: RootState) =>
  state.requestAIData.conversationMessages;

const codeMessagesDataSelector = (state: RootState) =>
  state.requestAIData.codeMessages;
const imagesDataSelector = (state: RootState) => state.requestAIData.imagesData;

const musicDataSelector = (state: RootState) => state.requestAIData.musicData;
const videoDataSelector = (state: RootState) => state.requestAIData.videoData;
const parsedSelector = (state: RootState) =>
  state.requestAIData.dataFromStorage;

export {
  codeMessagesDataSelector,
  conversationMessagesDataSelector,
  imagesDataSelector,
  musicDataSelector,
  videoDataSelector,
  parsedSelector,
};
