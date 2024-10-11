import { CartResponse } from "@/domains/models/carts/cart.response";
import CartItem from "@/views/shoppingpage/components/cart-item";
import { ShoppingBag } from "lucide-react";
import React from "react";

interface CartListProps {
  cartItems: CartResponse[];
  onRemove: (id: string) => void;
}

const CartList: React.FC<CartListProps> = ({ cartItems, onRemove }) => {
  if (cartItems.length === 0) {
    return (
      <div className="grid gap-4 size-full place-content-center place-items-center text-accent-foreground/40">
        <ShoppingBag size={64} />
        <span className="text-sm md:text-lg">Your cart is empty</span>
      </div>
    );
  }

  return (
    <div className="space-y-10 md:space-y-20">
      {cartItems.map((cartItem) => (
        <CartItem
          cartItem={cartItem}
          key={cartItem.cartId}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default CartList;
