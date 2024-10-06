import { CartPageRequest } from "@/domains/models/carts/cart-page.request";
import { CartResponse } from "@/domains/models/carts/cart.response";
import { Value } from "@/domains/models/root/root.response";
import { CartApi } from "@/domains/services/carts.service";
import { QueryKey } from "@/domains/stores/query-key";
import { useQuery } from "@tanstack/react-query";

interface CartHook {
  options?: CartPageRequest;
}

export const useCart = ({ options }: CartHook = {}) => {
  const {
    data: cartData,
    isLoading: isLoadingCart,
    refetch: refetchCart,
  } = useQuery<Value<CartResponse[]>>({
    queryKey: [QueryKey.CART, ...(options ? [options] : [])],
    queryFn: () => CartApi.getCart(options),
  });

  return {
    cartData,
    isLoadingCart,
    refetchCart,
  };
};
