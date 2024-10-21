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

  // const { data, isLoading, error, fetchNextPage } = useInfiniteQuery<
  //   Value<SoftwareResponse[]>,
  //   Error
  // >({
  //   queryKey: [QueryKey.LIST_SOFTWARE, ...(options ? [options] : [])],
  //   queryFn: async ({ pageParam }) => {
  //     if (options) {
  //       options.pageIndex = pageParam as number;
  //     }
  //     return SoftwareApi.listSoftware(options);
  //   },
  //   getNextPageParam: (lastPage, allPage) => {
  //     return lastPage.data.length > 0 ? allPage.length + 1 : undefined;
  //   },
  //   initialPageParam: 1,
  // });

  return { data, isLoading, error };
};

export default useSoftware;
