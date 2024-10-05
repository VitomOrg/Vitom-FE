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
    staleTime: 1000,
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  // const { mutateAsync: addToCart } = useMutation({
  //   mutationFn: (data: CartRequest) => CartApi.postCart(data),

  //   onSuccess: async () => {
  //     toast({
  //       title: "Success",
  //       description: "Added to cart",
  //     });

  //     const updatedCartData = await CartApi.getCart(); // Lấy dữ liệu mới từ API

  //     console.log("updatedCartData add", updatedCartData.data.length);

  //     queryClient.setQueryData<Value<CartResponse[]>>(
  //       [QueryKey.CART],
  //       updatedCartData
  //     ); // Cập nhật cache với dữ liệu mới
  //   },

  //   onError: (error: RootResponse<Value<null>>) => {
  //     toast({
  //       title: "Error",
  //       description: error.errors[0] as string,
  //     });
  //   },
  // });

  // const { mutate: deleteCart } = useMutation({
  //   mutationFn: (id: string) => CartApi.deleteCart(id),

  //   onSuccess: async () => {
  //     toast({
  //       title: "Success",
  //       description: "Removed from cart",
  //     });

  //     const updatedCartData = await CartApi.getCart(); // Lấy dữ liệu mới từ API

  //     console.log("updatedCartData delete", updatedCartData.data.length);

  //     queryClient.setQueryData<Value<CartResponse[]>>(
  //       [QueryKey.CART],
  //       updatedCartData
  //     );
  //   },

  //   onError: (error: RootResponse<Value<null>>) => {
  //     toast({
  //       title: "Error",
  //       description: error.errors[0] as string,
  //     });
  //   },
  // });

  return {
    cartData,
    isLoadingCart,
    refetchCart,
    // deleteCart,
    // addToCart,
  };
};
