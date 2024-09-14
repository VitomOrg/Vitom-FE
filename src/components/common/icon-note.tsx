import { Button } from "@/components/ui";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

const IconNote = () => {
  return (
    <NavLink to="/shopping-cart">
      <Button variant="ghost" size="icon">
        <ShoppingCart className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
      </Button>
    </NavLink>
  );
};

export default IconNote;
