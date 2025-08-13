import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    iconColor: "text-blue-400",
    href: "/dashboard",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    iconColor: "text-violet-500",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    iconColor: "text-pink-700",
    href: "/image",
  },
  {
    label: "Music Generation",
    icon: Music,
    iconColor: "text-yellow-600",
    href: "/music",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    iconColor: "text-orange-500",
    href: "/video",
  },
  {
    label: "Code Generation",
    icon: Code,
    iconColor: "text-green-700",
    href: "/code",
  },
  {
    label: "Settings",
    icon: Settings,
    iconColor: "text-gray-800",
    href: "/settings",
  },
];

export { routes };
