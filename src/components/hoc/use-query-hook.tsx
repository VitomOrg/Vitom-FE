import {
  useQuery,
  UseQueryOptions,
  QueryKey as ReactQueryKey,
} from "@tanstack/react-query";

// Higher-Order Hook
function createUseQueryHook<TData, TParams>({
  queryKey,
  queryFn,
}: {
  queryKey: ReactQueryKey;
  queryFn: (params: TParams) => Promise<TData>;
}) {
  return (params?: TParams, queryOptions?: UseQueryOptions<TData>) => {
    const { data, isLoading, error, refetch } = useQuery({
      queryKey: [queryKey, ...(params ? [params] : [])],
      queryFn: () => queryFn(params!),
      ...queryOptions,
    });

    return { data, isLoading, error, refetch };
  };
}

export default createUseQueryHook;
