import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCallback, useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ModelGLTFProps {
  glbUrl: string;
  showGrid?: boolean;
}

const ModelGLTF: React.FC<ModelGLTFProps> = ({ glbUrl, showGrid }) => {
  const { scene } = useGLTF(glbUrl) as GLTF;
  const meshRef = useRef<THREE.Group>(null);
  const gridRef = useRef<THREE.GridHelper>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [modelHeight, setModelHeight] = useState(0);
  const [prevMousePosition, setPrevMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = useCallback((event: MouseEvent) => {
    setIsDragging(true);
    setPrevMousePosition({ x: event.clientX, y: event.clientY });
  }, []);

  const calculateModelHeight = useCallback(() => {
    const boundingBox = new THREE.Box3().setFromObject(scene);
    const height = (boundingBox.max.y - boundingBox.min.y) / 2;
    return height > 0 ? height : 1;
  }, [scene]);

  useEffect(() => {
    const height = calculateModelHeight();
    setModelHeight(height);
  }, [calculateModelHeight]);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isDragging || !meshRef.current) return;

      const dx = event.clientX - prevMousePosition.x;
      const dy = event.clientY - prevMousePosition.y;

      // console.log("dx", event.clientX, "dy", event.clientY);

      // Rotate the model based on mouse movement
      meshRef.current.rotation.y += dx * 0.01;
      meshRef.current.rotation.x += dy * 0.01;

      setPrevMousePosition({ x: event.clientX, y: event.clientY });
    },
    [isDragging, prevMousePosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useFrame(() => {
    // Add any continuous animations or updates here if needed
  });

  // Attach mouse event listeners
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp]);

  return (
    <group ref={meshRef}>
      {/* Model and gridHelper will move together */}
      <primitive object={scene} />
      {showGrid && (
        <gridHelper
          ref={gridRef}
          args={[4, 8, 0x888888, 0x444444]}
          position={[0, -modelHeight, 0]}
        />
      )}
    </group>
  );
};

export default ModelGLTF;
