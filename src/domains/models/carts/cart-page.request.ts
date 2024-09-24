import { RootRequest } from "@/domains/models/root/root.request";

export interface CartPageRequest extends RootRequest {
  AscByCreatedAt: boolean;
}
