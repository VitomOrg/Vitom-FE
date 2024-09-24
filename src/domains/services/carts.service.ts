import { CartPageRequest } from "@/domains/models/carts/cart-page.request";
import { CartRequest } from "@/domains/models/carts/cart.request";
import { CartResponse } from "@/domains/models/carts/cart.response";
import { Value } from "@/domains/models/root/root.response";
import { handleApiCall } from "@/lib/handle-api-call";

export const CartApi = {
  getCart: async (options: CartPageRequest): Promise<Value<CartResponse>> => {
    return handleApiCall<Value<CartResponse>>("get", "/carts", {
      params: options,
    }) as Promise<Value<CartResponse>>;
  },

  postCart: async (data: CartRequest): Promise<null> => {
    return handleApiCall<null>("post", "/carts", data) as Promise<null>;
  },

  postCartCheckout: async (): Promise<null> => {
    return handleApiCall<null>("post", "/carts/checkout") as Promise<null>;
  },

  deleteCart: async (ProductId: string): Promise<null> => {
    return handleApiCall<null>("delete", `/carts/${ProductId}`, {
      params: { ProductId },
    }) as Promise<null>;
  },
};
