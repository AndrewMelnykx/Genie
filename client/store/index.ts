import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { requestAIHandlingTypes } from "./types";
import { useSelector } from "react-redux";
import requestAISlice from "./messages-list/slice";

export interface RootState {
  requestAIData: requestAIHandlingTypes;
}

const RootReducer = combineReducers({
  requestAIData: requestAISlice.reducer,
});

const store = configureStore({ reducer: RootReducer });
const UseStoreDispatcher = (): StoreDispatcherTypes => store.dispatch;

export type StoreDispatcherTypes = typeof store.dispatch;

export { UseStoreDispatcher, RootReducer };
export const UseAppSelector = useSelector;
export default store;
