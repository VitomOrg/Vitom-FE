import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";

interface GLBModelProps {
  filePath: string;
  color?: THREE.Color | string; // Màu sắc bạn muốn áp dụng
}

const GLBModel = ({ filePath, color = "white" }: GLBModelProps) => {
  const ref = useRef<THREE.Group | null>(null);
  const [model, setModel] = useState<THREE.Group | null>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(filePath, (gltf) => {
      const model = gltf.scene;
      model.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;

          // Cập nhật màu sắc của tất cả các material của mesh
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((mat) => {
              if (mat instanceof THREE.MeshStandardMaterial) {
                mat.color.set(color);
              }
            });
          } else if (mesh.material instanceof THREE.MeshStandardMaterial) {
            mesh.material.color.set(color);
          }
        }
      });
      setModel(model);
      ref.current = model;
    });
  }, [filePath, color]);

  return model ? <primitive object={model} /> : null;
};

export default GLBModel;
