import { GridHelper } from "three";
import { useRef, useEffect } from "react";

export const Grid = () => {
  const gridRef = useRef<GridHelper | null>(null);

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.visible = true; // Toggle visibility if needed
    }
  }, []);

  return <gridHelper ref={gridRef} args={[10, 10]} />;
};
