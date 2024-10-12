import Search from "@/components/common/search";
import { Button } from "@/components/ui";

const ProductManage = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-3 gap-4">
      <div className="col-span-5 ">
        <Search placeholder="Search material ... " />
      </div>
      <div className="col-span-2 col-start-11 ">
        <Button className="w-full">
          <span className="text-white">Add New Material</span>
        </Button>
      </div>
      <div className="col-span-5 col-start-8 row-span-2 row-start-2 bg-slate-500">
        3
      </div>
      <div className="col-span-7 col-start-1 row-span-2 row-start-2 bg-slate-500">
        4
      </div>
    </div>
  );
};

export default ProductManage;
