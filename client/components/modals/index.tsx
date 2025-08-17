"use client";

import { Check, Zap } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { useProModal } from "@/hooks/modals/useProModal";
import { routes } from "@/helpers/constants/route";
import { UseStoreDispatcher } from "@/store/index";
import { fetchStripe } from "@/store/modals/actions";
import { cn } from "@/lib/utils";

const ProModal = () => {
  // If it will be needed , then add useProModal into ,mobile side bar
  const proModal = useProModal();
  const dispatch = UseStoreDispatcher();

  const handleSubscription = () => {
    dispatch(fetchStripe());
  };
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
