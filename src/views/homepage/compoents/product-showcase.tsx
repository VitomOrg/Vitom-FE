import assert from "@/assets";
import CardItem from "@/components/common/card_item";
import { Button } from "@/components/ui";
import { CircleChevronRight } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section className="relative w-full py-10 my-10 bg-accent">
      <div className="container flex items-center justify-between">
        <div className="flex flex-col items-start w-[400px] gap-3 justify-start">
          <h2 className="space-x-2 text-2xl font-bold ">
            <span>Welcome to</span>
            <span className="uppercase text-primary">Vitom</span>
          </h2>
          <p className="mt-2 text-justify text-muted-foreground">
            At <span className="font-semibold">Vitom</span>, we offer a diverse
            range of high-quality 3D models tailored to meet various industry
            needs. Whether you're a designer, developer, or hobbyist, you'll
            find our collection to be an invaluable resource for your projects.
          </p>
          <Button>
            <span className="font-semibold">View More</span>
          </Button>
        </div>

        {/* Use flex for the list of CardItems */}
        {/* <div className="flex items-center justify-center gap-4 transform -translate-y-1/2 right-20 top-1/2"> */}
        <div className="flex gap-2">
          <CardItem filePath={assert.obj} />
          <CardItem filePath={assert.obj} />
          <CardItem filePath={assert.obj} />
        </div>
      </div>

      <button className="absolute transform -translate-y-1/2 right-9 top-1/2 size-fit ">
        <CircleChevronRight
          className="size-10 text-primary-foreground"
          fill="green"
        />
      </button>
    </section>
  );
};

export default ProductShowcase;
