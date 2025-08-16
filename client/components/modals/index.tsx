"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useProModal } from "@/hooks/modals/useProModal";
import { Badge } from "@/components/ui/badge";
import { routes } from "@/helpers/constants/route";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { UseStoreDispatcher } from "../../store";
import { fetchStripe } from "@/store/modals/actions";

const ProModal = () => {
  // If it will be needed , then add useProModal into ,mobile side bar
  const proModal = useProModal();
  const dispatch = UseStoreDispatcher();

  const handleSubscription = () => {
    dispatch(fetchStripe());
  };
  //POSSIBLY SOLUTION IS CHANGE bg to bgColor IN ROUTE NAMING
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className=" flex-items-center gap-x-2 font-bold py-1">
              Upgrade to Pro
              <Badge className="uppercase text-sm py-1 ml-2" variant={"premium"}>
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {routes.map(route =>
              route ? (
                <Card
                  key={route?.label}
                  className="p-3 border-black/5 flex items-center justify justify-between"
                >
                  <div className="flex items-center gap-x-4 ">
                    <div className={cn("p-2 w-fit rounded-lg", route?.iconColor)}>
                      <route.icon className={cn("w-6 h-6", route?.iconColor)} />
                    </div>
                    <div className="font-semibold text-sm">{route.label}</div>
                  </div>
                  <Check className="text-primary w-5 h-5 " />
                </Card>
              ) : null,
            )}
          </DialogDescription>
          <DialogFooter>
            <Button
              size={"lg"}
              variant={"premium"}
              className="w-full mt-2 "
              onClick={handleSubscription}
            >
              Upgrade <Zap className="w-4 h-4 ml-2 fill-white" />
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export { ProModal };
