"use client";

import Heading from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { subscriptionValiditySelector } from "@/store/modals/selectors";

import { Settings } from "lucide-react";
import { useSelector } from "react-redux";

const SettingsPage = () => {
  const isProPlan = useSelector(subscriptionValiditySelector);

  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings"
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4 ">
        <div className="text-muted-foreground text-sm">
          {isProPlan ? "You are using Pro Plan" : "You are using Free Plan"}
        </div>
        <SubscriptionButton isProPlan={isProPlan} />
      </div>
    </div>
  );
};

export default SettingsPage;
