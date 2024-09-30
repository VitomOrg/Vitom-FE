// import { useCart } from "@/domains/stores/query-hook/carts/add-to-cart";
import Show from "@/lib/show";
import Checkout from "@/views/shoppingpage/components/checkout";
import ProductList from "@/views/shoppingpage/components/product_list";
import Summary from "@/views/shoppingpage/components/summary";
import React from "react";
import { useNavigate } from "react-router-dom";

const ShoppingPage: React.FC = () => {
  const navigate = useNavigate();
  // const { cartData } = useCart();

  const [products, setProducts] = React.useState([
    { name: "Product 1", sort: "Sort 1", quantity: 2, price: 200 },
    { name: "Product 2", sort: "Sort 2", quantity: 2, price: 200 },
    { name: "Product 3", sort: "Sort 3", quantity: 2, price: 200 },
  ]);

  const subtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const discount = 0;
  const total = subtotal - discount;

  const handleIncrement = (index: number) => {
    const newProducts = [...products];
    newProducts[index].quantity += 1;
    setProducts(newProducts);
  };

  const handleDecrement = (index: number) => {
    const newProducts = [...products];
    if (newProducts[index].quantity > 1) {
      newProducts[index].quantity -= 1;
      setProducts(newProducts);
    }
  };

  const handleRemove = (index: number) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const handleSubmitVoucher = (voucher: string) => {
    console.log("Voucher applied:", voucher);
  };

  const handleBuyNow = () => {
    navigate("/shopping-cart/checkout");
  };

  return (
    <div className="container p-6 bg-background">
      <h2 className="mb-4 text-2xl font-bold">Shopping Cart</h2>
      <ProductList
        products={products}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
      />

      <Show>
        <Show.When isTrue={products.length !== 0}>
          <div className="grid grid-cols-12 grid-rows-2 gap-4">
            <div className="col-span-5 col-start-3 row-start-2">
              <Checkout onSubmitVoucher={handleSubmitVoucher} />
            </div>
            <div className="col-span-4 col-start-9 row-span-2 row-start-1">
              <Summary
                subtotal={subtotal}
                discount={discount}
                total={total}
                onBuyNow={handleBuyNow}
              />
            </div>
          </div>
        </Show.When>
      </Show>
    </div>
  );
};

export default ShoppingPage;
