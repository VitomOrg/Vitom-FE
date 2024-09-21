import {
  QueryFunction,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";

/**
 * Create a global state using react-query
 * @param queryKey - The key of the query
 * @param queryFn - The function that will be called to fetch the data
 * @param initialData - The initial data of the query
 * @returns The data, setData, resetData, error, and isLoading of the query
 */

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
