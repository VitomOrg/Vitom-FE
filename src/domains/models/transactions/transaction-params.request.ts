import { RootRequest } from "@/domains/models/root/root.request";

export interface TransactionParamsRequest extends RootRequest {
  ascByCreatedAt?: boolean;
}
