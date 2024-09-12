import assert from "@/assets";
import CanvasWrapper from "@/components/test/canva_wrapper";
import Controls from "@/components/test/controls";
import GLBModel from "@/components/test/glb_model";
import Lights from "@/components/test/light";
import ModelLoader from "@/components/test/model_loader";

const ObjView = () => {
  return (
    <CanvasWrapper>
      <Lights />
      <Controls />
      {/* <GLBModel filePath={assert.glb} /> */}
      <ModelLoader objPath={assert.obj} mtlPath={assert.mtl} color="#023459" />
    </CanvasWrapper>
  );
};

export default ObjView;
