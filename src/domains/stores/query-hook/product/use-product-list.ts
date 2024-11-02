import { ProductPageRequest } from "@/domains/models/products/product-page.request";
import { ProductResponse } from "@/domains/models/products/product.response";
import { Value } from "@/domains/models/root/root.response";
import { ProductApi } from "@/domains/services";
import { QueryKey } from "@/domains/stores/query-key";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type UseListProductParams = {
  queryOptions?: Omit<
    UseQueryOptions<Value<ProductResponse[]>>,
    "queryKey" | "queryFn"
  >;
  options?: ProductPageRequest;
};

export const UseListProduct = ({
  queryOptions,
  options,
}: UseListProductParams) => {
  const {
    data: product,
    isLoading: isLoadingProduct,
    error: errorProduct,
    refetch,
  } = useQuery({
    ...queryOptions,
    queryKey: [QueryKey.LIST_PRODUCT, options],
    queryFn: () => ProductApi.listProduct(options),
  });

  return {
    data: product,
    isLoading: isLoadingProduct,
    error: errorProduct,
    refetch,
  };
};
