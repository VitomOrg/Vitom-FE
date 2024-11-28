import { CartPageRequest } from "@/domains/models/carts/cart-page.request";
import { CartApi } from "@/domains/services/carts.service";
import { QueryKey } from "@/domains/stores/query-key";
import { useQuery } from "@tanstack/react-query";

type CartHook = {
  options?: CartPageRequest;
};

export const useCart = ({ options }: CartHook) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.CART, { options }],
    queryFn: () => CartApi.getCart(options),
  });

  return {
    data,
    isLoading,
    error,
    refetchCart: refetch,
  };
};
