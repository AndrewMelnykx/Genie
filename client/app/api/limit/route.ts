import { getApiLimitCount } from "@/lib/api-limit";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { statuses } from "@/helpers/constants/api";

export async function GET(request: Request) {
  try {
    const userId = auth();
    const { searchParams } = new URL(request.url);
    const feature = searchParams.get("feature");

    if (!userId) {
      return new NextResponse("Unauthorized", { status: statuses.unauthorized });
    }
    if (!feature) {
      return new NextResponse("Missing feature parameter", { status: statuses.badRequestError });
    }
    const apiLimitCount = await getApiLimitCount(feature);

    return NextResponse.json({ count: apiLimitCount });
  } catch (error) {
    console.error("Failed to get api limit", error);
  }
}
