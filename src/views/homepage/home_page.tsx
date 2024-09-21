import BusinessMetrics from "@/views/homepage/components/business-metrics";
import Hero from "@/views/homepage/components/hero";
import ProductShowcase from "@/views/homepage/components/product-showcase";
import ReasonList from "@/views/homepage/components/reason-list";
import "./style/index.css";

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
