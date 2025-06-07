import Image, { StaticImageData } from "next/image";

interface EmptyProps {
  label: string;
  img: StaticImageData;
}

export const Empty = ({ label, img }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center text-center">
      <div className="relative h-72 w-72">
        <Image alt="Empty" fill src={img} />
      </div>
      <p className="text-muted-foreground text-lg">{label}</p>
    </div>
  );
};
