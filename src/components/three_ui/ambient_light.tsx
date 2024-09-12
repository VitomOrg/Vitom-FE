import { useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";

interface AmbientLightProps {}

const AmbientLight: React.FC<AmbientLightProps> = () => {
  const directionalLightRef = useRef<THREE.DirectionalLight>(null);

  // Ensure that useHelper is used within the Canvas component
  useHelper(
    directionalLightRef as React.MutableRefObject<THREE.DirectionalLight>,
    THREE.DirectionalLightHelper,
    1
  );

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} />
      <hemisphereLight groundColor={0x444444} intensity={0.7} />
    </>
  );
};

export default AmbientLight;
