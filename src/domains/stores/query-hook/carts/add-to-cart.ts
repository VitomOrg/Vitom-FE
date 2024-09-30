import { CartResponse } from "@/domains/models/carts/cart.response";
import { Value } from "@/domains/models/root/root.response";
import { CartApi } from "@/domains/services/carts.service";
import { QueryKey } from "@/domains/stores/query-key";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCart = () => {
  const queryClient = useQueryClient();

  const {
    data: cartData,
    isLoading: isLoadingCart,
    refetch: fetchCart,
  } = useQuery<Value<CartResponse[]>>({
    queryKey: [QueryKey.CART],
    queryFn: () => CartApi.getCart(),
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const { mutate: addToCart } = useMutation({
    mutationFn: (productId: string) => CartApi.postCart({ productId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.CART] });
    },
  });

  const { mutate: deleteFromCart } = useMutation({
    mutationFn: (productId: string) => CartApi.deleteCart(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.CART] });
    },
  });

  return {
    cartData,
    isLoadingCart,
    fetchCart,
    addToCart,
    deleteFromCart,
  };
};
