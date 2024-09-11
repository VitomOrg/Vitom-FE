import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FBXLoader } from "three-stdlib";

interface FBXModelProps {
  filePath: string;
  scale?: number;
  onModelLoaded?: (model: THREE.Group) => void;
}

const FBXModel = ({ filePath, scale = 1, onModelLoaded }: FBXModelProps) => {
  const fbxRef = useRef<THREE.Group | null>(null);
  const [fbx, setFbx] = useState<THREE.Group | null>(null);

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load(filePath, (fbx) => {
      fbx.scale.set(scale, scale, scale);
      fbxRef.current = fbx;
      setFbx(fbx);
      onModelLoaded?.(fbx);
    });
  }, [filePath, scale, onModelLoaded]);

  return fbx ? <primitive ref={fbxRef} object={fbx} /> : null;
};

export default FBXModel;
