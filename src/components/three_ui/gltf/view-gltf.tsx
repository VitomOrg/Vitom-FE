import { ErrorBoundary } from "@/components/hoc/error-boundary";
import { Loading } from "@/components/loading";
import { Camera } from "@/components/three_ui/gltf/camera";
import { Light } from "@/components/three_ui/gltf/light";
import ModelGLTF from "@/components/three_ui/gltf/model-gltf";
import { Html, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import "./styles/index.css";

interface ViewGlTFProps {
  glbUrl: string;
  showGrid?: boolean;
}

const ViewGlTF: React.FC<ViewGlTFProps> = ({ glbUrl, showGrid }) => {
  const [error, setError] = useState(false);
  const [delayedRender, setDelayedRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedRender(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleError = (error: Error) => {
    console.error("Error loading GLB model:", error);
    setError(true);
  };

  return (
    <Canvas className="w-full border bg-background rounded-xl gradient">
      <Camera />
      <Light />
      <Suspense
        fallback={
          <Text color="gray" position={[0, 0, 0]} fontSize={0.1}>
            <Html center>
              <Loading />
            </Html>
          </Text>
        }
      >
        {delayedRender && !error ? (
          <ErrorBoundary onError={handleError}>
            <ModelGLTF glbUrl={glbUrl} showGrid={showGrid} />
          </ErrorBoundary>
        ) : (
          <Text color="red" position={[0, 0, 0]} fontSize={0.1}>
            <Html center>
              <Loading />
            </Html>
          </Text>
        )}
      </Suspense>
    </Canvas>
  );
};

export default ViewGlTF;
