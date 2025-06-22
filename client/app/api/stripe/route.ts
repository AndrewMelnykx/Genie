import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";
import prismadb from "@/lib/prisma.db";
import { statuses } from "@/helpers/constants/api";

const settingsUrl = absoluteUrl("/settings");

export async function GET() {
  try {
    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user) {
      return new NextResponse("Unauthorized", { status: statuses.unauthorized });
    }
    const userSubscription = await prismadb.userSubscription.findUnique({
      where: { userId },
    });
    if (userSubscription && userSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: settingsUrl,
      });
      return new NextResponse(JSON.stringify({ url: stripeSession.url }));
    }
    const checkUserStripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ["card", "blik"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: user.emailAddresses[0].emailAddress,
      line_items: [
        {
          price_data: {
            currency: "USD",
            product_data: {
              name: "Genie Pro",
              description: "Unlimited AI Solutions",
            },
            unit_amount: 500,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
    });
    return new NextResponse(JSON.stringify({ url: checkUserStripeSession.url }));
  } catch (err) {
    console.error("[STRIPE_ERROR]", err);
    return new NextResponse("Internal error", { status: statuses.internalServerError });
  }
}
