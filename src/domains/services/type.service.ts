import { Value } from "@/domains/models/root/root.response";
import { TypePageRequest } from "@/domains/models/type/type-page.request";
import { TypesRequest } from "@/domains/models/type/type.request";
import { TypeResponse } from "@/domains/models/type/type.response";
import { handleApiCall } from "@/lib/handle-api-call";

export const TypeApi = {
  listType: async (
    options?: TypePageRequest
  ): Promise<Value<TypeResponse[]>> => {
    return handleApiCall<Value<TypeResponse[]>>("get", "/types", {
      params: options,
    }) as Promise<Value<TypeResponse[]>>;
  },

  createType: async (data: TypesRequest): Promise<null> => {
    return handleApiCall<null>("post", "/types", data) as Promise<null>;
  },

  updateType: async (data: TypePageRequest, id: string) => {
    return handleApiCall<null>("put", `/types/${id}`, {
      params: { id },
      data,
    }) as Promise<null>;
  },

  deleteType: async () => {},
};
