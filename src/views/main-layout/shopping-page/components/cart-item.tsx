import ImageWithFallback from "@/components/common/image_with_callback";
import { Badge, Button, Separator } from "@/components/ui";
import { CartResponse } from "@/domains/models/carts/cart.response";
import { formatPriceVND } from "@/lib/helper";
import Show from "@/lib/show";
import { Award, Trash } from "lucide-react";
import React from "react";

interface CartItemProps {
  cartItem: CartResponse;
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem, onRemove }) => {
  return (
    <>
      <Separator className="border border-white/20" />
      <div className="grid grid-cols-12 p-4 rounded-xl bg-muted-foreground/20">
        <div className="col-span-2">
          <ImageWithFallback
            src={cartItem.product.images[0].url}
            alt={cartItem.product.name}
          />
        </div>
        <div className="col-span-6 col-start-4">
          <div className="flex gap-4">
            <h3>{cartItem.product.name}</h3>
            <Show>
              <Show.When
                isTrue={cartItem.product.license.toLowerCase() === "pro"}
              >
                <div className="  rounded-[0px_0px_20px_20px]  bg-primary grid place-content-center">
                  <Award className="text-white size-6" />
                </div>
              </Show.When>
            </Show>
          </div>
          <div>
            {cartItem.product.types.map((type) => (
              <Badge key={type.id} className="mr-2">
                {type.name}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between col-span-3 text-end">
          <p className="text-3xl font-semibold">
            {formatPriceVND(cartItem.product.price)}
          </p>

          <div className="flex flex-row justify-end gap-6">
            <Button
              className="space-x-2"
              variant="ghost"
              onClick={() => onRemove(cartItem.product.id)}
            >
              <Trash className="size-4" />
              <span>Remove</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
