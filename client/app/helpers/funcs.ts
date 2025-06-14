import { MessageType } from "@/store/types";
import { FeatureType, LAST_SEGMENT_TO_FEATURE_TYPE, prerequisiteText } from "@/constants/api";
import { EnhancedGenerateContentResponse } from "@google/generative-ai";
// import { ApiFeatureTypeKeyof } from "./types";

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
function getFeatureTypeFromUrl(url: string): string | null {
  const lastSegment = url.split("/").filter(Boolean).pop();
  return lastSegment ? LAST_SEGMENT_TO_FEATURE_TYPE[lastSegment] : null;
}

export { filterMessage, validateGeminiResponse, getFeatureTypeFromUrl };
