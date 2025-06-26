import { createSlice } from "@reduxjs/toolkit";
import { ModalsInitialState } from "./types";
import { fetchStripe, fetchSubscription } from "./actions";

const initialState: ModalsInitialState = {
  isProModalVisible: false,
  stripePaymentData: "",
  subscriptionData: false,
};

const modalsSlice = createSlice({
  name: "modals-state",
  initialState: initialState,
  reducers: {
    handleProModalVisibility: (state, action) => {
      state.isProModalVisible = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchStripe.fulfilled, (state, action) => {
        state.stripePaymentData = action.payload;
      })
      .addCase(fetchSubscription.fulfilled, (state, action) => {
        state.subscriptionData = action.payload;
      });
  },
});
export const { handleProModalVisibility } = modalsSlice.actions;

export default modalsSlice;
