import DataRender from "@/components/data_render";
import { Button } from "@/components/ui";
import { UseListProduct } from "@/domains/stores/query-hook/product/use-product-list";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();
  const { data, isLoading } = UseListProduct({});

  return (
    <div>
      <DataRender isLoading={isLoading}>
        {data?.data.map((product) => (
          <div key={product.id} className="flex items-baseline gap-2">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <Button onClick={() => navigate(product.id)}>Detail</Button>
          </div>
        ))}
      </DataRender>
    </div>
  );
};

export default ProductPage;
