import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui";
import { ModeToggle } from "@/components/common/mode-toggle";
import assert from "@/assets";

import IconNote from "@/components/common/icon-note";

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
  {
    name: "Products",
    href: "/products",
  },
];

const Navbar = () => {
  const navigator = useNavigate();

  return (
    <div className="h-fit bg-secondary text-secondary-foreground">
      <div className="container flex items-center justify-between h-full py-4">
        {/* Add Logo */}
        <NavLink to="/" className="flex items-center text-2xl font-bold">
          <img src={assert.logo} alt="logo" className="size-8" />
          <span className="ml-2">Vitom</span>
        </NavLink>
        {/* Add menu */}
        <div className="flex items-center gap-3 space-x-4">
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="h-full text-base font-bold"
            >
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
        {/*  Add ModeToggle and UserButton */}
        <div className="flex items-center gap-3 text-nowrap">
          <IconNote />
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
