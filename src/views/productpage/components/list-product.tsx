import ImageWithFallback from "@/components/common/image_with_callback";
import { Card } from "@/components/ui";
import { UseListProduct } from "@/domains/stores/query-hook/product/use-product-list";
import useSequentialReveal from "@/hooks/useSequentialReveal";

const ListProduct = () => {
  const visiableIndex = useSequentialReveal(1);

  const { data, isLoading } = UseListProduct({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  const bestOfProducts = data.data
    .sort((a, b) => a.totalLiked - b.totalLiked)
    .slice(0, 5);

  return (
    <div className="flex gap-5  min-h-[600px] ">
      {visiableIndex > 0 && (
        <div className="flex flex-col justify-end w-2/3 h-full gap-5 animate-float-in">
          <Card className="w-48 h-64 ">
            {/* <GlbViewer children filePath={assert.glb} /> */}
            <ImageWithFallback
              className="object-cover w-full h-full rounded-xl"
              src={bestOfProducts[0].imageUrls[0]}
              alt={bestOfProducts[0].name}
            />
          </Card>
          <Card className="w-48 h-64 ">
            <ImageWithFallback
              className="object-cover w-full h-full rounded-xl"
              src={bestOfProducts[1].imageUrls[0]}
              alt={bestOfProducts[1].name}
            />
          </Card>
        </div>
      )}
      {visiableIndex > 0 && (
        <div className="flex flex-col w-2/3 h-full gap-5 animate-float-in">
          <Card className="w-48 h-64 ">
            <ImageWithFallback
              className="object-cover w-full h-full rounded-xl"
              src={bestOfProducts[2].imageUrls[0]}
              alt={bestOfProducts[2].name}
            />
          </Card>
          <Card className="w-48 h-64 ">
            <ImageWithFallback
              className="object-cover w-full h-full rounded-xl"
              src={bestOfProducts[3].imageUrls[0]}
              alt={bestOfProducts[3].name}
            />
          </Card>
        </div>
      )}
      {visiableIndex > 0 && (
        <div className="flex flex-col justify-center w-2/3 h-full gap-5 animate-float-in">
          <Card className="w-48 h-64 ">
            <ImageWithFallback
              className="object-cover w-full h-full rounded-xl"
              src={bestOfProducts[4].imageUrls[0]}
              alt={bestOfProducts[4].name}
            />
          </Card>
          <Card className="w-48 h-64 ">
            <ImageWithFallback
              className="object-cover w-full h-full rounded-xl"
              src={bestOfProducts[0].imageUrls[0]}
              alt={bestOfProducts[0].name}
            />
          </Card>
        </div>
      )}
    </div>
  );
};

export default ListProduct;
