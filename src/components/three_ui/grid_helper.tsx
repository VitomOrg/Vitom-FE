// src/components/three_ui/GridScreen.tsx
import React from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

interface GridScreenProps {
  positionY?: number;
  heightObjet?: number;
}

const GridScreen: React.FC<GridScreenProps> = ({ heightObjet }) => {
  const { scene } = useThree();

  React.useEffect(() => {
    // Set the size of the grid
    const size = 10;
    const divisions = 10;

    // Create a grid helper and set its position
    const gridHelper = new THREE.GridHelper(size, divisions);
    gridHelper.position.y = -heightObjet! / 2 - 0.2;

    scene.add(gridHelper);

    // Cleanup the grid helper on unmount
    return () => {
      scene.remove(gridHelper);
    };
  }, [scene, heightObjet]);

  return null; // This component doesn't render anything itself
};

export default GridScreen;
