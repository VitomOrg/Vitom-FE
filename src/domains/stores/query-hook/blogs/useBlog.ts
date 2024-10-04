import { BlogPageRequest } from "@/domains/models/blogs/blog-page.request";
import { BlogApi } from "@/domains/services/blogs.service";
import { QueryKey } from "@/domains/stores/query-key";
import { useQuery } from "@tanstack/react-query";

interface useBlogProps {
  options?: BlogPageRequest;
}

const useBlog = ({ options }: useBlogProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.LIST_BLOG, options],
    queryFn: () => BlogApi.getBlog(options),
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useBlog;
