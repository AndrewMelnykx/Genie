export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import axios from "axios";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit";
import { FeatureType, MUSIC_API_LINK, statuses } from "utils/constants/api";

export async function POST(request: Request) {
  const token = process.env.MUSICFY_API_KEY;
  try {
    const { userId } = auth();
    const body = await request.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: statuses.unauthorized });
    }
    const freeTrial = await checkApiLimit(FeatureType.MUSIC);
    if (!freeTrial) {
      return new NextResponse("Free trial has expired", { status: statuses.forbidden });
    }
    await incrementApiLimit(FeatureType.MUSIC);
    const response = await axios.post(
      MUSIC_API_LINK,
      {
        prompt,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log("🎵 Music Response:", response.data);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Failed to process music generation", error);
    return new NextResponse("Internal Server Error", { status: statuses.internalServerError });
  }
}
