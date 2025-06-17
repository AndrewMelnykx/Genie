"use client";

import Heading from "@/components/heading";
import CustomForm from "@/components/custom-form";
import EmptyImage from "@/images/empty-code.png";
import ReactMarkdown from "react-markdown";

import { Empty } from "@/components/empty";
import { Loader } from "@/components/laoder";
import { Code } from "lucide-react";

import { useSelector } from "react-redux";
import { codeMessagesDataSelector } from "@/store/messages-list/selectors";

import { useApiLimitDispatcher, useCustomForm, useSubmitHandler } from "helpers/custom-hooks";

import { fetchApiLimitCount, fetchCodeMessagesList } from "@/store/messages-list/actions";
import { filterMessage } from "helpers/funcs";
import { FeatureType, prerequisiteText } from "helpers/constants/api";

const CodePage = () => {
  const form = useCustomForm();
  const codeMessagesData = useSelector(codeMessagesDataSelector);
  const onMessageSending = useSubmitHandler({
    mode: "conversation-code",
    messagesData: codeMessagesData,
    dispatchAction: fetchCodeMessagesList,
    prerequisiteFormText: prerequisiteText,
  });
  const onSubmitting = useApiLimitDispatcher({
    submitHandlingPropFunction: onMessageSending,
    featureName: FeatureType.CODE,
    fetchingApiLimitCount: fetchApiLimitCount,
  });

  const isLoading = form.formState.isSubmitting;
  const ifMessagesEmpty = codeMessagesData.length === 0 && !isLoading;
  const filteredMessages = filterMessage(codeMessagesData);
  const separatedMessages = filteredMessages.map(message => message.content).join("\n");

  return (
    <div style={{ color: "black", fontSize: "20px" }}>
      <Heading
        title="Code Generation"
        description="Generate code with text prompts"
        icon={Code}
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <CustomForm
            form={form}
            placeholder="Create switching button with React"
            onSubmit={onSubmitting}
          />
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className=" p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {ifMessagesEmpty && <Empty label="Code field empty for now ..." img={EmptyImage} />}
          <ReactMarkdown
            components={{
              pre: ({ node, ...props }) => (
                <div className="overflow-auto w-full m-2 bg-black/10 p-2 rounded-lg">
                  <pre {...props} />
                </div>
              ),
              code: ({ node, ...props }) => (
                <code className="rounded-lg p-1 bg-black/10 " {...props} />
              ),
            }}
          >
            {separatedMessages}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
export default CodePage;
