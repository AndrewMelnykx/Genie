"use client";

import { MessageSquare } from "lucide-react";

import Heading from "@/components/heading";
import CustomForm from "@/components/custom-form";
import EmptyImage from "@/images/empty-conversation.png";

import { Empty } from "@/components/empty";
import { Loader } from "@/components/laoder";

import { useSelector } from "react-redux";

import { conversationMessagesDataSelector } from "@/store/messages-list/selectors";
import { ConversationMessages } from "@/components/messages";
import { fetchMessagesList } from "@/store/messages-list/actions";
import { useCustomForm, useSubmitHandler } from "@/helpers/custom-hooks";

const ConversationPage = () => {
  const form = useCustomForm();
  const messagesData = useSelector(conversationMessagesDataSelector);
  const onSubmit = useSubmitHandler({
    mode: "conversation-code",
    messagesData: messagesData,
    dispatchAction: fetchMessagesList,
    prerequisiteFormText: "",
  });

  const isLoading = form.formState.isSubmitting;
  const ifMessagesEmpty = messagesData.length === 0 && !isLoading;

  return (
    <div style={{ color: "black", fontSize: "20px" }}>
      <Heading
        title="Conversation"
        description="The newest conversation model from us"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <CustomForm form={form} onSubmit={onSubmit} placeholder="How do  I see in the dark?" />
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className=" p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {ifMessagesEmpty && <Empty label="The`re no messages yet" img={EmptyImage} />}
          <ConversationMessages messages={messagesData} />
        </div>
      </div>
    </div>
  );
};
export default ConversationPage;
