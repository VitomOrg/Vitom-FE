import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FBXLoader } from "three-stdlib";

interface FBXModelProps {
  filePath: string;
  scale?: number;
  onModelLoaded?: (model: THREE.Group) => void;
  getHeight?: (number: number) => void;
}

const FBXModel = ({
  filePath,
  scale = 1,
  onModelLoaded,
  getHeight,
}: FBXModelProps) => {
  const fbxRef = useRef<THREE.Group | null>(null);
  const [fbx, setFbx] = useState<THREE.Group | null>(null);

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load(filePath, (fbx) => {
      fbx.scale.set(scale, scale, scale);

      // Set the position of the FBX model so that it sits on the ground
      const boundingBox = new THREE.Box3().setFromObject(fbx);

      const height = boundingBox.max.y - boundingBox.min.y;
      fbx.position.y = -boundingBox.min.y - height / 2;

      fbxRef.current = fbx;
      setFbx(fbx);
      onModelLoaded?.(fbx);
    });
  }, [filePath, scale, onModelLoaded]);

  useEffect(() => {
    if (fbx) {
      const boundingBox = new THREE.Box3().setFromObject(fbx);
      const height = boundingBox.max.y - boundingBox.min.y;
      getHeight?.(height);
    }
  }, [fbx, getHeight]);

  return fbx ? <primitive ref={fbxRef} object={fbx} /> : null;
};

export default FBXModel;
