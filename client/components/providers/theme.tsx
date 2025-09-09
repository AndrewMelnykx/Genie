"use client";

import { useSelector } from "react-redux";
import { themeSelector } from "@/store/ui/selectors";

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const theme = useSelector(themeSelector);

  return <div className={theme === "dark" ? "dark" : ""}>{children}</div>;
}

export { ThemeWrapper };
