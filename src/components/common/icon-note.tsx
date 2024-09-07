import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

const IconNote = () => {
  return (
    <NavLink to="/shopping-cart">
      <button>
        <ShoppingCart className="size-5" />
      </button>
    </NavLink>
  );
};

export default IconNote;
