import { SoftwareParamsRequest } from "@/domains/models/softwares";
import { SoftwareApi } from "@/domains/services";
import { QueryKey } from "@/domains/stores/query-key";
import { useQuery } from "@tanstack/react-query";

interface SoftwareHook {
  options?: SoftwareParamsRequest;
}

const useSoftware = ({ options }: SoftwareHook) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [QueryKey.LIST_SOFTWARE, ...(options ? [options] : [])],
    queryFn: () => SoftwareApi.listSoftware(options),
  });

  return { data, isLoading, error, refetch };
};

export default useSoftware;
