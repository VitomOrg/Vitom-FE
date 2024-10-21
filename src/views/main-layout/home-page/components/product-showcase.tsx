import { Button } from "@/components/ui";
import CardProductList from "@/views/main-layout/home-page/components/card-product-list";
import { NavLink } from "react-router-dom";

const ProductShowcase = () => {
  return (
    <section className="relative w-full py-10 my-10 bg-accent">
      <div className="container flex items-center justify-between ">
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
          <NavLink to="/products">
            <Button>
              <span className="font-semibold">View More</span>
            </Button>
          </NavLink>
        </div>

        <div className="gap-2">
          <CardProductList />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
