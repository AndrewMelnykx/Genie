import { RootState, StoreDispatcherTypes } from "@/store/index";

type AppAsyncThunkConfig = {
  dispatch: StoreDispatcherTypes;
  state: RootState;
  extra?: unknown;
  rejectValue?: unknown;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
};

interface GeminiImageResponse {
  candidates?: {
    content: {
      parts: {
        inlineData: {
          data: string;
        };
        text?: string;
      }[];
    };
  }[];
}
export type { AppAsyncThunkConfig, GeminiImageResponse };
