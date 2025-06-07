import { Avatar, AvatarImage } from "./ui/avatar";

const BotAvatar = () => {
  return (
    <Avatar className="h-12 w-16">
      <AvatarImage src="/lamp.png" alt="bot-image" />
    </Avatar>
  );
};

export default BotAvatar;
