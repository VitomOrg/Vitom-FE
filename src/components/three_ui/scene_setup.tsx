import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const SceneSetup = () => {
  const { gl, scene } = useThree();

  useEffect(() => {
    // Set tone mapping to ACES (similar to Blender's default)
    gl.outputColorSpace = THREE.SRGBColorSpace;
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.0; // Blender default exposure

    // Set background to a light gray (similar to Blender's default world background)
    scene.background = new THREE.Color(0xa0a0a0);
  }, [gl, scene]);

  return null;
};

export default SceneSetup;
