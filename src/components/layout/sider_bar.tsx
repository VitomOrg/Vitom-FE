import assert from "@/assets";
import { Avatar, AvatarFallback, AvatarImage, Button } from "@/components/ui";
import { useAuth } from "@clerk/clerk-react";
import {
  Boxes,
  Brush,
  ChevronFirst,
  ChevronLast,
  Grid,
  LayoutDashboard,
  LogOut,
  Newspaper,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const menu = [
  { name: "Home", href: "/dashboard", icon: LayoutDashboard },
  { name: "Social Media", href: "/dashboard/posts", icon: Newspaper },
  { name: "Product", href: "/dashboard/products", icon: Boxes },
  { name: "Software", href: "/dashboard/software", icon: Brush },
  { name: "Types", href: "/dashboard/types", icon: Grid },
];

const SiderBar = () => {
  const { signOut } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };
  return (
    <aside
      className={`min-h-screen col-span-2 bg-secondary/90 relative px-4 py-10 ${
        isOpen ? "w-64" : "w-32"
      } transition-width duration-700 ease-in-out`}
    >
      <div className="flex flex-col justify-between h-full ">
        <div className="flex flex-col items-center ">
          <button
            onClick={toggleSidebar}
            className="absolute p-2 -right-3 top-12 bg-background rounded-l-xl"
          >
            {isOpen ? (
              <ChevronFirst className="size-6" />
            ) : (
              <ChevronLast className="size-6" />
            )}
          </button>

          <div className="flex items-center gap-2 ">
            <Avatar className="size-12">
              <AvatarFallback className="text-xs">VITOM</AvatarFallback>
              <AvatarImage src={assert.logo} alt="logo" />
            </Avatar>
            {isOpen && (
              <span className={`flex flex-col `}>
                <span className={`text-3xl font-semibold `}>Vitom</span>
                <span className="font-semibold text-muted-foreground">
                  Dashboard
                </span>
              </span>
            )}
          </div>
          <div className="flex flex-col justify-start w-full gap-4 py-4 mt-10 ">
            {menu.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.href}
                  onClick={() => handleMenuClick(item.name)}
                  className={`flex items-center gap-4 py-2 rounded-lg ${
                    currentPath === item.href
                      ? "bg-primary text-foreground"
                      : ""
                  } hover:bg-primary/30 hover:text-foreground transition-colors duration-300`}
                >
                  <item.icon
                    size={24}
                    onClick={() => setIsOpen(true)}
                    className={`${isOpen ? "ml-12" : "ml-9"}`}
                  />
                  {isOpen && <span>{item.name}</span>}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Button
          className="w-full gap-2"
          variant="outline"
          onClick={() => signOut()}
        >
          <LogOut />
          {isOpen && <span className="font-semibold">Logout</span>}
        </Button>
      </div>
    </aside>
  );
};

export default SiderBar;
