import prismadb from "./prisma.db";
import { DAY_IN_MS } from "@/helpers/constants/form";

const checkSubscription = async (userId: string) => {
  if (!userId) {
    return false;
  }

  const userSubscription = await prismadb.userSubscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      stripeCustomerId: true,
      stripeCurrentPeriodEnd: true,
      stripeSubscriptionId: true,
      stripePriceId: true,
    },
  });
  if (!userSubscription) {
    return false;
  }
  const isValidSubscription =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now();

  return Boolean(isValidSubscription);
};

export { checkSubscription };
