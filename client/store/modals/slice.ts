import { createSlice } from "@reduxjs/toolkit";
import { ModalsInitialState } from "./types";
import { fetchStripe, fetchSubscription } from "./actions";

//Check do you actually need to receive the error or not
const initialState: ModalsInitialState = {
  isProModalVisible: false,
  stripePaymentData: "",
  subscriptionData: false,
  error: "",
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
      })
      .addCase(fetchSubscription.rejected, (state, action) => {
        state.error = action.payload?.error;
      });
  },
});
export const { handleProModalVisibility } = modalsSlice.actions;

export default modalsSlice;
