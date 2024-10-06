import { BlogApi } from "@/domains/services/blogs.service";
import { QueryKey } from "@/domains/stores/query-key";
import { useQuery } from "@tanstack/react-query";

interface DetailBlog {
  id: string;
}

export const useDetailBlog = ({ id }: DetailBlog) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.DETAIL_PRODUCT, id],
    queryFn: () => BlogApi.getBlogById(id),
  });

  return {
    data,
    isLoading,
    error,
  };
};
