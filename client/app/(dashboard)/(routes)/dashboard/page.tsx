"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

import { routes } from "helpers/constants/route";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl  md:text-4xl font-bold text-center">Enjoy the convenience of AI</h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with Djinnie - Make a wish !
        </p>
      </div>
      <div className="px-4 md:20-px lg:px-32 space-y-4">
        {routes.map(
          route =>
            route && (
              <Card
                onClick={() => router.push(route.href)}
                key={route.href}
                className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md ", route.bg ?? "bg-gray-300")}>
                    {route.icon && <route.icon className={cn("w-8 h-8", route.color)} />}
                  </div>
                  <div className="font-semibold">{route.label}</div>
                </div>
                <ArrowRight className="w-5 h-5" />
              </Card>
            ),
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
