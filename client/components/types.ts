interface ConversationMessage {
  role: "user" | "system";
  content: string;
}

export type { ConversationMessage };
