import DataRender from "@/components/data_render";
import { Button } from "@/components/ui";
import { UseListProduct } from "@/domains/stores/query-hook/product/use-product-list";
import Show from "@/lib/show";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();
  const { data, isLoading } = UseListProduct({});

  return (
    <section className="container">
      <Show>
        <Show.When isTrue={!isSignedIn}>
          <h1>Product Page</h1>
        </Show.When>
        <Show.Else>
          <DataRender isLoading={isLoading}>
            {data?.data.map((product) => (
              <div key={product.id} className="flex items-baseline gap-2">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <Button onClick={() => navigate(product.id)}>Detail</Button>
              </div>
            ))}
          </DataRender>
        </Show.Else>
      </Show>
    </section>
  );
};

export default ProductPage;
