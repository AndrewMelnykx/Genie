import { RootState, StoreDispatcherTypes } from "@/store/index";
import { imagesFormSchema } from "./constants/form";
import { formSchema } from "@/components/custom-form";

interface ConversationMessage {
  role: "user" | "system";
  content: string;
}

type CustomFormHandler = typeof imagesFormSchema | typeof formSchema;
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
export type { AppAsyncThunkConfig, GeminiImageResponse, ConversationMessage, CustomFormHandler };
