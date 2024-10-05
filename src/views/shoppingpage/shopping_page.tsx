import { useToast } from "@/components/ui";
import { RootResponse, Value } from "@/domains/models/root/root.response";
import { CartApi } from "@/domains/services/carts.service";
import { useCart } from "@/domains/stores/query-hook/carts/add-to-cart";
import CartList from "@/views/shoppingpage/components/cart-list";
import CheckOut from "@/views/shoppingpage/components/check-out";
import React from "react";

const ShoppingPage: React.FC = () => {
  const { cartData, refetchCart } = useCart();
  const { toast } = useToast();

  const handleRemove = async (id: string) => {
    await CartApi.deleteCart(id)
      .then(() => {
        toast({
          title: "Success",
          description: "Removed from cart",
        });
        refetchCart();
      })
      .catch((error: RootResponse<Value<null>>) => {
        toast({
          title: "Error",
          description: error.errors[0] as string,
        });
      });
  };

  return (
    <div className="container grid grid-cols-1 gap-4 p-4 md:grid-cols-6 md:p-6 bg-background">
      {/* Cart section */}
      <section className="container col-span-1 py-6 md:col-span-4 md:py-10 bg-accent rounded-xl">
        <h2 className="mb-4 text-xl font-bold text-center md:text-3xl md:text-left">
          Cart
        </h2>
        <CartList cartItems={cartData?.data || []} onRemove={handleRemove} />
      </section>

      {/* Checkout section */}
      <section className="container col-span-1 py-6 md:col-span-2 md:py-10 bg-accent rounded-xl h-fit">
        <CheckOut data={cartData?.data || []} />
      </section>
    </div>
  );
};

export default ShoppingPage;
