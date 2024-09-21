import assert from "@/assets";
import IconNote from "@/components/common/icon-note";
import { ModeToggle } from "@/components/common/mode-toggle";
import { Button } from "@/components/ui";
import Show from "@/lib/show";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/clerk-react";
import { ArrowBigRight } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

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
  const { isSignedIn } = useAuth();

  return (
    <header className="sticky top-0 z-10 bg-accent text-accent-foreground ">
      <div className="container flex items-center justify-between h-full py-4">
        {/* Add Logo */}
        <NavLink to="/" className="flex items-center text-2xl font-bold">
          <img src={assert.logo} alt="logo" className="size-8" />
          <span className="ml-2 ">Vitom</span>
        </NavLink>
        {/* Add menu */}
        <div className="flex items-center justify-center h-full gap-3 space-x-4">
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="font-bold text-center "
            >
              <span className="hover:text-accent-foreground/60">
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>
        {/*  Add ModeToggle and UserButton */}
        <div className="flex items-center gap-3 text-nowrap">
          <Show>
            <Show.When isTrue={isSignedIn!}>
              <IconNote />
            </Show.When>
          </Show>
          <ModeToggle />
          <SignedOut>
            <Button onClick={() => navigator("/sign-in")}>
              <span className="font-semibold">Sign In</span>
              <ArrowBigRight className="size-6" />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
