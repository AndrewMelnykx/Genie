import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_API_KEY || "", {
  apiVersion: "2025-05-28.basil",
  typescript: true,
});

export { stripe };
