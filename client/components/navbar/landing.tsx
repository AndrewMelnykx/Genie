"use client";

import Link from "next/link";

import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-20 w-32 mr-2">
          <h1
            className="text-[3rem] w-[110%] mt-1  pb-2 pr-4 font-maya text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600
              transition-all "
          >
            GENIE
          </h1>
        </div>
      </Link>
      <div className="flex items-center gap-x-2 ">
        <Link href={isSignedIn ? "/dashboard" : "sign-up"}>
          <Button variant={"outline"} className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export { LandingNavbar };
