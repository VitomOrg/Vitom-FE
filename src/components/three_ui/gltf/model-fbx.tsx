import { useCallback, useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { FBXLoader } from "three-stdlib";

interface ModelFBXProps {
  fbxUrl: string;
  showGrid?: boolean;
}

const ModelFBX: React.FC<ModelFBXProps> = ({ fbxUrl, showGrid }) => {
  const meshRef = useRef<THREE.Group>(null);
  const gridRef = useRef<THREE.GridHelper>(null);
  const [scene, setScene] = useState<THREE.Group | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [modelHeight, setModelHeight] = useState(0);
  const [prevMousePosition, setPrevMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load(
      fbxUrl,
      (loadedScene: THREE.Group) => {
        setScene(loadedScene);
      },
      undefined,
      (error: ErrorEvent) => {
        console.error("Error loading FBX model:", error.message);
      }
    );
  }, [fbxUrl]);

  useEffect(() => {
    if (!scene) return;
    const boundingBox = new THREE.Box3().setFromObject(scene);
    const height = (boundingBox.max.y - boundingBox.min.y) / 2;
    setModelHeight(height > 0 ? height : 1);
  }, [scene]);

  const handleMouseDown = (event: MouseEvent) => {
    setIsDragging(true);
    setPrevMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isDragging || !meshRef.current) return;

      const dx = event.clientX - prevMousePosition.x;
      const dy = event.clientY - prevMousePosition.y;

      meshRef.current.rotation.y += dx * 0.01;
      meshRef.current.rotation.x += dy * 0.01;

      setPrevMousePosition({ x: event.clientX, y: event.clientY });
    },
    [isDragging, prevMousePosition]
  );

  const handleMouseUp = () => setIsDragging(false);

  useFrame(() => {
    // Add any continuous animations or updates here if needed
  });

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [handleMouseMove]);

  return (
    <group ref={meshRef}>
      {scene && <primitive object={scene} />}
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

export default ModelFBX;
