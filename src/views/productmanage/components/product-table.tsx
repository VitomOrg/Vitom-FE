import { DataTable } from "@/components/common/data_table";
import Pagination from "@/components/common/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { ProductResponse } from "@/domains/models/products";
import { ProductPageRequest } from "@/domains/models/products/product-page.request";
import { UseListProduct } from "@/domains/stores/query-hook/product/use-product-list";
import { useProductStore } from "@/domains/stores/zustand/products";
import { useSearchStore } from "@/domains/stores/zustand/search";
import { ProductColumns } from "@/views/productmanage/components/product-column";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductTable = () => {
  const navigate = useNavigate();
  const { search } = useSearchStore();
  const { filter } = useProductStore();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const options: ProductPageRequest = useMemo(() => {
    const updatedOptions: ProductPageRequest = {
      ...filter,
      pageIndex: currentPage,
      pageSize: pageSize,
    };

    if (search?.trim()) {
      updatedOptions.search = search;
    }

    return updatedOptions;
  }, [filter, search, currentPage, pageSize]);

  const { data, isLoading } = UseListProduct({ options });

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= data!.totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="space-y-3">
      <DataTable
        columns={ProductColumns({
          getId: (id: string) => navigate(`detail/${id}`),
          editData: (data: ProductResponse) =>
            navigate(`edit/${data.id}`, { state: data }),
          deleteData: (id: string) => console.log({ id }),
        })}
        data={(data && data.data) || []}
        isLoading={isLoading}
      />
      <div className="flex flex-row items-center justify-end gap-2 ">
        <Pagination
          className="flex items-center justify-between w-auto border rounded-lg border-muted"
          totalPages={(data && data.totalPages) || 1}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <div className="w-[200px]">
          <Select onValueChange={(value) => setPageSize(Number(value))}>
            <SelectTrigger>
              <SelectValue placeholder="Select a page" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Page</SelectLabel>
                {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem
                    key={pageSize}
                    value={pageSize.toString()}
                    onSelect={() => {
                      setPageSize(pageSize);
                      currentPage > 1 && setCurrentPage(1);
                    }}
                  >
                    {pageSize} rows
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
