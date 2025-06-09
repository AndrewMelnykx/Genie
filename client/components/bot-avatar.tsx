import { Avatar, AvatarImage } from "./ui/avatar";

//FIX path to the image
const BotAvatar = () => {
  return (
    <Avatar className="h-12 w-16">
      <AvatarImage src="../assets/images/lamp.png" alt="bot-image" />
    </Avatar>
  );
};

export default BotAvatar;
