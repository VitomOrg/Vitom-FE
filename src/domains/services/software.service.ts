import { Value } from "@/domains/models/root/root.response";
import {
  SoftwareOfProductRequest,
  SoftwarePageRequest,
} from "@/domains/models/software/software-page.request";
import { SoftwareRequest } from "@/domains/models/software/software.request";
import {
  SoftwareOfProductResponse,
  SoftwareResponse,
} from "@/domains/models/software/software.response";
import { handleApiCall } from "@/lib/handle-api-call";

export const SoftwareApi = {
  listSoftware: async (
    options?: SoftwarePageRequest
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

  createSoftware: async (data: SoftwareRequest): Promise<null> => {
    return handleApiCall<null>("post", "/softwares", data) as Promise<null>;
  },

  updateSoftware: async (Id: string, data: SoftwareRequest) => {
    return handleApiCall<null>("put", `/softwares/${Id}`, {
      params: { Id },
      data,
    }) as Promise<null>;
  },

  deleteSoftware: async (Id: string) => {
    return handleApiCall<null>("delete", `/softwares/${Id}`, {
      params: { Id },
    }) as Promise<null>;
  },
};
