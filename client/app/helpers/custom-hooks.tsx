"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { StoreDispatcherTypes, UseStoreDispatcher } from "@/store/index";
import { useRouter } from "next/navigation";

import { MessageType, SubmitHandlerProps } from "@/store/types";
import { imagesFormSchema } from "@/constants/form";
import { formSchema } from "@/components/custom-form";

const useCustomForm = (schema = formSchema) => {
  return useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { prompt: "" },
  });
};

const handleDispatchModes = async (
  props: SubmitHandlerProps,
  prompt: string,
  dispatch: StoreDispatcherTypes,
) => {
  switch (props.mode) {
    case "conversation-code": {
      const userMessage: MessageType = {
        role: "user",
        content: props.prerequisiteFormText ? `${props.prerequisiteFormText} ${prompt}` : prompt,
      };
      await dispatch(props.dispatchMessageAction([...props.messagesData, userMessage]));
      if (props.featureTypeName) {
        await dispatch(props.dispatchFeatureLimitAction(props.featureTypeName));
      }
      break;
    }
    case "image": {
      await dispatch(props.dispatchAction({ prompt, messages: props.messagesData }));
      break;
    }
    case "music": {
      await dispatch(props.dispatchAction({ prompt }));
      break;
    }
    case "video": {
      await dispatch(props.dispatchAction({ prompt }));
      break;
    }
    default:
      console.warn(`Unhandled mode: ${props}`);
  }
};

const useSubmitHandler = (props: SubmitHandlerProps) => {
  const dispatch = UseStoreDispatcher();
  const router = useRouter();

  return async (values: z.infer<typeof imagesFormSchema | typeof formSchema>) => {
    try {
      await handleDispatchModes(props, values.prompt, dispatch);
    } catch (error) {
      console.error("Error submitting:", error);
    } finally {
      router.refresh();
    }
  };
};

export { useCustomForm, useSubmitHandler };
