"use-client";

import { handleApiLimitDispatcher } from "@/helpers/state-funcs";
import { DispatchingApiLimit, MessageValueType } from "@/helpers/types";
import { UseStoreDispatcher } from "@/store/index";
import { useRouter } from "next/navigation";
import { z } from "zod";

const useApiLimitDispatcher = (props: DispatchingApiLimit<MessageValueType>) => {
  const dispatch = UseStoreDispatcher();
  const router = useRouter();

  return async (values: z.infer<MessageValueType>) => {
    try {
      await props.submitHandlingPropFunction(values);
      await handleApiLimitDispatcher(dispatch, props);
    } catch (error: unknown) {
      console.error("Error submitting:", error);
    } finally {
      router.refresh();
    }
  };
};
export { useApiLimitDispatcher };
