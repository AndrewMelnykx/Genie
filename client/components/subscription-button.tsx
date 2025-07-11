"use client";

import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import { subscriptionValiditySelector } from "@/store/modals/selectors";

const SubscriptionButton = () => {
  const isProPlan = useSelector(subscriptionValiditySelector);

  return (
    <Button variant={isProPlan ? "default" : "premium"}>
      {isProPlan ? "Manage Subscription" : "Upgrade"}
      {!isProPlan && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
};

export { SubscriptionButton };
