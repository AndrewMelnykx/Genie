import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prisma.db";
import { stripe } from "@/lib/stripe";
import { statuses } from "@/helpers/constants/api";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (error: any) {
    return new NextResponse(`Webhook error: ${error.message}`, {
      status: statuses.badRequestError,
    });
  }
  const session = event.data.object as Stripe.Checkout.Session;

  if (!session?.metadata?.userId) {
    return new NextResponse("User id is required", { status: statuses.unauthorized });
  }

  if (event.type === "checkout.session.completed") {
    const subscription = await stripe.subscriptions.retrieve(session.subscription as string);

    await prismadb.userSubscription.create({
      data: {
        userId: session?.metadata?.userId,
        stripeSubscriptionId: subscription.id,
        stripeCustomerId: subscription.customer as string,
        stripePriceId: subscription.items.data[0].price.id,
        stripeCurrentPeriodEnd: new Date(subscription.items.data[0].current_period_end * 1000),
      },
    });
  }
  if (event.type === "invoice.payment_succeeded") {
    const subscription = await stripe.subscriptions.retrieve(session.subscription as string);

    await prismadb.userSubscription.update({
      where: {
        stripeCustomerId: subscription.id,
      },
      data: {
        stripeCustomerId: subscription.items.data[0].price.id,
        stripeCurrentPeriodEnd: new Date(subscription.items.data[0].current_period_end * 1000),
      },
    });
  }
  return new NextResponse(null, { status: statuses.success });
}
