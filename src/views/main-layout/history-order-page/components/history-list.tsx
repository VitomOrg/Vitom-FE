import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  ScrollArea,
} from "@/components/ui";
import useTransactions from "@/domains/stores/query-hook/transactions/use-transactions";
import HistoryItem from "@/views/main-layout/history-order-page/components/history-item";
import React from "react";

interface HistoryListProps {}

const HistoryList: React.FC<HistoryListProps> = () => {
  const { data, isLoading, error } = useTransactions({
    options: {
      pageIndex: 1,
      pageSize: 30,
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data?.data.length === 0) {
    return (
      <div className="grid font-semibold text-center text-muted-foreground/50 place-content-center place-items-center h-96">
        <span>
          There is no transaction history. Please make a transaction first.
        </span>
      </div>
    );
  }

  return (
    <Card className="text-foreground">
      <CardHeader className="grid grid-cols-12 py-2 border rounded-sm bg-primary/20">
        <div className="col-span-3 text-center">
          <span>No.</span>
        </div>
        <div className="col-span-3 text-center">
          <span>Price</span>
        </div>
        <div className="col-span-3 text-center">
          <span>Method</span>
        </div>
        <div className="col-span-3 text-center">
          <span>Action</span>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="max-h-[500px]">
          <div className="my-3 space-y-2">
            {data?.data.map((order, index) => (
              <HistoryItem key={index} data={order} index={index} />
            ))}
          </div>
        </ScrollArea>
      </CardContent>

      <CardFooter className="my-4 font-semibold place-self-center text-muted-foreground/50">
        <span>
          Thank you for using our service. We hope you have a great day!
        </span>
      </CardFooter>
    </Card>
  );
};

export default HistoryList;
