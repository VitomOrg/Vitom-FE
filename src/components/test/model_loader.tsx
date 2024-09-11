// src/components/ModelLoader.tsx
import React, { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three-stdlib";
import { MTLLoader } from "three-stdlib";
import { Group } from "three";

interface ModelLoaderProps {
  objPath: string;
  mtlPath: string;
}

const ModelLoader: React.FC<ModelLoaderProps> = ({ objPath, mtlPath }) => {
  const materials = useLoader(MTLLoader, mtlPath);
  const obj = useLoader(OBJLoader, objPath, (loader) => {
    (loader as OBJLoader).setMaterials(materials);
  });

  const groupRef = useRef<Group>(null);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.y = 0; // Đặt mô hình ở vị trí y = 0 như yêu cầu
    }
  }, [obj]);

  return <primitive object={obj} ref={groupRef} />;
};

export default ModelLoader;
