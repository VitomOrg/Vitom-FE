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
      <ambientLight intensity={2} />{" "}
      {/* Increase the intensity of the ambient light */}
      {/* Add multiple directional lights from different angles */}
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <directionalLight position={[-20, 15, 35]} intensity={1} />
      <directionalLight position={[15, -20, 15]} intensity={1} />
      <directionalLight position={[-5, -5, 5]} intensity={1} />
      {/* Add a point light to illuminate from the center */}
      <pointLight position={[2, 2, 2]} intensity={1} />
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
