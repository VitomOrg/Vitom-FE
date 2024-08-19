import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Moon, Sun } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import useThemeStore from "@/state/theme";
import { Button } from "../ui";

const menu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const navigator = useNavigate();
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="flex items-center px-10 py-2 bg-gradient-to-r from-primary to-primary-darker">
      <div className="flex items-center justify-between w-full h-16 px-4 ">
        <div className="flex space-x-4">
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="text-lg font-bold text-primary-foreground"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex gap-3 text-nowrap">
        <Button variant="outline" onClick={toggleTheme}>
          {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
        <SignedOut>
          <Button variant="outline" onClick={() => navigator("/sign-in")}>
            Sign In
          </Button>
          <Button variant="outline" onClick={() => navigator("/sign-up")}>
            Sign Up
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
