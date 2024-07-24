// src/components/FBXModel.tsx
import React, { useRef, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three-stdlib";
import { Object3D } from "three";

interface FBXModelProps {
  url: string;
  scale?: number;
  rotationSpeed?: number;
}

const FBXModel: React.FC<FBXModelProps> = ({
  url,
  scale = 1,
  rotationSpeed = 0.01,
}) => {
  const fbx = useLoader(FBXLoader, url);
  const modelRef = useRef<Object3D>(null);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.scale.set(scale, scale, scale);
    }
  }, [scale]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += rotationSpeed;
    }
  });

  return <primitive ref={modelRef} object={fbx} />;
};

export default FBXModel;
