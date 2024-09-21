import assert from "@/assets";
import GlbViewer from "@/components/three_ui/glb";
import { Card } from "@/components/ui";

const ListProduct = () => {
  return (
    <div className="flex gap-5  min-h-[600px] ">
      <div className="flex flex-col justify-end w-2/3 h-full gap-5 ">
        <Card className="w-48 h-64 ">
          <GlbViewer children filePath={assert.glb} />
        </Card>
        <Card className="w-48 h-64 ">
          <GlbViewer children filePath={assert.glb} />
        </Card>
      </div>
      <div className="flex flex-col w-2/3 h-full gap-5 ">
        <Card className="w-48 h-64 ">
          <GlbViewer children filePath={assert.glb} />
        </Card>
        <Card className="w-48 h-64 ">
          <GlbViewer children filePath={assert.glb} />
        </Card>
      </div>
      <div className="flex flex-col justify-center w-2/3 h-full gap-5 x">
        <Card className="w-48 h-64 ">
          <GlbViewer children filePath={assert.glb} />
        </Card>
        <Card className="w-48 h-64 ">
          <GlbViewer children filePath={assert.glb} />
        </Card>
      </div>
    </div>
  );
};

export default ListProduct;
