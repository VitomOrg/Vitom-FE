import assert from "@/assets";
import GlbViewer from "@/components/three_ui/glb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui";

const CardProductList = () => {
  return (
    <Carousel className="flex items-center justify-center w-full ">
      <CarouselContent className="px-10  w-[800px] ">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            className="h-full space-x-3 w-60 md:basis-1/2 lg:basis-1/3 "
            key={index}
          >
            <div className="h-[400px]">
              <GlbViewer filePath={assert.glb} showGrid children={undefined} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
};

export default CardProductList;
