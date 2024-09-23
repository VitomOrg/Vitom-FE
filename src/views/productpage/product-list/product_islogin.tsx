import Search from "@/components/common/search";
import { UseListProduct } from "@/domains/stores/query-hook/product/use-product-list";
import { useProductStore } from "@/domains/stores/zustand/products";
import Filter from "@/views/productpage/product-list/filter";
import ListItem from "@/views/productpage/product-list/list-item";
import { useState } from "react";

const ProductIsLogin = () => {
  const [search, setSearch] = useState<string>();
  const { filter } = useProductStore();
  const { data, isLoading } = UseListProduct({
    options: filter || {},
  });

  const handleSearch = (value: string) => {
    setSearch(value);
  };
  console.log("search", search);

  return (
    <div className="flex gap-4">
      <div className="flex-grow">
        <Filter />
      </div>
      <section className={`w-full`}>
        <div className="flex justify-end">
          <Search getValue={handleSearch} placeholder="Search product" />
        </div>
        <ListItem data={data!} isLoading={isLoading} />
      </section>
    </div>
  );
};

export default ProductIsLogin;
