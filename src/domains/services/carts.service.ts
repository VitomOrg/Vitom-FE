import { axiosInstance } from "@/configs";
import { CartPageRequest } from "@/domains/models/carts/cart-page.request";
import { CartRequest } from "@/domains/models/carts/cart.request";
import { CartResponse } from "@/domains/models/carts/cart.response";
import { CheckOutResponse } from "@/domains/models/carts/check-out.response";
import { RootResponse, Value } from "@/domains/models/root/root.response";
import { handleApiCall } from "@/lib/handle-api-call";
import axios from "axios";

export const CartApi = {
  getCart: async (
    options?: CartPageRequest
  ): Promise<RootResponse<Value<CartResponse[]>> | undefined> => {
    try {
      const response = await axiosInstance.get("/carts", {
        params: options,
      });

      return response.data as RootResponse<Value<CartResponse[]>>;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data as RootResponse<Value<CartResponse[]>>;
      }
    }
  },

  postCart: async (data: CartRequest): Promise<RootResponse<Value<null>>> => {
    return handleApiCall<RootResponse<Value<null>>>(
      "post",
      "/carts",
      data,
      true
    ) as Promise<RootResponse<Value<null>>>;
  },

  postCartCheckout: async (): Promise<CheckOutResponse> => {
    return handleApiCall<CheckOutResponse>(
      "post",
      "/carts/checkout"
    ) as Promise<CheckOutResponse>;
  },

  deleteCart: async (ProductId: string): Promise<RootResponse<Value<null>>> => {
    return handleApiCall<RootResponse<Value<null>>>(
      "delete",
      `/carts/${ProductId}`,
      {
        params: { ProductId },
      },
      true
    ) as Promise<RootResponse<Value<null>>>;
  },
};
