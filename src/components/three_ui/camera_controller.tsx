import { useThree } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

interface CameraControllerProps {
  model: THREE.Group | null;
  distance?: number; // Khoảng cách camera đến mô hình
}

const CameraController: React.FC<CameraControllerProps> = ({
  model,
  distance,
}) => {
  const { camera } = useThree();

  React.useEffect(() => {
    if (!model) return;

    // Compute bounding box
    const boundingBox = new THREE.Box3().setFromObject(model);
    const size = boundingBox.getSize(new THREE.Vector3()).length();

    // Set camera position based on model size and distance
    camera.position.set(
      size / 2 + distance!, // X
      size / 2, // Y
      size / 2 + distance! // Z
    );

    // Look at the model, but at a 45-degree angle
    camera.lookAt(new THREE.Vector3(0, size / 2, 0));

    // Rotate camera to achieve 45-degree angle
    camera.rotation.x = -Math.PI / 2;
    camera.rotation.y = Math.PI / 2;

    // Ensure camera is updated
    camera.updateProjectionMatrix();
  }, [model, camera, distance]);

  return null;
};

export default CameraController;
