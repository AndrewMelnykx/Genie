import { auth } from "@clerk/nextjs/server";

import prismadb from "./prisma.db";
import { FEATURE_REQUEST_LIMITS_BY_NAME, STABLE_FEATURE_LIMIT_NUMBER } from "helpers/constants/api";

const incrementApiLimit = async (feature: string): Promise<void> => {
  const { userId } = auth();
  if (!userId) {
    return;
  }
  const alreadyExistedUser = await prismadb.userApiLimit.findUnique({
    where: {
      userId_feature: {
        userId,
        feature,
      },
    },
  });
  if (alreadyExistedUser) {
    await prismadb.userApiLimit.update({
      where: {
        userId_feature: {
          userId,
          feature,
        },
      },
      data: {
        count: alreadyExistedUser.count + 1,
      },
    });
  } else {
    await prismadb.userApiLimit.create({
      data: { userId, feature, count: 1 },
    });
  }
};

const checkApiLimit = async (feature: string) => {
  const { userId } = auth();
  if (!userId) {
    return false;
  }
  const maxFreeCount = FEATURE_REQUEST_LIMITS_BY_NAME[feature] ?? STABLE_FEATURE_LIMIT_NUMBER;
  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: { userId_feature: { userId, feature } },
  });
  if (!userApiLimit || userApiLimit.count < maxFreeCount) {
    return true;
  } else {
    return false;
  }
};

const getApiLimitCount = async (feature: string) => {
  const { userId } = auth();
  if (!userId) {
    return 0;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId_feature: {
        userId,
        feature,
      },
    },
  });

  return userApiLimit?.count || 0;
};
export { incrementApiLimit, checkApiLimit, getApiLimitCount };
