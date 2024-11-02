import { ReportsParamsRequest } from "@/domains/models/reports";
import { ReportApi } from "@/domains/services/report.service";
import { QueryKey } from "@/domains/stores/query-key";
import { useQuery } from "@tanstack/react-query";

interface UseReportQueryType {
  options?: ReportsParamsRequest;
}

export const UseReportQuery = ({ options }: UseReportQueryType) => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: [QueryKey.REPORTS, ...(options ? [options] : [])],
    queryFn: () => ReportApi.getReport(options),
  });

  return { data, error, isLoading, refetch };
};
