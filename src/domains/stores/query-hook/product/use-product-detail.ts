import { ProductDetail } from "@/domains/models/products/product-detail.response";
import { ProductApi } from "@/domains/services";
import { QueryKey } from "@/domains/stores/query-key";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type UseListProductParams = {
  queryOptions?: Omit<UseQueryOptions<ProductDetail>, "queryKey" | "queryFn">;
  id: string;
};

export const UseProductDetail = ({
  queryOptions,
  id,
}: UseListProductParams) => {
  return useQuery({
    ...queryOptions,
    queryKey: [QueryKey.DETAIL_PRODUCT],
    queryFn: () => ProductApi.getProduct(id),
  });
};
