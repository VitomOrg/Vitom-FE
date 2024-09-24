import { RootRequest } from "@/domains/models/root/root.request";

export interface BlogPageRequest extends RootRequest {
  keyword: string;
}
