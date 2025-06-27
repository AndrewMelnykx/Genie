"use client";

import { Zap } from "lucide-react";
import { Button } from "./ui/button";

interface SubscriptionButtonProps {
  isProPlan: boolean;
}

const SubscriptionButton = ({ isProPlan = false }: SubscriptionButtonProps) => {
  //ADD LOADING  HANDLING INTO REDUX

  return (
    <Button variant={isProPlan ? "default" : "premium"}>
      {isProPlan ? "Manage Subscription" : "Upgrade"}
      {!isProPlan && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
};

export { SubscriptionButton };
