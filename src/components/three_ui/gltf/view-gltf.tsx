import { ErrorBoundary } from "@/components/hoc/error-boundary";
import { Loading } from "@/components/loading";
import { Camera } from "@/components/three_ui/gltf/camera";
import { Light } from "@/components/three_ui/gltf/light";
import ModelGLTF from "@/components/three_ui/gltf/model-gltf";
import { Html, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import "./styles/index.css";
import ModelFBX from "@/components/three_ui/gltf/model-fbx";
import ModelOBJ from "@/components/three_ui/gltf/model-obj";

interface ViewGlTFProps {
  url: string;
  format?: "gltf" | "fbx" | "obj";
  showGrid?: boolean;
}

const ViewGlTF: React.FC<ViewGlTFProps> = ({ url, showGrid, format }) => {
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

  const renderModel = () => {
    switch (format) {
      case "gltf":
        return <ModelGLTF glbUrl={url} showGrid={showGrid} />;
      case "fbx":
        return <ModelFBX fbxUrl={url} showGrid={showGrid} />;
      case "obj":
        return <ModelOBJ objUrl={url} showGrid={showGrid} />;
      default:
        return null;
    }
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
          <ErrorBoundary onError={handleError}>{renderModel()}</ErrorBoundary>
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
