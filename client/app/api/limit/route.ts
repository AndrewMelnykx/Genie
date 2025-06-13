import { getApiLimitCount } from "@/lib/api-limit";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET(request: Request) {
  try {
    const userId = auth();
    const { searchParams } = new URL(request.url);
    const feature = searchParams.get("feature");

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!feature) {
      return new NextResponse("Missing feature parameter", { status: 400 });
    }
    const apiLimitCount = await getApiLimitCount(feature);

    return NextResponse.json({ count: apiLimitCount });
  } catch (error) {
    console.error("Failed to get api limit", error);
  }
}
