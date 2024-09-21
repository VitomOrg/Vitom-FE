import Show from "@/lib/show";
import Introduction from "@/views/productpage/components/introduction";
import ProductIsLogin from "@/views/productpage/product-list/product_islogin";
import { useAuth } from "@clerk/clerk-react";

const ProductPage = () => {
  const { isSignedIn } = useAuth();

  return (
    <section className="container">
      <Show>
        <Show.When isTrue={!isSignedIn}>
          <Introduction />
        </Show.When>
        <Show.Else>
          <ProductIsLogin />
        </Show.Else>
      </Show>
    </section>
  );
};

export default ProductPage;
