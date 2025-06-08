import { auth } from "@clerk/nextjs/server";

import prismadb from "./prisma.db";
import {
  FEATURE_REQUEST_LIMITS_BY_NAME,
  STABLE_FEATURE_LIMIT_NUMBER,
  ZERO_USERS_REQUEST,
} from "@/constants/api";

const incrementApiLimit = async (feature: string): Promise<void> => {
  const { userId } = auth();
  if (!userId) {
    return;
  }
  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
      feature,
    },
  });
  if (userApiLimit) {
    await prismadb.userApiLimit.update({
      where: {
        userId,
        feature,
      },
      data: {
        count: userApiLimit.count + 1,
      },
    });
  } else {
    await prismadb.userApiLimit.create({
      data: { userId, feature, count: 1 },
    });
  }
};

const checkApiLimit = async (feature: keyof typeof FEATURE_REQUEST_LIMITS_BY_NAME) => {
  const { userId } = auth();
  if (!userId) {
    return false;
  }
  const maxFreeCount = FEATURE_REQUEST_LIMITS_BY_NAME[feature] ?? STABLE_FEATURE_LIMIT_NUMBER;
  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId, feature },
  });
  if (!userApiLimit || userApiLimit.count < maxFreeCount) {
    return true;
  } else {
    return false;
  }
};

const getApiLimitCount = async () => {
  const { userId } = auth();
  if (!userId) {
    return ZERO_USERS_REQUEST;
  }
  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });
  if (!userApiLimit) {
    return ZERO_USERS_REQUEST;
  }
  return userApiLimit.count;
};
export { incrementApiLimit, checkApiLimit, getApiLimitCount };
