import { createSlice } from "@reduxjs/toolkit";

import { fetchStripe, fetchSubscription } from "./actions";
import { UIInitialState } from "./types";

//Check do you actually need to receive the error or not
const initialState: UIInitialState = {
  isProModalVisible: false,
  stripePaymentData: "",
  subscriptionData: false,
  theme: "light",
  error: "",
};

const uiSlice = createSlice({
  name: "modals-state",
  initialState: initialState,
  reducers: {
    handleProModalVisibility: (state, action) => {
      state.isProModalVisible = action.payload;
    },
    handleThemeToggling: (state, action) => {
      state.theme = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchStripe.fulfilled, (state, action) => {
        state.stripePaymentData = action.payload;
      })
      .addCase(fetchSubscription.fulfilled, (state, action) => {
        state.subscriptionData = action.payload;
      })
      .addCase(fetchSubscription.rejected, (state, action) => {
        state.error = action.payload?.error;
      });
  },
});
export const { handleProModalVisibility, handleThemeToggling } = uiSlice.actions;

export default uiSlice;
