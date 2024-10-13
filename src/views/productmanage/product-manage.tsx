import Search from "@/components/common/search";
import { Button } from "@/components/ui";
import ProductTable from "@/views/productmanage/components/product-table";

const ProductManage = () => {
  return (
    <div className="w-full space-y-3">
      <div className="flex justify-between">
        <div className="w-96">
          <Search placeholder="Search material ... " />
        </div>

        <Button>
          <span className="text-white">Add New Material</span>
        </Button>
      </div>
      <div className="flex gap-5">
        <div className="">
          <ProductTable />
        </div>
        <div className=" bg-slate-500">3</div>
      </div>
    </div>
  );
};

export default ProductManage;
