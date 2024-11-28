import { UseProductDetail } from "@/domains/stores/query-hook/product/use-product-detail";
import { ProductFiles } from "@/views/dashboard-layout/product-page/components/product-file";
import { ProductHeader } from "@/views/dashboard-layout/product-page/components/product-header";
import { ProductMedia } from "@/views/dashboard-layout/product-page/components/product-media";
import { ProductMetadata } from "@/views/dashboard-layout/product-page/components/product-metadata";
import { ProductStats } from "@/views/dashboard-layout/product-page/components/product-stats";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Product not found</div>;
  }

  const { data: product, isLoading, error } = UseProductDetail({ id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container py-6 mx-auto">
      <div className="grid gap-6">
        <ProductHeader product={product} />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-6">
            <ProductMedia product={product} />
            <ProductStats product={product} />
          </div>
          <div className="grid gap-6">
            <ProductFiles product={product} />
            <ProductMetadata product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
