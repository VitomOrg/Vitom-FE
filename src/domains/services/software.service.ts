import { axiosInstance } from "@/configs";
import { RootResponse, Value } from "@/domains/models/root/root.response";
import {
  SoftwareBodyRequest,
  SoftwareEditResponse,
  SoftwareOfProductRequest,
  SoftwareOfProductResponse,
  SoftwareParamsRequest,
  SoftwareResponse,
} from "@/domains/models/softwares";

import { handleApiCall } from "@/lib/handle-api-call";
import axios from "axios";

export const SoftwareApi = {
  listSoftware: async (
    options?: SoftwareParamsRequest
  ): Promise<Value<SoftwareResponse[]>> => {
    return handleApiCall<Value<SoftwareResponse[]>>("get", "/softwares", {
      params: options,
    }) as Promise<Value<SoftwareResponse[]>>;
  },

  getProductForSoftware: async (
    options: SoftwareOfProductRequest
  ): Promise<Value<SoftwareOfProductResponse>> => {
    return handleApiCall<Value<SoftwareOfProductResponse>>(
      "get",
      "/softwares/products",
      {
        params: options,
      }
    ) as Promise<Value<SoftwareOfProductResponse>>;
  },

  createSoftware: async (
    data: SoftwareBodyRequest
  ): Promise<RootResponse<SoftwareEditResponse> | undefined> => {
    try {
      const response = await axiosInstance.post<
        RootResponse<SoftwareEditResponse>
      >("/softwares", data);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data as RootResponse<SoftwareEditResponse>;
      }
    }
  },

  updateSoftware: async (
    id: string,
    data: SoftwareBodyRequest
  ): Promise<boolean | undefined> => {
    try {
      const response = await axiosInstance.put(`/softwares/${id}`, data);

      if (
        response.status === 204 ||
        response.status === 200 ||
        response.status === 201
      ) {
        return true;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data as boolean;
      }
    }
  },

  deleteSoftware: async (id: string): Promise<boolean | undefined> => {
    try {
      const response = await axiosInstance.delete(`/softwares/${id}`);

      if (response.status === 204) {
        return true;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },
};
