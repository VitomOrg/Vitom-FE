import { CartResponse } from "@/domains/models/carts/cart.response";
import { Value } from "@/domains/models/root/root.response";
import { CartApi } from "@/domains/services/carts.service";
import { QueryKey } from "@/domains/stores/query-key";
import { useQuery } from "@tanstack/react-query";

export const useCart = () => {
  const {
    data: cartData,
    isLoading: isLoadingCart,
    refetch: fetchCart,
  } = useQuery<Value<CartResponse[]>>({
    queryKey: [QueryKey.CART],
    queryFn: () => CartApi.getCart(),
  });

  return {
    cartData,
    isLoadingCart,
    fetchCart,
  };
};
