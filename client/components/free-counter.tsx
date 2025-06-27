"use-client";

import { apiLimitCountSelector } from "@/store/messages-list/selectors";
import { useSelector } from "react-redux";
import { UseStoreDispatcher } from "../store";
import { fetchApiLimitCount } from "@/store/messages-list/actions";
import { Card, CardContent } from "./ui/card";
import { FEATURE_REQUEST_LIMITS_BY_NAME, STABLE_FEATURE_LIMIT_NUMBER } from "@/constants/api";
import { useEffect } from "react";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/modals/useProModal";
import { subscriptionValiditySelector } from "@/store/modals/selectors";
import { fetchSubscription } from "@/store/modals/actions";

// FIX LOADING PAGE AN IN THE SAME TIME LOADING THE COUNTS FOR IT
//ADD THIS PRO PLAN TO THE STATE

const FreeCounter = ({ featureType }: { featureType: string }) => {
  const dispatch = UseStoreDispatcher();
  const apiCountData = useSelector(apiLimitCountSelector);
  const proModal = useProModal();
  const isProPlan = useSelector(subscriptionValiditySelector);
  if (isProPlan) {
    return null;
  }

  useEffect(() => {
    dispatch(fetchApiLimitCount(featureType));
  }, [featureType, dispatch]);
  useEffect(() => {
    dispatch(fetchSubscription());
  }, []);

  const maxCountByFeatureProp =
    FEATURE_REQUEST_LIMITS_BY_NAME[featureType] ?? STABLE_FEATURE_LIMIT_NUMBER;
  const progressValueData =
    (apiCountData / maxCountByFeatureProp) * 100 || STABLE_FEATURE_LIMIT_NUMBER;

  return (
    <div className="px-3" style={{ width: "90%", alignSelf: "center" }}>
      <Card className="bg-white/10 border-0">
        <CardContent className="py-4">
          <div className="text-center text-sm text-white mb-4 space-y-2 ">
            <p>
              {apiCountData} / {maxCountByFeatureProp} Free Generations
            </p>
            <Progress value={progressValueData} />
          </div>
          <Button className="w-full" variant="premium" onClick={proModal.onOpen}>
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export { FreeCounter };
