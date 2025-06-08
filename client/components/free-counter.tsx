"use-client";

import { apiLimitCountSelector } from "@/store/messages-list/selectors";
import { useSelector } from "react-redux";
import { UseStoreDispatcher } from "../store";
import { useEffect, useState } from "react";
import { fetchApiLimitCount } from "@/store/messages-list/actions";
import { Card, CardContent } from "./ui/card";

const FreeCounter = () => {
  const [mounted, setMounted] = useState(false);
  const dispatch = UseStoreDispatcher();
  const apiCountData = useSelector(apiLimitCountSelector);

  useEffect(() => {
    dispatch(fetchApiLimitCount());
    setMounted(true);
  }, [dispatch]);

  if (!mounted) {
    return null;
  }

  return (
    <div px-3>
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2 flex ">
            <p>{apiCountData}</p> / {3} Free Generations
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { FreeCounter };
