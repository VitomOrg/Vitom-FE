// src/components/ModelLoader.tsx
import React, { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three-stdlib";
import { MTLLoader } from "three-stdlib";
import { Group, MeshStandardMaterial } from "three";

interface ModelLoaderProps {
  objPath: string;
  mtlPath: string;
  color?: string; // Optional: Allow color to be passed as a prop
}

const ModelLoader: React.FC<ModelLoaderProps> = ({
  objPath,
  mtlPath,
  color = "#ffffff",
}) => {
  const materials = useLoader(MTLLoader, mtlPath);
  const obj = useLoader(OBJLoader, objPath, (loader) => {
    (loader as OBJLoader).setMaterials(materials);
  });

  const groupRef = useRef<Group>(null);

  console.log("obj", obj);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.y = 0;
      // Iterate through all materials and update their color
      groupRef.current.traverse((child) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((child as any).isMesh && (child as any).material) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const material = (child as any).material;
          if (Array.isArray(material)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            material.forEach((mat: any) => {
              if (mat instanceof MeshStandardMaterial) {
                mat.color.set(color);
              }
            });
          } else if (material instanceof MeshStandardMaterial) {
            material.color.set(color);
          }
        }
      });
    }
  }, [obj, color]);

  return <primitive object={obj} ref={groupRef} />;
};

export default ModelLoader;
