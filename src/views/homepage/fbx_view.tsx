import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import FBXModel from "./fbx_model";

interface FBXViewerProps {
  modelUrl: string;
  modelScale: number;
  modelRotationSpeed: number;
}

const FBXViewer: React.FC<FBXViewerProps> = ({
  modelUrl,
  modelScale,
  modelRotationSpeed,
}) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FBXModel
        url={modelUrl}
        scale={modelScale}
        rotationSpeed={modelRotationSpeed}
      />
      <OrbitControls />
    </Canvas>
  );
};

export default FBXViewer;
