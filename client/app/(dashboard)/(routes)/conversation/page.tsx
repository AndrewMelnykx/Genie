"use client";

import { MessageSquare } from "lucide-react";
import { useSelector } from "react-redux";

import Heading from "@/components/heading";
import CustomForm from "@/components/custom/form";
import EmptyImage from "@/images/empty-conversation.png";

import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";

import { conversationMessagesDataSelector } from "@/store/messages-list/selectors";
import { ConversationMessages } from "@/components/messages";
import { fetchApiLimitCount, fetchMessagesList } from "@/store/messages-list/actions";
import { FeatureType } from "@/constants/api";
import { useCustomForm } from "@/hooks/forms/useCustomForm";
import { useSubmitHandler } from "@/hooks/state/useSubmitHandler";
import { useApiLimitDispatcher } from "@/hooks/state/useApiLimitDispatcher";

const ConversationPage = () => {
  const form = useCustomForm();
  const messagesData = useSelector(conversationMessagesDataSelector);

  const onMessageSending = useSubmitHandler({
    mode: "conversation-code",
    messagesData: messagesData,
    dispatchAction: fetchMessagesList,
    prerequisiteFormText: "",
    featureKey: FeatureType.CONVERSATION,
  });

  const onSubmitting = useApiLimitDispatcher({
    submitHandlingPropFunction: onMessageSending,
    featureName: FeatureType.CONVERSATION,
    fetchingApiLimitCount: fetchApiLimitCount,
  });

  const isLoading = form.formState.isSubmitting;
  const ifMessagesEmpty = messagesData.length === 0 && !isLoading;

  return (
    <div className="text-black dark:text-white text-[20px]">
      <Heading
        title="Conversation"
        description="The newest conversation model from us"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <CustomForm form={form} onSubmit={onSubmitting} placeholder="How do I see in the dark?" />
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {/* <Empty label="There are no messages yet" img={EmptyImage} ifIsEmpty={ifMessagesEmpty} /> */}
          <ConversationMessages messages={messagesData} />
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
