import { RootState } from "..";

const proModalVisibilitySelector = (state: RootState) => state.modalsState.isProModalVisible;
const subscriptionValiditySelector = (state: RootState) => state.modalsState.subscriptionData;

export { proModalVisibilitySelector, subscriptionValiditySelector };
