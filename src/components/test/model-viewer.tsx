import { Text, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState, useEffect } from "react";
import { GLTF } from "three-stdlib";

interface ModelViewerProps {
  glbUrl: string;
}

const Model: React.FC<ModelViewerProps> = ({ glbUrl }) => {
  const { scene } = useGLTF(glbUrl) as GLTF;
  return <primitive object={scene} />;
};

const ModelViewer: React.FC<ModelViewerProps> = ({ glbUrl }) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false); // Reset error state when URL changes
  }, [glbUrl]);

  const handleError = (error: Error) => {
    console.error("Error loading GLB model:", error);
    setError(true);
  };

  return (
    <Canvas>
      <Suspense
        fallback={
          <Text color="gray" position={[0, 0, 0]}>
            Loading model...
          </Text>
        }
      >
        {!error ? (
          <ErrorBoundary onError={handleError}>
            <Model glbUrl={glbUrl} />
          </ErrorBoundary>
        ) : (
          <Text color="red" position={[0, 0, 0]}>
            Failed to load model
          </Text>
        )}
      </Suspense>
    </Canvas>
  );
};

// Custom ErrorBoundary component
class ErrorBoundary extends React.Component<{
  onError: (error: Error) => void;
  children: React.ReactNode;
}> {
  componentDidCatch(error: Error) {
    this.props.onError(error);
  }

  render() {
    return this.props.children;
  }
}

export default ModelViewer;
