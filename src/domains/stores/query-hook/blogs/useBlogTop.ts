import { BlogApi } from "@/domains/services/blogs.service";
import { QueryKey } from "@/domains/stores/query-key";
import { useQuery } from "@tanstack/react-query";

export const useBlogTop = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: [QueryKey.BLOG_TOP],
    queryFn: () => BlogApi.getBlobTop(),
  });

  return { data, error, isLoading, refetch };
};
