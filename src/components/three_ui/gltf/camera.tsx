import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three"; // Import THREE

export const Camera = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.z = 5;
      cameraRef.current.position.y = 1.9;
      // cameraRef.current.position.x = 4;
      cameraRef.current.rotation.x = 0;
      cameraRef.current.rotation.y = 0;
      cameraRef.current.rotation.z = 0;
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault fov={50} />;
};
