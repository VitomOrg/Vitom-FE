import { axiosInstance } from "@/configs";
import {
  ProductEditRequest,
  ProductLikeResponse,
} from "@/domains/models/products";
import { ProductDetail } from "@/domains/models/products/product-detail.response";
import { ProductEditResponse } from "@/domains/models/products/product-edit.response";
import {
  ProductFavoriteRequest,
  ProductPageRequest,
} from "@/domains/models/products/product-page.request";
import { ProductResponse } from "@/domains/models/products/product.response";
import { RootResponse, Value } from "@/domains/models/root/root.response";
import { handleApiCall } from "@/lib/handle-api-call";
import axios from "axios";

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

  getProduct: async (id: string): Promise<ProductDetail> => {
    return handleApiCall<ProductDetail>(
      "get",
      `/products/${id}`
    ) as Promise<ProductDetail>;
  },

  getFavoriteProduct: async (
    option: ProductFavoriteRequest
  ): Promise<Value<ProductResponse[]>> => {
    return handleApiCall<Value<ProductResponse[]>>("get", "/products/user", {
      params: option,
    }) as Promise<Value<ProductResponse[]>>;
  },

  createProduct: async (
    data: ProductEditRequest
  ): Promise<RootResponse<ProductEditResponse> | undefined> => {
    try {
      // const formData = new FormData();

      // formData.append("license", data.license!.toString());
      // formData.append("name", data.name);
      // formData.append("description", data.description);
      // formData.append("price", data.price!.toString());
      // data.typeIds?.forEach((typeId) => {
      //   formData.append("typeIds", typeId);
      // });
      // data.softwareIds?.forEach((softwareId) => {
      //   formData.append("softwareIds", softwareId);
      // });
      // data.files?.forEach((file) => {
      //   formData.append("files", file);
      // });

      // data.modelMaterialFiles?.forEach((file) => {
      //   formData.append("modelMaterialFiles", file);
      // });
      // formData.append("fbx", data.fbx);
      // formData.append("obj", data.obj);
      // formData.append("glb", data.glb);

      const response = await axiosInstance.post<
        RootResponse<ProductEditResponse>
      >("/products", data);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return Promise.reject(error.response?.status);
      }
    }
  },

  updateProduct: async (
    id: string,
    data: ProductEditRequest
  ): Promise<RootResponse<ProductEditResponse> | undefined> => {
    try {
      // const formData = new FormData();

      // formData.append("id", id);
      // formData.append("license", data.license!.toString());
      // formData.append("name", data.name);
      // formData.append("description", data.description);
      // formData.append("price", data.price!.toString());
      // data.typeIds?.forEach((typeId) => {
      //   formData.append("typeIds", typeId);
      // });
      // data.softwareIds?.forEach((softwareId) => {
      //   formData.append("softwareIds", softwareId);
      // });
      // data.files?.forEach((file) => {
      //   formData.append("files", file);
      // });
      // data.modelMaterialFiles?.forEach((file) => {
      //   formData.append("modelMaterialFiles", file);
      // });
      // formData.append("fbx", data.fbx);
      // formData.append("obj", data.obj);
      // formData.append("glb", data.glb);

      const response = await axiosInstance.put<
        RootResponse<ProductEditResponse>
      >(`/products/${id}`, data);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return Promise.reject(error.response?.status);
      }
    }
  },

  putProductLiked: async (
    id: string
  ): Promise<RootResponse<ProductLikeResponse> | undefined> => {
    try {
      const response = await axiosInstance.put<
        RootResponse<ProductLikeResponse>
      >(
        `/products/like`,
        {},
        {
          params: {
            productId: id,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return Promise.reject(error.response?.status);
      }
    }
  },

  deleteProduct: async (id: string): Promise<number | undefined> => {
    try {
      const response = await axiosInstance.delete(`/products/${id}`);
      if (response.status === 204) {
        return response.status;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.status;
      }
    }
  },
};
