import { Separator } from "@/components/ui";

import HistoryList from "@/views/main-layout/history-order-page/components/history-list";
import ProductFavorites from "@/views/main-layout/history-order-page/components/product-favorites";
import ProductPayments from "@/views/main-layout/history-order-page/components/product-payments";

const HistoryPage = () => {
  return (
    <div className="container flex flex-col gap-4 my-10">
      <div>
        <h6 className="font-semibold">Product Payments</h6>
        <Separator className="my-4 border border-gray" />
        <ProductPayments />
      </div>
      <div>
        <h6 className="font-semibold">Product Favorites</h6>
        <Separator className="my-4 border border-gray" />
        <ProductFavorites />
      </div>
      <div>
        <h6 className="font-semibold">History Order</h6>
        <Separator className="my-4 border border-gray" />

        <HistoryList />
      </div>
    </div>
  );
};

export default HistoryPage;
