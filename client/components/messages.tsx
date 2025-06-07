"use client";

import { cn } from "@/lib/utils";
import UserAvatar from "./user-avatar";
import BotAvatar from "./bot-avatar";
import { MessageType } from "@/store/types";

export const ConversationMessages = ({
  messages,
}: {
  messages: MessageType[];
}) => {
  return (
    <div className="flex flex-col-reverse gap-y-4">
      {messages.map((message) => (
        <div
          key={message.content}
          className={cn(
            "p-8 w-full flex items-start gap-x-8 rounded-lg shadow-lg",
            message.role === "user"
              ? "bg-white border border-black/10 "
              : "bg-muted"
          )}
        >
          {message.role === "user" ? <UserAvatar /> : <BotAvatar />}

          {message.content}
        </div>
      ))}
    </div>
  );
};
