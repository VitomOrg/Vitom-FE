import { TypePageRequest } from "@/domains/models/type/type-page.request";
import { TypeApi } from "@/domains/services";
import { QueryKey } from "@/domains/stores/query-key";
import { useQuery } from "@tanstack/react-query";

interface TypesHook {
  options?: TypePageRequest;
}

const useTypes = ({ options }: TypesHook) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.LIST_TYPE, ...(options ? [options] : [])],
    queryFn: () => {
      return TypeApi.listType(options);
    },
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useTypes;
