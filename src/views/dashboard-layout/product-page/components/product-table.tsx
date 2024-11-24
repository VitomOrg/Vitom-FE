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
  useToast,
} from "@/components/ui";
import { License } from "@/domains/enums";
import { ProductEditRequest } from "@/domains/models/products";
import { ProductPageRequest } from "@/domains/models/products/product-page.request";
import { ProductResponse } from "@/domains/models/products/product.response";
import { ProductApi } from "@/domains/services";
import { UseListProduct } from "@/domains/stores/query-hook/product/use-product-list";
import { useProductStore } from "@/domains/stores/zustand/products";
import { useSearchStore } from "@/domains/stores/zustand/search";
import { ProductColumns } from "@/views/dashboard-layout/product-page/components/product-column";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductTable = () => {
  const { search } = useSearchStore();
  const { filter } = useProductStore();
  const { toast } = useToast();
  const navigate = useNavigate();

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

  const { data, isLoading, refetch } = UseListProduct({ options });

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= data!.totalPages) {
      setCurrentPage(page);
    }
  };

  const handleUpdateProduct = (id: string, data: ProductResponse) => {
    const value: ProductEditRequest = {
      license: data.license === "Free" ? License.Free : License.Pro,
      name: data.name,
      description: data.description,
      price: data.price,
      typeIds: data.types.map((type) => type.id),
      softwareIds: data.softwares.map((software) => software.id),
      files: data.images.map((image) => image.url),
      modelMaterialFiles: data.modelMaterials.map((model) => model.url),
      fbx: data.fbxUrl,
      obj: data.objUrl,
      glb: data.glbUrl,
    };

    navigate(`${id}/edit`, { state: value });
  };

  const handleDelete = async (id: string) => {
    const response = await ProductApi.deleteProduct(id);

    if (response === 204) {
      toast({
        title: "Success",
        description: "Product has been deleted",
      });
      refetch();
    }

    if (response === 400 || response === 404 || response === 403) {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    }
  };

  return (
    <div className="space-y-3">
      <DataTable
        columns={ProductColumns({
          getId: (id: string) => navigate(`/dashboard/products/${id}`),
          updateProduct: (id: string, data: ProductResponse) =>
            handleUpdateProduct(id, data),
          removeProduct: (id: string) => handleDelete(id),
        })}
        data={(data && data.data) || []}
        isLoading={isLoading}
      />
      <div className="flex flex-row items-center justify-between gap-2 ">
        <div></div>
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
