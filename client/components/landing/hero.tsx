"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "../ui/button";

const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-x-5 font-extrabold">
        <h1>The Best AI Tool For</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Music Generation.",
                "Code Generation.",
                "Video Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
        <Button
          variant={"premium"}
          className="md:text-lg p-4 md:p-6 rounded-full font-semibold mt-20 "
        >
          Start Generating For Free
        </Button>
      </Link>
      <div className="text-zinc-400 text-s md:text-xs font-normal mt-[-1]">
        No credit card required.
      </div>
    </div>
  );
};

export { LandingHero };
