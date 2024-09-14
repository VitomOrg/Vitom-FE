import assert from "@/assets";
import CardItem from "@/components/common/card_item";
import { Button } from "@/components/ui";
import { CircleChevronRight } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section className="relative flex flex-col w-full py-12 my-10 bg-accent md:flex-row">
      <div className="container flex gap-3">
        <div className=" md:w-1/3">
          <h2 className="space-x-2 text-2xl font-bold">
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
        <div className="absolute flex gap-4 right-4">
          <CardItem filePath={assert.obj} />
          <CardItem filePath={assert.obj} />
          <CardItem filePath={assert.obj} />
        </div>
      </div>
      <Button variant="ghost" className="absolute right-5 ">
        <CircleChevronRight className="size-12" />
      </Button>
    </section>
  );
};

export default ProductShowcase;
