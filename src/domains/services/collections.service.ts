import { CollectionPageRequest } from "@/domains/models/collections/collections-page.request";
import { CollectionRequest } from "@/domains/models/collections/collections.request";
import { CollectionsResponse } from "@/domains/models/collections/collections.response";
import { Value } from "@/domains/models/root/root.response";
import { handleApiCall } from "@/lib/handle-api-call";

export const CollectionApi = {
  getCollections: async (
    options: CollectionPageRequest
  ): Promise<Value<CollectionsResponse[]>> => {
    return handleApiCall<Value<CollectionsResponse[]>>("get", "/collections", {
      params: options,
    }) as Promise<Value<CollectionsResponse[]>>;
  },

  getColeectionsLike: async (
    options: CollectionPageRequest
  ): Promise<Value<CollectionsResponse[]>> => {
    return handleApiCall<Value<CollectionsResponse[]>>(
      "get",
      "/collections/liked",
      {
        params: options,
      }
    ) as Promise<Value<CollectionsResponse[]>>;
  },

  putCollection: async (data: CollectionRequest, Id: string) => {
    return handleApiCall<null>("put", `/collections`, {
      params: { Id },
      data,
    }) as Promise<null>;
  },

  putColeectionsLike: async (collectionId: string) => {
    return handleApiCall<null>("put", `/collections/like`, {
      params: { collectionId },
    }) as Promise<null>;
  },
};
