"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const DarkThemeBtn = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <button
        onClick={handleThemeChange}
        className="flex cursor-pointer items-center">
        <Sun
          size={24}
          className="text-background scale-0 -rotate-90 transition-all duration-300 ease-in-out dark:scale-100 dark:rotate-0"
        />

        <MoonStar
          size={24}
          strokeWidth={1.5}
          className="absolute scale-100 rotate-0 transition-all duration-300 ease-in-out dark:scale-0 dark:rotate-90"
        />
      </button>
    </>
  );
};

export default DarkThemeBtn;
