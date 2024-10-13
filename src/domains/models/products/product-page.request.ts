import { RootRequest } from "@/domains/models/root/root.request";

export interface ProductPageRequest extends RootRequest {
  tupeIds?: Array<string>;
  priceFrom?: number;
  priceTo?: number;
  ascByCreatedAt?: boolean;
  license?: string;
  softwareIds?: Array<string>;
  search?: string;
}

export interface ProductFavoriteRequest extends RootRequest {
  ascByCreatedAt?: boolean;
}
