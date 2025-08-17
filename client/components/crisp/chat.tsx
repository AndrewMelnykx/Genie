"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispId = process.env.NEXT_PUBLIC_CRISP_ID;

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure(`${CrispId}`);
  }, []);
  return null;
};

export { CrispChat };
