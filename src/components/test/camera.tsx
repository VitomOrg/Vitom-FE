import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three"; // Import THREE

export const Camera = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.z = 5; // Customize position as needed
    }
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault fov={50} />;
};
