import { RootRequest } from "@/domains/models/root/root.request";

export interface CartParamsRequest extends RootRequest {
  ascByCreatedAt: boolean;
}
