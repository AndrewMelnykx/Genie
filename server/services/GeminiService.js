const fs = require("fs");
const { GoogleGenAI, Modality } = require("@google/genai");

// const generateImagePrompt = async (prompt) => {
//   const apiKey = process.env.GEMINI_API_KEY;
//   const ai = new GoogleGenAI({ apiKey: apiKey });

//   const response = await ai.models.generateContent({
//     model: "models/gemini-1.5-pro",
//     contents: prompt,
//     config: {
//       responseModalities: ["Text", "Image"],
//     },
//   });

//   for (const part of response.candidates[0].content.parts) {
//     if (part.text) {
//       console.log(part.text);
//     } else if (part.inlineData) {
//       const imageData = part.inlineData.data;
//       const buffer = Buffer.from(imageData, "base64");
//       fs.writeFileSync("gemini-native-image.png", buffer);
//       console.log("Image saved as gemini-native-image.png");
//       //   res.set("Content-Type", part.inlineData.mimeType || "image/png");

//       const base64Image = buffer.toString("base64");
//       return {
//         content: "Image generated",
//         image_data: base64Image,
//         mime_type: part.inlineData.mimeType || "image/png",
//       };
//     }
//   }
//   return null;
// };

async function generateImagePrompt(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;
  console.log("API Key:", apiKey ? "Present" : "Missing"); // Check if API key is being read
  const ai = new GoogleGenAI({ apiKey: apiKey });

  const contents = prompt;
  console.log("Prompt:", contents); // Log the prompt being sent

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-preview-image-generation",
      contents: contents,
      config: {
        responseModalities: [Modality.TEXT, Modality.IMAGE],
      },
    });
    console.log("Response received:", response); // Log the entire response object
    for (const part of response.candidates[0].content.parts) {
      if (part.text) {
        console.log("Text Part:", part.text);
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        const buffer = Buffer.from(imageData, "base64");
        fs.writeFileSync("gemini-native-image.png", buffer);
        console.log("Image saved as gemini-native-image.png");
        const base64Image = buffer.toString("base64");
        return {
          content: "Image generated",
          image_data: base64Image,
          mime_type: part.inlineData.mimeType || "image/png",
        };
      }
    }
    return null; // If no image part is found
  } catch (error) {
    console.error("Error in generateImagePrompt:", error);
    throw error; // Re-throw the error to be caught by the router
  }
}

module.exports = { generateImagePrompt };
