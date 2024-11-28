import { ProductFavoriteRequest } from "@/domains/models/products";
import { ProductApi } from "@/domains/services";
import { QueryKey } from "@/domains/stores/query-key";
import { useQuery } from "@tanstack/react-query";

interface ProductPayment {
  options?: ProductFavoriteRequest;
}

export const useProductPayment = ({ options }: ProductPayment) => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: [QueryKey.LIST_PRODUCT_PAYMENT, ...(options ? [options] : [])],
    queryFn: () => ProductApi.getPaymentProduct(options),
  });

  return { data, error, isLoading, refetch };
};
