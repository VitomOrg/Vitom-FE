import { UserApi } from "@/domains/services";
import { QueryKey } from "@/domains/stores/query-key";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.USER],
    queryFn: () => UserApi.getUser(),
    refetchInterval: 300000,
  });

  return { data, isLoading, error };
};
