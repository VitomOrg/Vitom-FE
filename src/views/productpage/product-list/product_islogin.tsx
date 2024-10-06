import Search from "@/components/common/search";
import { Button } from "@/components/ui";
import { UseListProduct } from "@/domains/stores/query-hook/product/use-product-list";
import { useProductStore } from "@/domains/stores/zustand/products";
import Filter from "@/views/productpage/product-list/filter";
import ListItem from "@/views/productpage/product-list/list-item";
import { ChevronDown } from "lucide-react";

const ProductIsLogin = () => {
  const { filter, setFilter } = useProductStore();
  const { data, isLoading } = UseListProduct({
    options: filter || {},
  });

  if (!data) return null;

  return (
    <div className="flex gap-4">
      <section className={`w-full`}>
        <div className="flex justify-between">
          <Search placeholder="Search product" />
          <Filter />
        </div>

        <ListItem data={data} isLoading={isLoading} />
        <div className="flex justify-center w-full ">
          <Button
            className="space-x-2"
            onClick={() => {
              setFilter({
                ...filter,
                pageSize: filter?.pageSize ? filter?.pageSize + 10 : 10,
                pageIndex: 1,
              });
            }}
          >
            <ChevronDown size={24} />
            <span>See more</span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProductIsLogin;
