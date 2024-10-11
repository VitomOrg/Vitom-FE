import ImageWithFallback from "@/components/common/image_with_callback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui";
import { UseListProduct } from "@/domains/stores/query-hook/product/use-product-list";

const CardProductList = () => {
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
    <Carousel className="flex items-center justify-center w-full ">
      <CarouselContent className="px-10 w-[800px] ">
        {bestOfProducts.map((product) => (
          <CarouselItem
            className="h-full space-x-5 w-60 md:basis-1/2 lg:basis-1/3 "
            key={product.id}
          >
            <div className="h-[400px]">
              <ImageWithFallback
                src={product.imageUrls[0]}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};

export default CardProductList;
