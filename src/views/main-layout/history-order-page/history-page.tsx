import { Separator } from "@/components/ui";
import useTransactions from "@/domains/stores/query-hook/transactions/use-transactions";
import HistoryList from "@/views/historypage/components/history-list";

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
    <div>
      <h6 className="font-semibold">History Page</h6>

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
