// import { Loading } from "@/components/loading";
// import AmbientLight from "@/components/three_ui/ambient_light";
// import CameraController from "@/components/three_ui/camera_controller";
// import GridScreen from "@/components/three_ui/grid_helper";
// import { cn } from "@/lib";
// import { OrbitControls } from "@react-three/drei";
// import { Canvas, CanvasProps } from "@react-three/fiber";
// import React, { Suspense, useState } from "react";
// import * as THREE from "three";

// interface GlbViewerProps extends CanvasProps {
//   filePath: string;
//   className?: string;
//   showGrid?: boolean;
//   scale?: number;
// }

// const GlbViewer: React.FC<GlbViewerProps> = ({
//   filePath,
//   className,
//   showGrid,
//   scale = 1,
//   ...props
// }) => {
//   const [model, setModel] = useState<THREE.Group | null>(null);
//   const [height, setHeight] = useState<number>(0);

//   const getHeight = (number: number) => {
//     setHeight(number);
//   };
//   return (
//     <Canvas
//       className={cn("rounded-xl shadow-lg shadow-primary ", className)}
//       {...props}
//     >
//       <AmbientLight />
//       {showGrid && <GridScreen positionY={0} heightObjet={height} />}
//       <Suspense fallback={<Loading />}>
//         {/* <GLBModel
//           filePath={filePath}
//           scale={scale}
//           onModelLoaded={setModel}
//           getHeight={getHeight}
//         /> */}
//       </Suspense>
//       {model && <CameraController model={model} distance={1} />}
//       <OrbitControls />
//     </Canvas>
//   );
// };

// export default GlbViewer;
