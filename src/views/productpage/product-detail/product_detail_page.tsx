import assert from "@/assets";
import DataRender from "@/components/data_render";
import GlbViewer from "@/components/three_ui/glb";
import { UseProductDetail } from "@/domains/stores/query-hook/product/use-product-detail";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = UseProductDetail({
    queryOptions: {},
    id: id!,
  });

  return (
    <div className="container">
      <DataRender isLoading={isLoading}>
        <div className="h-96">
          <GlbViewer filePath={assert.glb} children />
        </div>
        <p>{data?.name}</p>
        <p>{data?.price}</p>
      </DataRender>
    </div>
  );
};

export default ProductDetailPage;
