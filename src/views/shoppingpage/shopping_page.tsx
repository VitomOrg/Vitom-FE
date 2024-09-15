import { useUser } from "@/domains/stores/query-hook/user/useUser";

const ShoppingPage = () => {
  const { data } = useUser({});
  console.log(data);

  return <div>ShoppingPage</div>;
};

export default ShoppingPage;
