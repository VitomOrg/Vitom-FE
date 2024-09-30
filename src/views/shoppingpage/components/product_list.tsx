import Show from "@/lib/show";
import ProductItem from "@/views/shoppingpage/components/product_item";
import { ShoppingCart } from "lucide-react";
import React from "react";

interface Product {
  name: string;
  sort: string;
  quantity: number;
  price: number;
}

interface ProductListProps {
  products: Product[];
  onIncrement: (index: number) => void;
  onDecrement: (index: number) => void;
  onRemove: (index: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  return (
    <div className="grid grid-cols-12 gap-4 my-14">
      <Show>
        <Show.When isTrue={products.length === 0}>
          <div className="grid col-span-12 text-center h-96 place-content-center">
            <p className="flex flex-col items-center justify-center gap-5 font-semibold text-muted">
              <ShoppingCart size={96} />
              <span className="text-3xl">Your cart is empty. </span>
              <span className="text-xl text-primary">Start shopping now!</span>
            </p>
          </div>
        </Show.When>
        <Show.Else>
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
          <div className="col-span-5 font-semibold">Product</div>
          <div className="col-span-2 font-semibold text-center">Quantity</div>
          <div className="col-span-2 font-semibold text-center">Price</div>
          <div className="col-span-1"></div>
          {products.map((product, index) => (
            <React.Fragment key={index}>
              <ProductItem
                name={product.name}
                sort={product.sort}
                quantity={product.quantity}
                price={product.price}
                onIncrement={() => onIncrement(index)}
                onDecrement={() => onDecrement(index)}
                onRemove={() => onRemove(index)}
              />
            </React.Fragment>
          ))}
        </Show.Else>
      </Show>
    </div>
  );
};

export default ProductList;
