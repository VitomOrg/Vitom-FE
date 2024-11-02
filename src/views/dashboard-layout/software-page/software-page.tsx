import Pagination from "@/components/common/pagination";
import Search from "@/components/common/search";
import { Button } from "@/components/ui";
import useSoftware from "@/domains/stores/query-hook/software/use-software";
import { usePaginationStore } from "@/domains/stores/zustand/pagination";
import SoftwareTable from "@/views/dashboard-layout/software-page/components/software-table";
import { CirclePlus } from "lucide-react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const SoftwarePage = () => {
  const navigate = useNavigate();
  const { page, setPage } = usePaginationStore();

  const options = useMemo(() => {
    return {
      pageIndex: page.pageIndex,
      pageSize: page.pageSize,
    };
  }, [page]);

  const { data, isLoading } = useSoftware({ options });
  return (
    <div className="mb-10 space-y-4">
      <div className="flex justify-between">
        <div className="w-[300px]">
          <Search placeholder="Search software ..." />
        </div>
        <Button className="space-x-2" onClick={() => navigate("create")}>
          <CirclePlus size={24} />
          <span>Add Post</span>
        </Button>
      </div>
      <SoftwareTable data={data?.data || []} isLoading={isLoading} />
      <Pagination
        totalPages={data?.totalPages || 0}
        currentPage={page.pageIndex || 0}
        onPageChange={(nextPage: number) =>
          setPage({ ...page, pageIndex: nextPage })
        }
      />
    </div>
  );
};

export default SoftwarePage;
