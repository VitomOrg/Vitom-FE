import { Button } from "@/components/ui";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

const IconNote = () => {
  return (
    <NavLink to="/shopping-cart">
      <Button size="icon" className="rounded-full">
        <ShoppingCart className="transition-all scale-100 size-4" />
      </Button>
    </NavLink>
  );
};

export default IconNote;
