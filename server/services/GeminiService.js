const fs = require("fs");
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function generateImagePrompt(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-image",
    generationConfig: {
      responseModalities: ["IMAGE"],
    },
  });

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const parts = response.candidates[0].content.parts;

    for (const part of parts) {
      if (part.inlineData) {
        const base64Data = part.inlineData.data;
        const buffer = Buffer.from(base64Data, "base64");

        fs.writeFileSync("gemini-native-image.png", buffer);

        return {
          success: true,
          image_data: base64Data,
          mime_type: part.inlineData.mimeType,
          role: "bot",
        };
      }
    }
    return null;
  } catch (error) {
    console.error("Error during generation:", error);
    throw error;
  }
}

module.exports = { generateImagePrompt };
