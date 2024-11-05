import { ErrorBoundary } from "@/components/hoc/error-boundary";
import { Camera } from "@/components/test/camera";
import { Grid } from "@/components/test/grid";
import { Light } from "@/components/test/light";
import { Model } from "@/components/test/model";
import { Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

interface ModelViewerProps {
  glbUrl: string;
  showGrid?: boolean;
}

export const ModelViewer: React.FC<ModelViewerProps> = ({
  glbUrl,
  showGrid,
}) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [glbUrl]);

  const handleError = (error: Error) => {
    console.error("Error loading GLB model:", error);
    setError(true);
  };

  return (
    <Canvas className="border bg-background rounded-xl">
      <Camera />
      <Light />
      {showGrid && <Grid />}
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
