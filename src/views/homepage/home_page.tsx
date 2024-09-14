import Hero from "@/views/homepage/compoents/hero";
import "./style/index.css";
import ProductShowcase from "@/views/homepage/compoents/product-showcase";

const HomePage = () => {
  return (
    <main className="w-full">
      <Hero />
      <ProductShowcase />
    </main>
  );
};

export default HomePage;
