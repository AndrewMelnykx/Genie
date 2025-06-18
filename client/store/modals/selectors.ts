import { RootState } from "..";

const proModalVisibilitySelector = (state: RootState) => state.modalsState.isProModalVisible;

export { proModalVisibilitySelector };
