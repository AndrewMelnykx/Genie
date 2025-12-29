export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
// import { writeFile } from "fs/promises";
import Replicate from "replicate";

import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit";
import { FeatureType, input, statuses } from "utils/constants/api";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { userId } = auth();
    const body = await request.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: statuses.unauthorized });
    }
    const freeTrial = await checkApiLimit(FeatureType.VIDEO);
    if (!freeTrial) {
      return new NextResponse("Free trial has expired", { status: statuses.forbidden });
    }
    await incrementApiLimit(FeatureType.VIDEO);
    const response = await replicate.run(
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      { input: input(prompt) },
    );
    console.log("🎥 VIDEO URL(s):", response);

    return NextResponse.json(response);
  } catch (error) {
    console.error("Failed to process video generation", error);
    return new NextResponse("Internal Server Error", { status: statuses.badRequestError });
  }
}
