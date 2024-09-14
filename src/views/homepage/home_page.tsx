import Hero from "@/views/homepage/compoents/hero";
import "./style/index.css";
import ProductShowcase from "@/views/homepage/compoents/product-showcase";
import ReasonList from "@/views/homepage/compoents/reason-list";
import BusinessMetrics from "@/views/homepage/compoents/business-metrics";

const HomePage = () => {
  return (
    <main className="w-full">
      <Hero />
      <ProductShowcase />
      <ReasonList />
      <BusinessMetrics />
    </main>
  );
};

export default HomePage;
