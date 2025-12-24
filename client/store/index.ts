import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import requestAISlice from "./messages-list/slice";
import uiSlice from "./ui/slice";
import requestStatusSlice from "./features-request/slice";

import { requestAIHandlingTypes } from "./types";
import { UIInitialState } from "./ui/types";
import { RequestStatusStateType } from "./features-request/slice";

export interface RootState {
  requestAIData: requestAIHandlingTypes;
  uiState: UIInitialState;
  requestStatusState: RequestStatusStateType;
}

const RootReducer = combineReducers({
  requestAIData: requestAISlice.reducer,
  uiState: uiSlice.reducer,
  requestStatusState: requestStatusSlice.reducer,
});

const store = configureStore({ reducer: RootReducer });
const UseStoreDispatcher = (): StoreDispatcherTypes => store.dispatch;

export type StoreDispatcherTypes = typeof store.dispatch;

export { UseStoreDispatcher, RootReducer };
export const UseAppSelector = useSelector;
export default store;
