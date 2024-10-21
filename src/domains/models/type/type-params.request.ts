import { RootRequest } from "@/domains/models/root/root.request";

export interface TypeParamsRequest extends RootRequest {
  keyword?: string;
}
