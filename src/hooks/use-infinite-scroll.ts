import { useEffect } from "react";

const useInfiniteScroll = (
  loading: boolean,
  hasMore: boolean,
  onLoadMore: () => void
) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        loading ||
        !hasMore ||
        window.innerHeight + document.documentElement.scrollTop + 1 <
          document.documentElement.offsetHeight
      )
        return;
      onLoadMore();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, hasMore, onLoadMore]);
};

export default useInfiniteScroll;
