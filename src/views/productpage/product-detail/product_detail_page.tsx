import DataRender from "@/components/data_render";
import { UseProductDetail } from "@/domains/stores/query-hook/product/use-product-detail";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = UseProductDetail({
    queryOptions: {},
    id: id!,
  });

  return (
    <div>
      <DataRender isLoading={isLoading}>
        <h1>Product Detail Page</h1>
        <p>{data?.name}</p>
        <p>{data?.price}</p>
      </DataRender>
    </div>
  );
};

export default ProductDetailPage;
