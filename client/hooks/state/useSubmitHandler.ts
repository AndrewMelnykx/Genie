"use-client";

import { handleDispatchByModes } from "@/helpers/state-funcs";
import { CustomFormHandler, RejectedValue } from "@/helpers/types";
import { UseStoreDispatcher } from "@/store/index";
import { SubmitHandlerProps } from "@/store/messages-list/types";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useProModal } from "@/hooks/modals/useProModal";
import { statues } from "@/helpers/constants/api";

const useSubmitHandler = (props: SubmitHandlerProps) => {
  const dispatch = UseStoreDispatcher();
  const router = useRouter();
  const proModal = useProModal();

  return async (values: z.infer<CustomFormHandler>) => {
    try {
      await handleDispatchByModes(props, values.prompt, dispatch);
    } catch (error: unknown) {
      if ((error as RejectedValue)?.statusCode === statues.forbidden) {
        proModal.onOpen();
      }
    } finally {
      router.refresh();
    }
  };
};
export { useSubmitHandler };
