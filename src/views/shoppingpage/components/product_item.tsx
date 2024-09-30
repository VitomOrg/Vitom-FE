import { Button, Checkbox } from "@/components/ui";
import { CircleX, Minus, PlusIcon } from "lucide-react";
import React from "react";

interface ProductItemProps {
  name: string;
  sort: string;
  quantity: number;
  price: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
  name,
  sort,
  quantity,
  price,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  return (
    <>
      <div className="flex items-center col-span-1">
        <Checkbox className="size-6" />
      </div>
      <div className="flex items-center col-span-1">
        <img
          aria-hidden="true"
          alt="product-icon"
          src="https://openui.fly.dev/openui/24x24.svg?text=🛍️"
          className="object-cover mr-4 rounded-lg size-24"
        />
      </div>
      <div className="flex items-center col-span-5">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <span className="text-muted-foreground">{sort}</span>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-2 gap-4">
        <Button
          className="p-2 rounded bg-secondary text-secondary-foreground"
          onClick={onDecrement}
        >
          <Minus size={16} />
        </Button>
        <span className="mx-2">{quantity}</span>
        <Button
          className="p-2 rounded bg-secondary text-secondary-foreground"
          onClick={onIncrement}
        >
          <PlusIcon size={16} />
        </Button>
      </div>
      <div className="flex items-center justify-center col-span-2">
        <span className="font-semibold">${price}</span>
      </div>
      <div className="flex items-center justify-center col-span-1">
        <Button className="text-destructive" onClick={onRemove} variant="ghost">
          <CircleX size={24} />
        </Button>
      </div>
    </>
  );
};

export default ProductItem;
