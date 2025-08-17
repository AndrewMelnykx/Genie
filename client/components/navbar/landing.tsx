"use client";

import Image from "next/image";
import Link from "next/link";

import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-20 w-32 mr-2">
          <Image fill alt="logo" src="/images/lamp.png" />
        </div>
        <h1 className={cn("text-2xl text-white,font-bold font-papyrus")}>Genie</h1>
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
