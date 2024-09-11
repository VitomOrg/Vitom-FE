import AmbientLight from "@/components/three_ui/ambient_light";
import CameraController from "@/components/three_ui/camera_controller";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import * as THREE from "three";
import FBXModel from "./fbx_model";
import GridScreen from "@/components/three_ui/grid_helper";

interface FbxViewerProps {
  filePath: string;
  scale?: number;
  showGrid?: boolean;
}

const FbxViewer = ({ filePath, scale = 1, showGrid }: FbxViewerProps) => {
  const [model, setModel] = useState<THREE.Group | null>(null);
  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{ position: [0, 1, 3], fov: 75 }}
      onCreated={({ gl }) => {
        gl.outputColorSpace = THREE.SRGBColorSpace;
        gl.toneMapping = THREE.ACESFilmicToneMapping;
      }}
    >
      <Suspense fallback={null}>
        <AmbientLight />
        {showGrid && <GridScreen positionY={0} />}
        <FBXModel filePath={filePath} scale={scale} onModelLoaded={setModel} />
        {model && <CameraController model={model} />}
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default FbxViewer;
