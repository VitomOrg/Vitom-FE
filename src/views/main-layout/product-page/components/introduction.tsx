import Content from "@/views/main-layout/product-page/components/content";
import ListProduct from "@/views/main-layout/product-page/components/list-product";

const Introduction = () => {
  return (
    <main className="flex flex-col gap-8 p-8 md:flex-col lg:flex-row">
      <Content />
      <ListProduct />
    </main>
  );
};

export default Introduction;
