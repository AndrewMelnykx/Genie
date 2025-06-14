import { RootState, StoreDispatcherTypes } from "@/store/index";
import { imagesFormSchema } from "./constants/form";
import { formSchema } from "@/components/custom-form";
import { AsyncThunk } from "@reduxjs/toolkit";
import { z } from "zod";

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

type MessageValueType = typeof formSchema;

interface DispatchingApiLimit<TSchema extends z.ZodTypeAny> {
  submitHandlingPropFunction: (values: z.infer<TSchema>) => Promise<void>;
  featureName: string;
  fetchingApiLimitCount: AsyncThunk<number, string, AppAsyncThunkConfig>;
}

export type {
  AppAsyncThunkConfig,
  GeminiImageResponse,
  ConversationMessage,
  CustomFormHandler,
  DispatchingApiLimit,
  MessageValueType,
};
