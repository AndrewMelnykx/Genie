"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { FreeCounter } from "@/components/free-counter";
import { routes } from "helpers/constants/route";

import { BASIC_LINK_ENDING } from "helpers/constants/api";
import { getFeatureTypeFromUrl } from "@/helpers/validating-funcs";
import { fetchApiLimitCount } from "@/store/messages-list/actions";
import { UseStoreDispatcher } from "@/store/index";
import { fetchSubscription } from "@/store/ui/actions";
// import { handleThemeToggling } from "@/store/ui/slice";

const Sidebar = () => {
  const pathname = usePathname();
  const dispatch = UseStoreDispatcher();

  const featureType = getFeatureTypeFromUrl(pathname) ?? BASIC_LINK_ENDING;

  useEffect(() => {
    const handleApiLimitCount = async () => {
      await dispatch(fetchApiLimitCount(featureType));
      await dispatch(fetchSubscription());
    };
    handleApiLimitCount();
  }, [featureType, dispatch]);

  //FEATURE TO SWITCH THEME
  // const handleClick = () => {
  //   dispatch(handleThemeToggling("dark"));
  // };

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <h1
            className={cn(
              "text-[3.2rem] w-[80%] text-center   pb-2 font-maya text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600",
              "transition-all ",
            )}
          >
            <i>GENIE</i>
            {/* <button className="bg-white w-100 h-100" onClick={handleClick}>
              123
            </button> */}
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map(
            route =>
              route && (
                <Link
                  href={route.href}
                  key={route.href}
                  className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white text-bl hover:bg-white/10 rounded-lg transition ",
                    pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
                  )}
                >
                  <div className="flex flex-items-center flex-1">
                    <route.icon className={cn("h-5 w-5 mr-3", route.iconColor)} strokeWidth={2} />
                    <span> {route.label}</span>
                  </div>
                </Link>
              ),
          )}
        </div>
      </div>
      <FreeCounter featureType={featureType} />
    </div>
  );
};

export default Sidebar;
