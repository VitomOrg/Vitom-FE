import { SoftwarePageRequest } from "@/domains/models/software/software-page.request";
import { SoftwareApi } from "@/domains/services";
import { QueryKey } from "@/domains/stores/query-key";
import { useQuery } from "@tanstack/react-query";

interface SoftwareHook {
  options?: SoftwarePageRequest;
}

const useSoftware = ({ options }: SoftwareHook) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.LIST_SOFTWARE, ...(options ? [options] : [])],
    queryFn: () => SoftwareApi.listSoftware(options),
  });

  // const { data, isLoading, error, fetchNextPage, hasNextPage } =
  //   useInfiniteQuery<Value<SoftwareResponse[]>, Error>({
  //     queryKey: [QueryKey.LIST_SOFTWARE, ...(options ? [options] : [])],
  //     queryFn: async () => await SoftwareApi.listSoftware(options),
  //     getNextPageParam: (lastPage, pages) => {
  //       return pages.length + 1;
  //     },
  //     initialPageParam: 0,
  //   });

  return { data, isLoading, error };
};

export default useSoftware;
