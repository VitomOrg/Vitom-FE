import { RootRequest } from "@/domains/models/root/root.request";

export interface TransactionPageRequest extends RootRequest {
  AscByCreatedAt: boolean;
}
