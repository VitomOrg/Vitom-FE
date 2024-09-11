import assert from "@/assets";
import CanvasWrapper from "@/components/test/canva_wrapper";
import Controls from "@/components/test/controls";
import GLBModel from "@/components/test/glb_model";
import Lights from "@/components/test/light";

const ObjView = () => {
  return (
    <CanvasWrapper>
      <Lights />
      <Controls />
      <GLBModel filePath={assert.glb} />
    </CanvasWrapper>
  );
};

export default ObjView;
