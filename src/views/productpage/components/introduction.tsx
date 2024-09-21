import Content from "@/views/productpage/components/content";
import ListProduct from "@/views/productpage/components/list-product";

const Introduction = () => {
  return (
    <main className="flex flex-col gap-8 p-8 md:flex-col lg:flex-row">
      <Content />
      <ListProduct />
    </main>
  );
};

export default Introduction;
