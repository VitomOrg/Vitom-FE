import { axiosInstance } from "@/configs";
import { RootResponse, Value } from "@/domains/models/root/root.response";
import { TypesBodyRequest } from "@/domains/models/type";
import { TypeEditResponse } from "@/domains/models/type/type-edit.response";
import { TypePageRequest } from "@/domains/models/type/type-page.request";
import { TypeResponse } from "@/domains/models/type/type.response";
import { handleApiCall } from "@/lib/handle-api-call";
import axios from "axios";

export const TypeApi = {
  listType: async (
    options?: TypePageRequest
  ): Promise<Value<TypeResponse[]>> => {
    return handleApiCall<Value<TypeResponse[]>>("get", "/types", {
      params: options,
    }) as Promise<Value<TypeResponse[]>>;
  },

  createType: async (
    data: TypesBodyRequest
  ): Promise<RootResponse<TypeEditResponse> | undefined> => {
    try {
      const response = await axiosInstance.post("/types", data);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  updateType: async (
    id: string,
    data: TypesBodyRequest
  ): Promise<boolean | undefined> => {
    try {
      const response = await axiosInstance.put(`/types/${id}`, data);

      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 204
      ) {
        return true;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  deleteType: async (id: string): Promise<boolean | undefined> => {
    try {
      const response = await axiosInstance.delete(`/types/${id}`);

      if (response.status === 200 || response.status === 204) {
        return true;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },
};
