// src/components/ThreeDViewer.tsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

interface ThreeDViewerProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
}

const Model: React.FC<{ path: string }> = ({ path }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
};

const ThreeDViewer: React.FC<ThreeDViewerProps> = ({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
}) => {
  return (
    <Canvas
      camera={{ position: [0, 1, 3], fov: 75 }}
      gl={{ antialias: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={position} intensity={scale} />
      <Environment preset="sunset" />
      <Model path={modelPath} />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDViewer;
