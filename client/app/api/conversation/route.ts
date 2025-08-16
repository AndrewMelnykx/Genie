import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { NextResponse } from "next/server";
import { FeatureType, statuses } from "helpers/constants/api";

interface MessageItem {
  role: string;
  content: string;
}

export async function POST(request: Request) {
  try {
    const { userId } = auth();
    const body = await request.json();
    const { messages }: { messages: MessageItem[] } = body;

    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      return new NextResponse("GEMINI_API_KEY is not defined!", {
        status: statuses.internalServerError,
      });
    }

    if (!userId) {
      return new NextResponse("Unauthorized", { status: statuses.unauthorized });
    }

    if (!messages || !Array.isArray(messages)) {
      return new NextResponse("Invalid messages payload", { status: statuses.badRequestError });
    }

    const freeTrial = await checkApiLimit(FeatureType.CONVERSATION);
    if (!freeTrial) {
      return NextResponse.json({ error: "Free trial expired" }, { status: statuses.forbidden });
    }
    await incrementApiLimit(FeatureType.CONVERSATION);

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const history = [
      ...messages.map(message => ({
        role: message.role === "user" ? "user" : "model",
        parts: [{ text: message.content }],
      })),
    ];

    const chat = model.startChat({ history });

    const lastUserMessage = messages[messages.length - 1]?.content;
    if (!lastUserMessage) {
      return new NextResponse("No user message to respond to", {
        status: statuses.badRequestError,
      });
    }

    const result = await chat.sendMessage(lastUserMessage);

    return NextResponse.json({
      role: "model",
      content: result.response.text(),
    });
  } catch (error) {
    console.error("Failed to process text generation", error);
    return new NextResponse("Internal Server Error", { status: statuses.internalServerError });
  }
}
