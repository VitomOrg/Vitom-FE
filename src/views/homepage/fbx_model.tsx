import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";

interface GLBModelProps {
  url: string;
  scale?: number;
  rotationSpeed?: number;
}

const GLBModel: React.FC<GLBModelProps> = ({
  url,
  scale = 1,
  rotationSpeed = 0.01,
}) => {
  const { scene } = useGLTF(url);
  const modelRef = useRef<Object3D>(null);

  // Thêm animation hoặc interaction nếu cần thiết
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={[scale, scale, scale]} // điều chỉnh kích thước của mô hình nếu cần
    />
  );
};

export default GLBModel;
