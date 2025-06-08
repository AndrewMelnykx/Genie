import { NextApiRequest, NextApiResponse } from "next";
import { getApiLimitCount } from "@/lib/api-limit";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const apiLimitCount = await getApiLimitCount();
    res.status(200).json({ count: apiLimitCount });
  } catch (error) {
    console.error("Failed to fetch DB limit");
    res.status(500).json({ error: "Internal server error" });
  }
}
