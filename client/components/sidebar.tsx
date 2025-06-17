"use client";

import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/images/lamp.png";

import { cn } from "@/lib/utils";
import { FreeCounter } from "@/components/free-counter";
import { routes } from "helpers/constants/route";

import { montserrat } from "helpers/constants/style";
import { Cedarville, UncialAntiqua } from "helpers/fonts";

import { usePathname } from "next/navigation";
import { getFeatureTypeFromUrl } from "helpers/funcs";
import { BASIC_LINK_ENDING } from "helpers/constants/api";

const Sidebar = () => {
  const pathname = usePathname();

  const featureType = getFeatureTypeFromUrl(pathname) ?? BASIC_LINK_ENDING;
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-16 w-16 mr-4 border-r-3 rounded-full overflow-hidden flex items-center justify-center">
            <Image fill alt="logo" src={LogoImage} className="object-cover " />
          </div>

          <h1
            className={cn(
              "text-[2.5rem] font-bold border-b-2 border-purple-700 pb-2",
              montserrat.className,
            )}
          >
            <span className={UncialAntiqua.className}>
              Ge
              <span className={`${Cedarville.className} text-[3rem]`}>n</span>i
              <span className={`${UncialAntiqua.className} text-[2.2rem]`}>e</span>
            </span>
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
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition ",
                    pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
                  )}
                >
                  <div className="flex flex-items-center flex-1">
                    <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                    {route.label}
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
