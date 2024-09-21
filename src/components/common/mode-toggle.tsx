import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";

  const handleToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div className="flex items-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={handleToggle}
          className="sr-only"
        />
        <div
          className={`w-16 h-10 rounded-full text-foreground focus:outline-none transition-colors border-foreground border-[1.2px]`}
        ></div>
        <div
          className={` absolute left-2 top-[0.5rem] rounded-full transition-transform duration-200 ${
            isDarkMode ? "translate-x-full " : " "
          }`}
        >
          {!isDarkMode ? (
            <Sun className="size-6 text-foreground " />
          ) : (
            <Moon className=" size-6 text-foreground" />
          )}
        </div>
      </label>
    </div>
  );
}
