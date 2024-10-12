import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import { useTheme } from "@/hooks";
import { useUser } from "@clerk/clerk-react";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { user } = useUser();
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";

  const handleToggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <header className="flex items-center justify-end gap-5 px-10 py-8">
      <button
        onClick={handleToggle}
        className="p-3 border-2 rounded-full shadow-xl border-secondary hover:bg-secondary/80"
      >
        {!isDarkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
      </button>
      <div className="relative gap-3 py-2 pr-12 mr-10 overflow-visible rounded-[15px_0px_0px_15px] px-8 text-start  border-2 border-secondary/75 bg-background shadow-lg">
        <div className="text-sm font-bold">{user?.username}</div>
        {/* <div className="text-xs font-semibold text-muted-foreground">Admin</div> */}

        <Avatar className="absolute transform -translate-y-1/2 shadow-xl -right-5 top-1/2 size-12">
          <AvatarFallback>{user?.fullName}</AvatarFallback>
          <AvatarImage src={user?.imageUrl} alt={user?.username?.slice(0, 2)} />
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
