import { useThree } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

const CameraController = ({ model }: { model: THREE.Group | null }) => {
  const { camera } = useThree();

  React.useEffect(() => {
    if (!model) return;
  }, [model, camera]);

  return null;
};

export default CameraController;
