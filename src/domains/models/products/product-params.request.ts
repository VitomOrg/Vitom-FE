import { RootRequest } from "@/domains/models/root/root.request";

export interface ProductParamsRequest extends RootRequest {
  license?: string;
  search?: string;
  tupeIds?: Array<string>;
  softwareIds?: Array<string>;
  priceFrom?: number;
  priceTo?: number;
  ascByCreatedAt?: boolean;
}

export interface ProductUserRequest extends RootRequest {
  ascByCreatedAt?: boolean;
}
