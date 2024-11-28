import { useProductFavorites } from "@/domains/stores/query-hook/product/use-product-favorite";
import MemoizedListItem from "@/views/main-layout/product-page/product-page/list-item";

const ProductFavorites = () => {
  const { data, isLoading, error } = useProductFavorites({});

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return <MemoizedListItem data={data!} isLoading={isLoading} />;
};

export default ProductFavorites;
