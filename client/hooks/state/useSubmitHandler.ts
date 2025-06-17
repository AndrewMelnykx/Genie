"use-client";

import { handleDispatchByModes } from "@/helpers/state-funcs";
import { CustomFormHandler } from "@/helpers/types";
import { UseStoreDispatcher } from "@/store/index";
import { SubmitHandlerProps } from "@/store/types";
import { useRouter } from "next/navigation";
import { z } from "zod";

const useSubmitHandler = (props: SubmitHandlerProps) => {
  const dispatch = UseStoreDispatcher();
  const router = useRouter();

  return async (values: z.infer<CustomFormHandler>) => {
    try {
      await handleDispatchByModes(props, values.prompt, dispatch);
    } catch (error) {
      console.error("Error submitting:", error);
    } finally {
      router.refresh();
    }
  };
};
export { useSubmitHandler };
