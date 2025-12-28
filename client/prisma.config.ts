import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DIRECT_URL"),
    shadowDatabaseUrl: env("DIRECT_URL"),
  },
});

// NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_b3JpZW50ZWQtZmx5LTc2LmNsZXJrLmFjY291bnRzLmRldiQ
// CLERK_SECRET_KEY=sk_test_zxs7V1WbpDK82Kk1WsbWObpxgUoh5cak2Eeih3wxhm

// NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
// NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

// NEXT_PUBLIC_CLERK_AFTER__SIGN_IN_URL=/dashboard
// NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

// GEMINI_API_KEY=AIzaSyAuQr-RpKaoAsRtK2WoeATHtvZ0SVOonOs
// NEXT_PUBLIC_REPLICATE_API_KEY=r8_Qcq3uOpHzDBDMjs4Kb3GbEDjlCpb8g32Sxb54
// # REPLICATE_API_TOKEN=r8_Qcq3uOpHzDBDMjs4Kb3GbEDjlCpb8g32Sxb54
// NEXT_PUBLIC_CRISP_ID=46cccc0f-686c-4e00-97e3-ea59feefdcbb

// MUSICFY_API_KEY=cm9wxw81s0001l20d07ewgk5g

// # Connect to Supabase via connection pooling
//  DATABASE_URL="postgresql://postgres.vmppldymronmjjbycznd:UIlDvnlZsktd1p2q@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

// #NEW VERSION OF URL
// # DATABASE_URL="postgresql://vmppldymronmjjbycznd:UIlDvnlZsktd1p2q@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true&sslmode=require"

// # Direct connection to the database. Used for migrations EX DIRECT URL
// # SHADOW_DATABASE_URL="postgresql://postgres.vmppldymronmjjbycznd:UIlDvnlZsktd1p2q@aws-0-us-east-1.pooler.supabase.com:5432/postgres"
// DIRECT_URL="postgresql://postgres.vmppldymronmjjbycznd:UIlDvnlZsktd1p2q@aws-0-us-east-1.pooler.supabase.com:5432/postgres"

// STRIPE_API_KEY=sk_test_51RcNglPQ32iG0ibNyatUni9kJQF2TlrQLMQgNuWOaNq8A3vCk41Jh9oVfMioi7EKj00jr6kQiJv3XNNCCA27g9O100RjljAJ4y

// # For stripe correct worjing in production chgange to your actual url
// NEXT_PUBLIC_APP_URL=http://localhost:3000

// STRIPE_WEBHOOK_SECRET=whsec_4ab3ac3a64bfc1a029c548cde9f631dce594673430cfae70be72384bb1cca1d4
// generator client {
//   provider = "prisma-client"
//   output   = "../lib/generated/prisma"

// }

// datasource db {
//   provider = "postgresql"

// }

// model UserApiLimit {
// id String @id @default(cuid())
// userId String
// count Int @default(0)
// feature String
// createdAt DateTime @default(now())
// updatedAt DateTime @updatedAt
// @@unique([userId,feature])
// }

// model UserSubscription {
//   id String @id @default(cuid())
//   userId String @unique
//   stripeCustomerId String? @unique @map(name:"stripe_customer_id")
//   stripeSubscriptionId String? @unique @map(name:"stripe_subscription_id")
//   stripePriceId String?  @map(name:"stripe_price_id")
//   stripeCurrentPeriodEnd DateTime? @map(name:"stripe_current_period_end")
// }import { DAY_IN_MS } from "@/helpers/constants/form";
// import prismadb from "./db";

// const checkSubscription = async (userId: string) => {
//   if (!userId) {
//     console.log("WRONG USER ID!!!!");
//     return false;
//   }

//   const userSubscription = await prismadb.userSubscription.findUnique({
//     where: {
//       userId: userId,
//     },
//     select: {
//       stripeCustomerId: true,
//       stripeCurrentPeriodEnd: true,
//       stripeSubscriptionId: true,
//       stripePriceId: true,
//     },
//   });
//   if (!userSubscription) {
//     return false;
//   }
//   const isValidSubscription =
//     userSubscription.stripePriceId &&
//     userSubscription.stripeCurrentPeriodEnd &&
//     userSubscription.stripeCurrentPeriodEnd.getTime() + DAY_IN_MS > Date.now();
//   return Boolean(isValidSubscription);
// };

// export { checkSubscription };
// import { PrismaClient } from "@/lib/generated/prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";

// const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

// declare const globalThis: {
//   prismaGlobal?: PrismaClient;
// };

// const prismadb = globalThis.prismaGlobal ?? new PrismaClient({ adapter });
// if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prismadb;

// export default prismadb;
// import "dotenv/config";
// import { defineConfig, env } from "prisma/config";

// export default defineConfig({
//   schema: "prisma/schema.prisma",
//   migrations: {
//     path: "prisma/migrations",
//   },
//   datasource: {
//     url: env("DIRECT_URL"),
//   },
// });
//  Failed to load resource: the server responded with a status of 500 ()Understand this error
// api/limit?feature=conversation:1  Failed to load resource: the server responded with a status of 500 ()Understand this error
// api/subscription:1  Failed to load resource: the server responded with a status of 500 ()Understand this error
// api/subscription:1  Failed to load resource: the server responded with a status of 500 ()Understand this error
// api/conversation:1  Failed to load resource: the server responded with a status of 500 ()Understand this error
// api/limit?feature=conversation:1  Failed to load resource: the server responded with a status of 500 ()Understand this error
