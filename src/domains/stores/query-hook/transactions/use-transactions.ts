import { TransactionPageRequest } from "@/domains/models/transactions/transaction-page.request";
import { TransactionApi } from "@/domains/services";
import { QueryKey } from "@/domains/stores/query-key";
import { useQuery } from "@tanstack/react-query";

interface Transaction {
  options?: TransactionPageRequest;
}

const useTransactions = ({ options }: Transaction) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.LIST_TRANSACTION, ...(options ? [options] : [])],
    queryFn: () => TransactionApi.getTransaction(),
  });

  return { data, isLoading, error };
};

export default useTransactions;
