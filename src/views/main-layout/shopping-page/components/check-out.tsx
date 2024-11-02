import { Button, Separator } from "@/components/ui";
import { CartResponse } from "@/domains/models/carts/cart.response";
import { CartApi } from "@/domains/services/carts.service";
import { formatPriceVND } from "@/lib/helper";
import React from "react";
import { useNavigate } from "react-router-dom";

interface CheckOutProps {
  data: CartResponse[];
}

const CheckOut: React.FC<CheckOutProps> = ({ data }) => {
  const navigation = useNavigate();

  const handleCheckout = async () => {
    CartApi.postCartCheckout()
      .then((res) => {
        window.location.href = res.checkoutUrl;
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const subtotal = data.reduce((acc, item) => {
    return acc + item.priceAtPurchase;
  }, 0);

  const total = subtotal - subtotal * 0;

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold md:text-4xl">Checkout</h2>
      <Separator className="border border-white/20" />
      <div className="grid grid-cols-2 grid-rows-3 gap-4 mt-10">
        <div>
          <span className="text-base font-semibold text-foreground/70 md:text-2xl">
            Subtotal
          </span>
        </div>
        <div className="text-base text-end md:text-2xl">
          <span className="font-semibold text-foreground/70">
            {formatPriceVND(subtotal)}
          </span>
        </div>
        {/* <div>
          <span className="text-sm text-foreground/50 md:text-base">
            Discount
          </span>
        </div> */}
        {/* <div className="text-sm text-end md:text-base">
          <span className="font-semibold text-foreground/50">0%</span>
        </div> */}
        <Separator className="col-span-2 border border-fotext-foreground/20" />
        <div>
          <span className="text-base font-semibold text-foreground md:text-2xl">
            Total
          </span>
        </div>
        <div className="text-base text-end md:text-2xl">
          <span className="font-semibold">{formatPriceVND(total)}</span>
        </div>
      </div>

      <div className="flex flex-col w-full gap-4 mt-5">
        <Button onClick={handleCheckout}>
          <span>Process to checkout</span>
        </Button>
        <Button variant="outline" onClick={() => navigation("/products")}>
          <span>Continue shopping</span>
        </Button>
      </div>
    </section>
  );
};

export default CheckOut;
