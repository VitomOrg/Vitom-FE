import { RootRequest } from "@/domains/models/root/root.request";

export interface ReviewParamsRequest extends RootRequest {
  productId: string;
  ascByRating?: boolean;
}
