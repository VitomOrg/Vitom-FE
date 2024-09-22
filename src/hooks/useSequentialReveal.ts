import { useEffect, useState } from "react";

const useSequentialReveal = (
  itemsCount: number,
  initialDelay: number = 1000
) => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    if (visibleIndex < itemsCount) {
      const timer = setTimeout(() => {
        setVisibleIndex((prev) => prev + 1);
      }, initialDelay);
      return () => clearTimeout(timer);
    }
  }, [visibleIndex, itemsCount, initialDelay]);

  return visibleIndex;
};

export default useSequentialReveal;
