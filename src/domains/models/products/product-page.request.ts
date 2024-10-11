import { RootRequest } from "@/domains/models/root/root.request";

export interface ProductPageRequest extends RootRequest {
  type?: string;
  priceFrom?: number;
  priceTo?: number;
  ascByCreatedAt?: boolean;
  license?: string;
  softwareIds?: string[];
  search?: string;
}

export interface ProductFavoriteRequest extends RootRequest {
  ascByCreatedAt?: boolean;
}
