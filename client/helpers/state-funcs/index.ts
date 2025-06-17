import { StoreDispatcherTypes } from "@/store/index";
import { DispatchingApiLimit, MessageValueType } from "../types";
import { MessageType, SubmitHandlerProps } from "@/store/types";

const handleDispatchByModes = async (
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
      await dispatch(props.dispatchAction([...props.messagesData, userMessage]));
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

const handleApiLimitDispatcher = async (
  dispatch: StoreDispatcherTypes,
  props: DispatchingApiLimit<MessageValueType>,
) => {
  dispatch(props.fetchingApiLimitCount(props.featureName));
};

export { handleDispatchByModes, handleApiLimitDispatcher };
