import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui";
import { ModeToggle } from "@/components/common/mode-toggle";

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

  return (
    <div className="bg-secondary text-secondary-foreground">
      <div className="container flex items-center">
        <div className="flex items-center justify-between w-full h-16 px-4 ">
          <div className="flex space-x-4">
            {menu.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="text-lg font-bold "
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex gap-3 text-nowrap">
          <ModeToggle />
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
    </div>
  );
};

export default Navbar;
