import { createSlice } from "@reduxjs/toolkit";
import { ModalsInitialState } from "./types";

const initialState: ModalsInitialState = {
  isProModalVisible: true,
};

const modalsSlice = createSlice({
  name: "modals-state",
  initialState: initialState,
  reducers: {
    handleProModalVisibility: (state, action) => {
      state.isProModalVisible = action.payload;
    },
  },
});
export const { handleProModalVisibility } = modalsSlice.actions;

export default modalsSlice;
