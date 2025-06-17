import { FeatureType } from "helpers/constants/api";
import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

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
        status: 500,
      });
    }

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!messages || !Array.isArray(messages)) {
      return new NextResponse("Invalid messages payload", { status: 400 });
    }
    const freeTrial = await checkApiLimit(FeatureType.CODE);
    if (!freeTrial) {
      return new NextResponse("Free trial has expired", { status: 403 });
    }
    await incrementApiLimit(FeatureType.CODE);

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const history = messages.map(message => ({
      role: message.role === "user" ? "user" : "model",
      parts: [{ text: message.content }],
    }));

    const chat = model.startChat({ history });

    const lastUserMessage = messages[messages.length - 1]?.content;
    if (!lastUserMessage) {
      return new NextResponse("No user message to respond to", { status: 400 });
    }

    const result = await chat.sendMessage(lastUserMessage);

    return NextResponse.json({
      role: "system",
      content: result.response.text(),
    });
  } catch (error) {
    console.error("Failed to process code generation", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
