import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";

interface GLBModelProps {
  filePath: string;
  scale?: number;
  onModelLoaded?: (model: THREE.Group) => void;
  getHeight?: (number: number) => void;
}

const GLBModel = ({
  filePath,
  onModelLoaded,
  getHeight,
  scale = 1,
}: GLBModelProps) => {
  const ref = useRef<THREE.Group | null>(null);
  const [model, setModel] = useState<THREE.Group | null>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(filePath, (gltf) => {
      const model = gltf.scene;

      model.scale.set(scale, scale, scale);
      model.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
        }
      });

      const boundingBox = new THREE.Box3().setFromObject(model);
      const height = boundingBox.max.y - boundingBox.min.y;
      model.position.y = -boundingBox.min.y - height / 2;

      ref.current = model;
      setModel(model);
      onModelLoaded?.(model);
    });
  }, [filePath, onModelLoaded, scale]);

  useEffect(() => {
    if (model) {
      const boundingBox = new THREE.Box3().setFromObject(model);
      const height = boundingBox.max.y - boundingBox.min.y;
      getHeight?.(height);
    }
  }, [model, getHeight]);

  return model ? <primitive object={model} /> : null;
};

export default GLBModel;
