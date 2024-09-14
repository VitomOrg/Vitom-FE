import { RootRequest } from "@/domains/models/root/root.request";

export interface ReviewPageRequest extends RootRequest {
  productId: string;
}
