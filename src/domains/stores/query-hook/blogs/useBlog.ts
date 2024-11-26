import { BlogPageRequest } from "@/domains/models/blogs/blog-page.request";
import { BlogApi } from "@/domains/services/blogs.service";
import { QueryKey } from "@/domains/stores/query-key";
import { useQuery } from "@tanstack/react-query";

interface useBlogProps {
  options?: BlogPageRequest;
}

const useBlog = ({ options }: useBlogProps) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.LIST_BLOG, ...(options ? [options] : [])],
    queryFn: () => BlogApi.getBlog(options),
  });

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export default useBlog;
