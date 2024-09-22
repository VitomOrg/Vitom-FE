import { Button } from "@/components/ui";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

const IconNote = () => {
  return (
    <NavLink to="/shopping-cart">
      <Button size="icon" variant="ghost">
        <ShoppingCart className="transition-all scale-100 size-5" />
      </Button>
    </NavLink>
  );
};

export default IconNote;
