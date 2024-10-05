import assert from "@/assets";
import IconNote from "@/components/common/icon-note";
import { Button } from "@/components/ui";
import Show from "@/lib/show";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/clerk-react";
import { ArrowBigRight, History, MenuIcon, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import HistoryPage from "@/views/historypage/history-page";

const menu = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Products", href: "/products" },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const navigator = useNavigate();
  const { isSignedIn } = useAuth();

  // Toggle sheet visibility
  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  return (
    <header className="sticky top-0 z-10 bg-accent text-accent-foreground">
      <div className="container flex items-center justify-between h-full py-4">
        {/* Button to open Sheet for screens smaller than 768px */}
        <div className="block md:hidden">
          <Button onClick={toggleSheet} variant="outline">
            <MenuIcon className="size-6" />
            <span className="hidden font-semibold">Menu</span>
          </Button>
        </div>

        {/* Logo centered for screens smaller than 768px, and left-aligned for larger screens */}
        <NavLink
          to="/"
          className="flex items-center justify-center w-full text-2xl font-bold md:justify-start md:w-auto"
        >
          <img src={assert.logo} alt="logo" className="size-8" />
          <span className="ml-2">Vitom</span>
        </NavLink>

        {/* Normal Menu for screens 768px and above */}
        <div className="items-center justify-center hidden h-full gap-3 space-x-4 md:flex">
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="font-bold text-center"
            >
              <span className="hover:text-accent-foreground/60">
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>

        {/* ModeToggle and UserButton */}
        <div className="flex items-center gap-3 text-nowrap">
          <Show>
            <Show.When isTrue={isSignedIn!}>
              <IconNote />
            </Show.When>
          </Show>
          <SignedOut>
            <Button onClick={() => navigator("/sign-in")}>
              <span className="font-semibold">Sign In</span>
              <ArrowBigRight className="size-6" />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton>
              <UserButton.UserProfilePage
                label="Order History"
                url="order-history"
                labelIcon={<History className="size-4" />}
              >
                <HistoryPage />
              </UserButton.UserProfilePage>
            </UserButton>
          </SignedIn>
        </div>
      </div>

      {/* Sheet for smaller screens */}
      {isSheetOpen && (
        <div
          className="fixed inset-0 z-50 bg-opacity-50 "
          onClick={toggleSheet}
        >
          <div
            className="fixed left-0 right-0 p-6 overflow-y-auto rounded-t-lg shadow-lg start-0 max-h-3/4 bg-muted w-[320px]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sheet
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Menu</h2>
              <Button variant="ghost" onClick={toggleSheet}>
                <X className="size-6" />
                <span className="hidden font-semibold">Close</span>
              </Button>
            </div>
            <div className="flex flex-col space-y-4">
              {menu.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="font-bold text-center border border-white rounded-lg focus:bg-primary"
                  onClick={toggleSheet} // Close sheet after navigating
                >
                  <span className=" hover:text-accent-foregroborder">
                    {item.name}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
