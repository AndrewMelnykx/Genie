import { createSlice } from "@reduxjs/toolkit";
import { ModalsInitialState } from "./types";
import { fetchStripe } from "./actions";

const initialState: ModalsInitialState = {
  isProModalVisible: false,
  stripePaymentData: "",
};

const modalsSlice = createSlice({
  name: "modals-state",
  initialState: initialState,
  reducers: {
    handleProModalVisibility: (state, action) => {
      state.isProModalVisible = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchStripe.fulfilled, (state, action) => {
      state.stripePaymentData = action.payload;
    });
  },
});
export const { handleProModalVisibility } = modalsSlice.actions;

export default modalsSlice;
