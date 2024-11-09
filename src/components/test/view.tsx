import { ErrorBoundary } from "@/components/hoc/error-boundary";
import { Camera } from "@/components/test/camera";
import { Light } from "@/components/test/light";
import { Model } from "@/components/test/model";
import { Html, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import "./styles/index.css";
import { Button } from "@/components/ui";
import { GridIcon, Heart, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Loading } from "@/components/loading";

interface ModelViewerProps {
  glbUrl: string;
  productName: string;
  handleLike: () => void;
  isLiked: boolean;
}

export const ModelViewer: React.FC<ModelViewerProps> = ({
  glbUrl,
  productName,
  handleLike,
  isLiked,
}) => {
  const [error, setError] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [like, setLike] = useState(isLiked);
  const [show, setShow] = useState(true);
  const [delayedRender, setDelayedRender] = useState(false);
  const showRef = useRef(show);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedRender(true);
    }, 500);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  useEffect(() => {
    setError(false);
  }, [glbUrl]);

  const handleError = (error: Error) => {
    console.error("Error loading GLB model:", error);
    setError(true);
  };

  const handleToggle = () => {
    const newShow = !show;

    if (newShow !== showRef.current) {
      showRef.current = newShow;
      setShow(newShow);
    }
  };

  return (
    <div className="relative w-full mb-4 rounded-lg aspect-square">
      <div className="absolute z-10 flex items-center justify-between gap-3 top-4 left-3">
        <div className="px-4 py-2 text-sm border rounded-xl bg-muted/50 border-accent text-foreground ">
          {productName}
        </div>

        <Button
          className="px-2 py-4 border bg-muted/50 rounded-xl border-accent hover:bg-accent hover:text-background"
          onClick={() => {
            handleLike();
            setLike((prev) => !prev);
          }}
        >
          <Heart
            className={`size-5 ${
              like ? "text-destructive fill-current" : "text-foreground"
            }`}
            fill={like ? "currentColor" : "none"}
          />
        </Button>
      </div>
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
              <Model glbUrl={glbUrl} showGrid={showGrid} />
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
      <div className="absolute flex flex-col items-center justify-center gap-3 top-4 right-3">
        <Button variant="outline" onClick={handleToggle}>
          {show ? (
            <PanelLeftClose className="size-5" />
          ) : (
            <PanelLeftOpen className="size-5" />
          )}
        </Button>

        {show && (
          <div
            className={`py-3 rounded-lg bg-muted/50 animate-fade-in-right flex flex-col gap-4 border border-accent`}
          >
            <Button variant="ghost" onClick={() => setShowGrid(!showGrid)}>
              <GridIcon className="size-5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
