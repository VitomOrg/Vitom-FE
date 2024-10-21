import BusinessMetrics from "@/views/main-layout/home-page/components/business-metrics";
import Hero from "@/views/main-layout/home-page/components/hero";
import ProductShowcase from "@/views/main-layout/home-page/components/product-showcase";
import ReasonList from "@/views/main-layout/home-page/components/reason-list";
import "./style/index.css";

const HomePage = () => {
  return (
    <main className="w-full py-9">
      <Hero />
      <ProductShowcase />
      <ReasonList />
      <BusinessMetrics />
    </main>
  );
};

export default HomePage;
