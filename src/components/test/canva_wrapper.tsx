import { cn } from "@/lib";
import { Canvas } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

interface CanvasWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const CanvasWrapper: React.FC<CanvasWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <Canvas
      className={cn("bg-black size-full min-h-[400px] ", className)}
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
