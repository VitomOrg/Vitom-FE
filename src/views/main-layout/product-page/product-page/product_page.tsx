import { useAuth } from "@clerk/clerk-react";
import Introduction from "@/views/main-layout/product-page/components/introduction";
import ProductIsLogin from "@/views/main-layout/product-page/product-page/product_islogin";
import Show from "@/lib/show";

const ProductPage = () => {
  const { isSignedIn } = useAuth();

  return (
    <section className="container py-9">
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
