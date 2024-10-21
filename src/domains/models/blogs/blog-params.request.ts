import { RootRequest } from "@/domains/models/root/root.request";

export interface BlogParamsRequest extends RootRequest {
  keyword?: string;
}
