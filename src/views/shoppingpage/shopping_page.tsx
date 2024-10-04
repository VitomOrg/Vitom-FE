import { useToast } from "@/components/ui";
import { CartApi } from "@/domains/services/carts.service";
import { useCart } from "@/domains/stores/query-hook/carts/add-to-cart";
import CartList from "@/views/shoppingpage/components/cart-list";
import React from "react";

const ShoppingPage: React.FC = () => {
  const { cartData, fetchCart } = useCart();
  const { toast } = useToast();

  const handleRemove = async (id: string) => {
    const response = await CartApi.deleteCart(id);

    if (response.isSuccess) {
      fetchCart();
      toast({
        title: "Success",
        description: response.successMessage,
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to remove product from cart",
      });
    }
  };

  return (
    <div className="container grid grid-cols-6 grid-rows-1 gap-4 p-6 bg-background">
      <section className="container col-span-4 py-10 bg-accent rounded-xl">
        <h2 className="mb-4 text-4xl font-bold">Cart</h2>
        <CartList cartItems={cartData?.data || []} onRemove={handleRemove} />
      </section>

      <section className="container col-span-2 py-10 bg-accent rounded-xl">
        <h2>Delivery</h2>
      </section>
    </div>
  );
};

export default ShoppingPage;
