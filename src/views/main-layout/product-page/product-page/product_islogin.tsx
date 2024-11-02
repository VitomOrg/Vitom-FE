import { Button } from "@/components/ui";
import { ProductParamsRequest } from "@/domains/models/products";
import { UseListProduct } from "@/domains/stores/query-hook/product/use-product-list";
import { useProductStore } from "@/domains/stores/zustand/products";
import { useSearchStore } from "@/domains/stores/zustand/search";
import useInfiniteScroll from "@/hooks/use-infinite-scroll";
import Show from "@/lib/show";
import Filter from "@/views/main-layout/product-page/product-page/filter";
import ListItem from "@/views/main-layout/product-page/product-page/list-item";
import {
  ArrowDownWideNarrow,
  ArrowUpNarrowWide,
  ChevronDown,
} from "lucide-react";
import React, { useMemo } from "react";

const ProductIsLogin = () => {
  const { filter, setFilter } = useProductStore();
  const { search } = useSearchStore();

  const options: ProductParamsRequest = useMemo(() => {
    const updatedOptions: ProductParamsRequest = {
      ...filter,
      pageIndex: 1,
      pageSize: filter?.pageSize ? filter.pageSize : 8,
    };

    if (search?.trim()) {
      updatedOptions.search = search;
    }

    return updatedOptions;
  }, [search, filter]);

  const { data, isLoading } = UseListProduct({
    options,
  });

  const hasMore = data && data.pageIndex < data.totalPages;

  useInfiniteScroll(isLoading, hasMore!, () => {
    setFilter({
      ...filter,
      pageIndex: 1,
      pageSize: filter?.pageSize ? filter?.pageSize + 8 : 8,
    });
  });

  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-3 border border-secondary rounded-xl">
        <Filter />
      </div>
      <div className="col-span-9">
        <div className="flex items-center justify-between">
          <Show>
            <Show.When isTrue={filter.ascByCreatedAt!}>
              <Button
                variant="outline"
                onClick={() =>
                  setFilter({
                    ...filter,
                    ascByCreatedAt: !filter.ascByCreatedAt,
                  })
                }
              >
                <ArrowDownWideNarrow size={24} />
                <span className="hidden font-semibold">Created At</span>
              </Button>
            </Show.When>
            <Show.Else>
              <Button
                variant="outline"
                onClick={() =>
                  setFilter({
                    ...filter,
                    ascByCreatedAt: !filter.ascByCreatedAt,
                  })
                }
              >
                <ArrowUpNarrowWide size={24} />
                <span className="hidden font-semibold">Created At</span>
              </Button>
            </Show.Else>
          </Show>

          <div>
            <span>
              Show {data?.pageIndex} of {data?.totalPages} products
            </span>
          </div>
        </div>

        <ListItem data={data!} isLoading={isLoading} />
        <div className="flex justify-center w-full ">
          {data && data.data.length !== 0 && (
            <Button
              className="space-x-2"
              onClick={() => {
                setFilter({
                  ...filter,
                  pageSize: filter?.pageSize ? filter?.pageSize + 8 : 8,
                  pageIndex: 1,
                });
              }}
            >
              <ChevronDown size={24} />
              <span>See more</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const MemoProductIsLogin = React.memo(ProductIsLogin);

export default MemoProductIsLogin;
