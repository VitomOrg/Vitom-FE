import { useProductPayment } from "@/domains/stores/query-hook/product/use-product-payments";
import MemoizedListItem from "@/views/main-layout/product-page/product-page/list-item";

const ProductPayments = () => {
  const { data, isLoading, error } = useProductPayment({});

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <MemoizedListItem data={data!} isLoading={isLoading} />;
};

export default ProductPayments;
