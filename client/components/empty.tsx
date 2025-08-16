import Image, { StaticImageData } from "next/image";

interface EmptyProps {
  label: string;
  img: StaticImageData;
  ifIsEmpty?: boolean;
}

export const Empty = ({ label, img, ifIsEmpty }: EmptyProps) => {
  return (
    ifIsEmpty && (
      <div className="h-full p-20 flex flex-col items-center justify-center text-center font-papyrus mt-[-15%] sm:mt-0">
        <div className="relative h-72 w-72">
          <Image alt="Empty" fill src={img} />
        </div>
        <p className="text-muted-foreground text-lg">{label}</p>
      </div>
    )
  );
};
