import {
  QueryFunction,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";

export function createGlobalState<T>(
  queryKey: string[],
  queryFn: QueryFunction<T>,
  initialData: T | (() => T) | null = null
) {
  return function () {
    const queryClient = useQueryClient();

    const { data, error, isLoading } = useQuery<T, Error>({
      queryKey: queryKey,
      queryFn: queryFn,
      initialData: initialData,
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    } as UseQueryOptions<T, Error>);

    function setData(newData: Partial<T>) {
      queryClient.setQueryData(queryKey, (prevData: T | undefined) => {
        return { ...prevData, ...newData } as T;
      });
    }

    function resetData() {
      queryClient.invalidateQueries({ queryKey });
      queryClient.refetchQueries({ queryKey });
    }

    return { data, setData, resetData, error, isLoading };
  };
}
