import { Canvas } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

interface CanvasWrapperProps {
  children: React.ReactNode;
}

const CanvasWrapper: React.FC<CanvasWrapperProps> = ({ children }) => {
  return (
    <Canvas
      camera={{ position: [0, 1, 5], fov: 75 }}
      gl={{
        antialias: true,
        alpha: true,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
    >
      {children}
    </Canvas>
  );
};

export default CanvasWrapper;
