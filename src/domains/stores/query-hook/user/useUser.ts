import { UserApi } from "@/domains/services";
import { QueryKey } from "@/domains/stores/query-key";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type UseUserParams = {
  queryOptions?: Omit<UseQueryOptions<string>, "queryKey" | "queryFn">;
};

export const useUser = ({ queryOptions }: UseUserParams) => {
  return useQuery({
    ...queryOptions,
    queryKey: [QueryKey.USER],
    queryFn: () => UserApi.getUser(),
  });
};
