import { RootRequest } from "@/domains/models/root/root.request";

export interface TypePageRequest extends RootRequest {
  keyword?: string;
}
