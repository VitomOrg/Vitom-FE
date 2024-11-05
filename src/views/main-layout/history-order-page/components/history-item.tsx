import { Badge } from "@/components/ui";

const HistoryItem = () => {
  return (
    <div>
      <div className="grid grid-cols-12 py-2 border rounded-sm bg-accent/10 hover:bg-accent/5">
        <div className="col-span-3 text-center"></div>
        <div className="col-span-3 text-center">
          <span>{}</span>
        </div>
        <div className="col-span-3 text-center">
          <span>Method</span>
        </div>
        <div className="col-span-3 text-center">
          <Badge>
            <span>Action</span>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
