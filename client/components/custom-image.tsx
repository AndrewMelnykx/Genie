import { MessageType } from "@/store/types";
import Image from "next/image";
import clsx from "clsx";
import { Card, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const CustomImage = ({ imagesData }: { imagesData: MessageType[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {imagesData.map((message, index) => {
        const isUser = message.role === "user";

        return (
          <div
            key={index}
            className={clsx("flex", {
              "justify-end": isUser,
              "justify-start": !isUser,
            })}
          >
            <div
              className={clsx("max-w-md p-4 rounded-xl border", {
                "bg-blue-100 text-right ml-auto": isUser,
                "bg-muted text-left mr-auto ": !isUser,
              })}
            >
              {message.image_data ? (
                <Card>
                  <>
                    <Image
                      src={`data:${message.mime_type};base64,${message.image_data}`}
                      alt="generated image"
                      width={512}
                      height={512}
                      unoptimized
                      className="rounded-lg "
                    />
                  </>
                  <CardFooter className="p-2 w-full">
                    <a
                      href={`data:${message.mime_type};base64,${message.image_data}`}
                      download="generated-image.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button variant="secondary" className="w-full bg-muted">
                        <Download className="h-4 w-4 m-2" />
                        Download
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              ) : (
                <p>{message.content}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomImage;
