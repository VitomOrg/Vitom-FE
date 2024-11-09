import { UseProductDetail } from "@/domains/stores/query-hook/product/use-product-detail";
import Comment from "@/views/main-layout/product-page/components/comment";
import InformationProduct from "@/views/main-layout/product-page/components/information-product";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, refetch } = UseProductDetail({
    id: id || "",
  });

  return (
    <main className="container">
      <InformationProduct
        product={data!}
        isLoading={isLoading}
        refetch={refetch}
      />
      <Comment />
    </main>
  );
};

export default ProductDetailPage;
