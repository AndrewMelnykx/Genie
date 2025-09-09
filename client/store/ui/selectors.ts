import { RootState } from "..";

const proModalVisibilitySelector = (state: RootState) => state.uiState.isProModalVisible;
const subscriptionValiditySelector = (state: RootState) => state.uiState.subscriptionData;
const themeSelector = (state: RootState) => state.uiState.theme;

export { proModalVisibilitySelector, subscriptionValiditySelector, themeSelector };
