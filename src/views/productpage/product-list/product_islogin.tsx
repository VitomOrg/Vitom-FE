import Search from "@/components/common/search";
import { UseListProduct } from "@/domains/stores/query-hook/product/use-product-list";
import Filter from "@/views/productpage/product-list/filter";
import ListItem from "@/views/productpage/product-list/list-item";
import { useState } from "react";

const ProductIsLogin = () => {
  const [search, setSearch] = useState<string>();
  const { data, isLoading, error } = UseListProduct({
    options: {
      pageSize: 10,
      pageIndex: 1,
    },
  });

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  console.log("search", search);
  console.log("data", data);
  console.log("isLoading", isLoading);
  console.log("error", error?.message);

  return (
    <div className="flex gap-4">
      <div className="flex-grow">
        <Filter />
      </div>
      <section className={`w-full`}>
        <div className="flex justify-end">
          <Search getValue={handleSearch} placeholder="Search product" />
        </div>
        <ListItem />
      </section>
    </div>
  );
};

export default ProductIsLogin;
