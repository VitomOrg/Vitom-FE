// src/components/three_ui/GridScreen.tsx
import React from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

interface GridScreenProps {
  positionY?: number;
}

const GridScreen: React.FC<GridScreenProps> = ({ positionY = -1 }) => {
  const { scene } = useThree();

  React.useEffect(() => {
    const size = 10; // Size of the grid
    const divisions = 10; // Number of divisions in the grid

    // Create the grid helper
    const gridHelper = new THREE.GridHelper(size, divisions);

    // Set the position of the grid helper
    gridHelper.position.y = positionY;

    // Add the grid helper to the scene
    scene.add(gridHelper);

    // Cleanup the grid helper on unmount
    return () => {
      scene.remove(gridHelper);
    };
  }, [positionY, scene]);

  return null; // This component doesn't render anything itself
};

export default GridScreen;
