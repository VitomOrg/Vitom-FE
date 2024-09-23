import { UseProductDetail } from "@/domains/stores/query-hook/product/use-product-detail";
import InformationProduct from "@/views/productpage/components/information-product";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = UseProductDetail({
    queryOptions: {},
    id: id!,
  });

  return (
    <main className="container">
      <InformationProduct data={data!} isLoading={isLoading} />
    </main>
  );
};

export default ProductDetailPage;
