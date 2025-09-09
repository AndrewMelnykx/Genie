import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import requestAISlice from "./messages-list/slice";
import uiSlice from "./ui/slice";

import { requestAIHandlingTypes } from "./types";
import { UIInitialState } from "./ui/types";

export interface RootState {
  requestAIData: requestAIHandlingTypes;
  uiState: UIInitialState;
}

const RootReducer = combineReducers({
  requestAIData: requestAISlice.reducer,
  uiState: uiSlice.reducer,
});

const store = configureStore({ reducer: RootReducer });
const UseStoreDispatcher = (): StoreDispatcherTypes => store.dispatch;

export type StoreDispatcherTypes = typeof store.dispatch;

export { UseStoreDispatcher, RootReducer };
export const UseAppSelector = useSelector;
export default store;
