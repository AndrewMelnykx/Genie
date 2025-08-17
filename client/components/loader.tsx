import Image from "next/image";
import logoImage from "@/images/lamp.png";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col  gap-y-4 items-center justify-center">
      <div className="w-32 h-32 relative animate-spin">
        <Image alt="logo" fill src={logoImage} />
      </div>
      <p className="text-lg text-muted-foreground ">Genie is thinking...</p>
    </div>
  );
};
