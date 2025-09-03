export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

import { checkSubscription } from "@/lib/subscription";
import { auth, currentUser } from "@clerk/nextjs/server";
import { statuses } from "utils/constants/api";

export async function GET() {
  try {
    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user) {
      return new NextResponse("Unauthorized", { status: statuses.unauthorized });
    }
    const subscriptionValidationData = await checkSubscription(userId);
    return NextResponse.json(subscriptionValidationData);
  } catch (err) {
    console.error("[SUBSCRIPTION_ERROR]", err);
    return new NextResponse("Internal error", { status: statuses.internalServerError });
  }
}
