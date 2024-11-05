import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCallback, useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ModelViewerProps {
  glbUrl: string;
}

export const Model: React.FC<ModelViewerProps> = ({ glbUrl }) => {
  const { scene } = useGLTF(glbUrl) as GLTF;
  const meshRef = useRef<THREE.Group>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [prevMousePosition, setPrevMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = useCallback((event: MouseEvent) => {
    setIsDragging(true);
    setPrevMousePosition({ x: event.clientX, y: event.clientY });
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isDragging || !meshRef.current) return;

      const dx = event.clientX - prevMousePosition.x;
      const dy = event.clientY - prevMousePosition.y;

      meshRef.current.rotation.y += dx * 0.01; // Rotate around the Y-axis
      meshRef.current.rotation.x += dy * 0.01; // Rotate around the X-axis

      setPrevMousePosition({ x: event.clientX, y: event.clientY });
    },
    [isDragging, prevMousePosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useFrame(() => {
    // Add any continuous animations or updates here if needed
  });

  // Attach mouse event listeners
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp]);

  return <primitive ref={meshRef} object={scene} />;
};
