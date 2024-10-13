import { DataTable } from "@/components/common/data_table";
import { ProductPageRequest } from "@/domains/models/products/product-page.request";
import { UseListProduct } from "@/domains/stores/query-hook/product/use-product-list";
import { useProductStore } from "@/domains/stores/zustand/products";
import { useSearchStore } from "@/domains/stores/zustand/search";
import { ProductColumns } from "@/views/productmanage/components/product-column";
import { useMemo } from "react";

const ProductTable = () => {
  const { search } = useSearchStore();
  const { filter } = useProductStore();

  const options: ProductPageRequest = useMemo(() => {
    const updatedOptions: ProductPageRequest = {
      ...filter,
      pageIndex: 1,
      pageSize: filter?.pageSize ? filter.pageSize : 8,
    };

    if (search?.trim()) {
      updatedOptions.search = search;
    }

    return updatedOptions;
  }, [filter, search]);

  const { data, isLoading } = UseListProduct({ options });

  if (data === undefined) return null;

  return (
    <DataTable
      columns={ProductColumns}
      data={data.data}
      isLoading={isLoading}
    />
  );
};

export default ProductTable;
