import { Value } from "@/domains/models/root/root.response";
import { TransactionPageRequest } from "@/domains/models/transactions/transaction-page.request";
import { TransactionResponse } from "@/domains/models/transactions/transaction.response";
import { handleApiCall } from "@/lib/handle-api-call";

export const TransactionApi = {
  getTransaction: async (
    options?: TransactionPageRequest
  ): Promise<Value<TransactionResponse[]>> => {
    return handleApiCall<Value<TransactionResponse[]>>(
      "get",
      "/transactions/user",
      {
        params: options,
      }
    ) as Promise<Value<TransactionResponse[]>>;
  },
};
