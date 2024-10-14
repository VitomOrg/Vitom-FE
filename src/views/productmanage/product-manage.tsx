import Search from "@/components/common/search";
import ObjView from "@/components/test";
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
      <div className="grid grid-cols-6 gap-10">
        <div className="col-span-4">
          <ProductTable />
        </div>
        <div className="col-span-2 ">
          <ObjView />
        </div>
      </div>
    </div>
  );
};

export default ProductManage;
