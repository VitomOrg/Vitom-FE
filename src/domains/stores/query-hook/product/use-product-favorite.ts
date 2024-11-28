import { ProductUserRequest } from "@/domains/models/products";
import { ProductApi } from "@/domains/services";
import { QueryKey } from "@/domains/stores/query-key";
import { useQuery } from "@tanstack/react-query";

interface ProductFavorite {
  options?: ProductUserRequest;
}

export const useProductFavorites = ({ options }: ProductFavorite) => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: [QueryKey.LIST_PRODUCT_FAVORITE, ...(options ? [options] : [])],
    queryFn: () => ProductApi.getFavoriteProduct(options),
  });

  return { data, error, isLoading, refetch };
};
