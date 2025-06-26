"use client";

import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import { UseStoreDispatcher } from "../store";
import { fetchStripe } from "@/store/modals/actions";

interface SubscriptionButtonProps {
  isProPlan: boolean;
}

const SubscriptionButton = ({ isProPlan = false }: SubscriptionButtonProps) => {
  //ADD LOADING  HANDLING INTO REDUX

  //
  //   const dispatch = UseStoreDispatcher();

  //   const handleClick = () => {
  //     dispatch(fetchStripe());
  //   };
  return (
    <Button variant={isProPlan ? "default" : "premium"}>
      {isProPlan ? "Manage Subscription" : "Upgrade"}
      {!isProPlan && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
};

export { SubscriptionButton };
