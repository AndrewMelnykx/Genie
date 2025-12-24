// store/requestStatusSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface RequestStatusStateType {
  [featureKey: string]: boolean;
}

const initialState: RequestStatusStateType = {};

const requestStatusSlice = createSlice({
  name: "requestStatus",
  initialState,
  reducers: {
    startRequest: (state, action) => {
      state[action.payload] = true;
    },
    endRequest: (state, action) => {
      state[action.payload] = false;
    },
  },
});

export const { startRequest, endRequest } = requestStatusSlice.actions;
export default requestStatusSlice;

export const selectIsSubmitting = (featureType: string) => (state: RootState) =>
  state.requestStatusState[featureType] || false;
