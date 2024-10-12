import assert from "@/assets";
import { Button } from "@/components/ui";
import { Boxes, LayoutDashboard, LogOut, Newspaper } from "lucide-react";

const menu = [
  { name: "Home", href: "/", icon: <LayoutDashboard /> },
  { name: "Posts", href: "/posts", icon: <Newspaper /> },
  { name: "products", href: "/products", icon: <Boxes /> },
];

const SiderBar = () => {
  return (
    <div className="grid h-screen grid-cols-1 gap-4 grid-rows-10 ">
      <div className="row-span-1 ">
        <div className="grid h-full place-content-center">
          <img src={assert.logo} alt="Vitom" className="size-10" />
        </div>
        {/* <div>
          <div className="text-3xl font-semibold ">Vitom</div>
          <div className="text-sm font-semibold text-muted-foreground">
            Dashboard
          </div>
        </div> */}
        {/* <Separator /> */}
      </div>
      <div className="row-span-4 row-start-2 bg-primary">
        <div className="flex flex-col items-center justify-center gap-5 py-4 ">
          {menu.map((item) => (
            <Button key={item.name} variant="ghost" className="gap-4 py-6 ">
              {item.icon}
              <span className="hidden font-semibold">{item.name}</span>
            </Button>
          ))}
        </div>
      </div>
      <div className="row-span-2 row-start-7 ">3</div>
      <div className="container grid row-span-2 row-start-10 place-content-center">
        <Button variant="outline" className="flex items-center gap-4 py-6">
          <LogOut size={24} />
          <span className="hidden font-semibold">Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default SiderBar;
