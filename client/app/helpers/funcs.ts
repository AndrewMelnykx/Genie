import { MessageType } from "@/store/types";
import { prerequisiteText } from "@/constants/api";
import { EnhancedGenerateContentResponse } from "@google/generative-ai";

const filterMessage = (codeMessagesData: MessageType[]) => {
  const filteredMessages = codeMessagesData.filter(message => {
    const trimmedContent = message.content?.trim();
    return !trimmedContent?.startsWith(prerequisiteText);
  });
  return filteredMessages;
};

function validateGeminiResponse(
  response: EnhancedGenerateContentResponse | undefined,
): response is Required<EnhancedGenerateContentResponse> {
  return !!(
    response !== undefined &&
    Array.isArray(response.candidates) &&
    response.candidates.length > 0 &&
    response.candidates[0]?.content?.parts?.length > 0 &&
    response.candidates[0].content.parts[0]?.inlineData?.data
  );
}
export { filterMessage, validateGeminiResponse };
