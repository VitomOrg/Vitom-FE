import { RootRequest } from "@/domains/models/root/root.request";

export interface SoftwareParamsRequest extends RootRequest {
  keyword?: string;
}

export interface SoftwareOfProductRequest extends RootRequest {
  type?: string;
  ascByCreatedAt?: boolean;
}
