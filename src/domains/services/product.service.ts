import { ProductDetail } from "@/domains/models/products/product-detail.response";
import {
  ProductFavoriteRequest,
  ProductPageRequest,
} from "@/domains/models/products/product-page.request";
import { ProductRequest } from "@/domains/models/products/product.request";
import { ProductResponse } from "@/domains/models/products/product.response";
import { Value } from "@/domains/models/root/root.response";
import { handleApiCall } from "@/lib/handle-api-call";

export const ProductApi = {
  listProduct: async (
    options?: ProductPageRequest
  ): Promise<Value<ProductResponse[]>> => {
    return handleApiCall<Value<ProductResponse[]>>("get", "/products/list", {
      params: options,
      paramsSerializer: {
        indexes: null,
      },
    }) as Promise<Value<ProductResponse[]>>;
  },

  getProduct: async (Id: string): Promise<ProductDetail> => {
    return handleApiCall<ProductDetail>("get", `/products/${Id}`, {
      params: { Id },
    }) as Promise<ProductDetail>;
  },

  getFavoriteProduct: async (
    option: ProductFavoriteRequest
  ): Promise<Value<ProductResponse[]>> => {
    return handleApiCall<Value<ProductResponse[]>>("get", "/products/user", {
      params: option,
    }) as Promise<Value<ProductResponse[]>>;
  },

  createProduct: async (data: ProductRequest): Promise<null> => {
    return handleApiCall<null>("post", "/products", data) as Promise<null>;
  },

  updateProduct: async (data: ProductRequest, id: string): Promise<null> => {
    return handleApiCall<null>("put", `/products/${id}`, data) as Promise<null>;
  },

  deleteProduct: async (id: string): Promise<null> => {
    return handleApiCall<null>("delete", `/products/${id}`) as Promise<null>;
  },
};
