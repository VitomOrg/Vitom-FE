import { Separator } from "@/components/ui";

import HistoryList from "@/views/main-layout/history-order-page/components/history-list";

const HistoryPage = () => {
  

  return (
    <div className="container my-10">
      <h6 className="font-semibold">History Order</h6>

      <Separator className="my-4 border border-gray" />

      <HistoryList

      />
    </div>
  );
};

export default HistoryPage;
