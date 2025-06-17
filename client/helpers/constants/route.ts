import {
  Code,
  ImageIcon,
  // LayoutDashboard,
  MessageSquare,
  Music,
  // Settings,
  VideoIcon,
} from "lucide-react";

const routes = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    href: "conversation",
  },

  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-yellow-500",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },

  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-emerald-500",
  },
  ,
];

export { routes };
