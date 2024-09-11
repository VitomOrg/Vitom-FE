import AmbientLight from "@/components/three_ui/ambient_light";
import CameraController from "@/components/three_ui/camera_controller";
import GridScreen from "@/components/three_ui/grid_helper";
import { cn } from "@/lib";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import * as THREE from "three";
import FBXModel from "./fbx_model";

interface FbxViewerProps {
  filePath: string;
  scale?: number;
  showGrid?: boolean;
  className?: string;
}

const FbxViewer = ({
  filePath,
  scale = 1,
  showGrid,
  className,
}: FbxViewerProps) => {
  const [model, setModel] = useState<THREE.Group | null>(null);
  const [height, setHeight] = useState<number>(0);

  const getHeight = (number: number) => {
    setHeight(number);
  };

  return (
    <Canvas className={cn("w-full", className)}>
      <Suspense fallback={null}>
        <AmbientLight />
        {showGrid && <GridScreen positionY={0} heightObjet={height} />}
        <FBXModel
          filePath={filePath}
          scale={scale}
          onModelLoaded={setModel}
          getHeight={getHeight}
        />
        {model && <CameraController model={model} distance={1} />}
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default FbxViewer;
