import { Separator } from "@/components/ui";
import useTransactions from "@/domains/stores/query-hook/transactions/use-transactions";
import HistoryList from "@/views/main-layout/history-order-page/components/history-list";

const HistoryPage = () => {
  const {
    data: transactions,
    isLoading,
    error,
  } = useTransactions({
    options: {
      pageIndex: 1,
      pageSize: 30,
    },
  });

  return (
    <div className="container my-10">
      <h6 className="font-semibold">History Order</h6>

      <Separator className="my-4 border border-gray" />

      <HistoryList
        historyOrder={transactions?.data || []}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default HistoryPage;
