import { Badge } from "@/components/ui";
import { TransactionResponse } from "@/domains/models/transactions";
import React from "react";

interface HistoryItemProps {
  data: TransactionResponse;
  index: number;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ data, index }) => {
  return (
    <div>
      <div className="grid grid-cols-12 py-2 border rounded-sm bg-accent/10 hover:bg-accent/5">
        <div className="col-span-3 text-center">{index + 1}</div>
        <div className="col-span-3 text-center">
          <span>{data.totalAmount}</span>
        </div>
        <div className="col-span-3 text-center">
          <span>{data.paymentMethod}</span>
        </div>
        <div className="col-span-3 text-center">
          <Badge>
            <span>{data.transactionStatus}</span>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
