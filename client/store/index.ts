import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { requestAIHandlingTypes } from "./types";
import { useSelector } from "react-redux";
import requestAISlice from "./messages-list/slice";
import { ModalsInitialState } from "./modals/types";
import modalsSlice from "./modals/slice";

export interface RootState {
  requestAIData: requestAIHandlingTypes;
  modalsState: ModalsInitialState;
}

const RootReducer = combineReducers({
  requestAIData: requestAISlice.reducer,
  modalsState: modalsSlice.reducer,
});

const store = configureStore({ reducer: RootReducer });
const UseStoreDispatcher = (): StoreDispatcherTypes => store.dispatch;

export type StoreDispatcherTypes = typeof store.dispatch;

export { UseStoreDispatcher, RootReducer };
export const UseAppSelector = useSelector;
export default store;
