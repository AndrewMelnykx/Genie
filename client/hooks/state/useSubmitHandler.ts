"use-client";

import { useRouter } from "next/navigation";
import { z } from "zod";

import { handleDispatchByModes } from "@/helpers/state-funcs";
import { CustomFormHandler, RejectedValue } from "@/helpers/types";
import { UseStoreDispatcher } from "@/store/index";
import { SubmitHandlerProps } from "@/store/messages-list/types";

import { useProModal } from "@/hooks/modals/useProModal";
import { statuses } from "utils/constants/api";
import { useSelector } from "react-redux";
import { endRequest, selectIsSubmitting, startRequest } from "@/store/features-request/slice";

const useSubmitHandler = (props: SubmitHandlerProps & { featureKey: string }) => {
  const dispatch = UseStoreDispatcher();
  const proModal = useProModal();
  const router = useRouter();
  const isSubmitting = useSelector(selectIsSubmitting(props.featureKey));

  return async (values: z.infer<CustomFormHandler>) => {
    if (isSubmitting) return;
    dispatch(startRequest(props.featureKey));
    try {
      await handleDispatchByModes(props, values.prompt, dispatch);
    } catch (error: unknown) {
      if ((error as RejectedValue)?.statusCode === statuses.forbidden) {
        proModal.onOpen();
      }
    } finally {
      dispatch(endRequest(props.featureKey));
      router.refresh();
    }
  };
};
export { useSubmitHandler };
