"use-client";

import { apiLimitCountSelector } from "@/store/messages-list/selectors";
import { useSelector } from "react-redux";
import { UseStoreDispatcher } from "../store";
import { useEffect, useState } from "react";
import { fetchApiLimitCount } from "@/store/messages-list/actions";
import { Card, CardContent } from "./ui/card";
import {
  FEATURE_REQUEST_LIMITS_BY_NAME,
  STABLE_FEATURE_LIMIT_NUMBER,
} from "@/helpers/constants/api";

const FreeCounter = ({
  featureType,
}: {
  featureType: keyof typeof FEATURE_REQUEST_LIMITS_BY_NAME;
}) => {
  const [mounted, setMounted] = useState(false);
  const dispatch = UseStoreDispatcher();
  const apiCountData = useSelector(apiLimitCountSelector);

  useEffect(() => {
    dispatch(fetchApiLimitCount());
    setMounted(true);
    console.log(apiCountData);
  }, [dispatch]);
  useEffect(() => {
    if (mounted) {
      dispatch(fetchApiLimitCount());
    }
  }, [apiCountData, dispatch]);
  if (!mounted) {
    return null;
  }
  const maxCountByFeatureProp =
    FEATURE_REQUEST_LIMITS_BY_NAME[featureType] || STABLE_FEATURE_LIMIT_NUMBER;

  return (
    <div px-3 style={{ width: "90%", alignSelf: "center" }}>
      <Card className="bg-white/10 border-0">
        <CardContent className="py-4">
          <div className="text-center text-sm text-white mb-4 space-y-2 ">
            <p>
              {apiCountData} / {maxCountByFeatureProp} Free Generations{" "}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { FreeCounter };
