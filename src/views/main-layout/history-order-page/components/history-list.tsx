import { ScrollArea } from "@/components/ui";
import { TransactionResponse } from "@/domains/models/transactions/transaction.response";
import HistoryItem from "@/views/historypage/components/history-item";
import React from "react";

interface HistoryListProps {
  historyOrder: TransactionResponse[];
  isLoading: boolean;
  error: Error | null;
}

const HistoryList: React.FC<HistoryListProps> = ({
  historyOrder,
  isLoading,
  error,
}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (historyOrder.length === 0) {
    return (
      <div className="grid font-semibold text-center text-muted/50 place-content-center place-items-center h-96">
        <span>
          There is no transaction history. Please make a transaction first.
        </span>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-12 py-2 border rounded-sm">
        <div className="col-span-3 text-center"></div>
        <div className="col-span-3 text-center">
          <span>Date</span>
        </div>
        <div className="col-span-3 text-center">
          <span>Method</span>
        </div>
        <div className="col-span-3 text-center">
          <span>Action</span>
        </div>
      </div>
      <ScrollArea className="h-[500px]">
        <div className="my-3 space-y-2">
          {historyOrder.map((_, index) => (
            <HistoryItem key={index} />
          ))}
        </div>
      </ScrollArea>

      <div className="my-4 font-semibold text-center text-muted/50">
        <span>
          Thank you for using our service. We hope you have a great day!
        </span>
      </div>
    </div>
  );
};

export default HistoryList;
