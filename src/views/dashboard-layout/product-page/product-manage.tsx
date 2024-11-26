import Search from "@/components/common/search";
import { Button } from "@/components/ui";
import ProductTable from "@/views/dashboard-layout/product-page/components/product-table";
import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigation = useNavigate();
  return (
    <div className="w-full space-y-3">
      <div className="flex justify-between">
        <div className="w-96">
          <Search placeholder="Search material ... " />
        </div>

        <Button className="space-x-2" onClick={() => navigation("create")}>
          <PlusCircle size={20} />
          <span>Add Product</span>
        </Button>
      </div>
      <ProductTable />
    </div>
  );
};

export default ProductPage;
