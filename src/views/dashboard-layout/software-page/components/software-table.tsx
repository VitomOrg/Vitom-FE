import { DataTable } from "@/components/common/data_table";
import { useToast } from "@/components/ui";
import { SoftwareResponse } from "@/domains/models/softwares";
import { SoftwareApi } from "@/domains/services";
import useSoftware from "@/domains/stores/query-hook/software/use-software";
import { SoftwareColumns } from "@/views/dashboard-layout/software-page/components/software-columns";
import React from "react";
import { useNavigate } from "react-router-dom";

interface SoftwareTableProps {
  data: SoftwareResponse[];
  isLoading: boolean;
}

const SoftwareTable: React.FC<SoftwareTableProps> = ({ data, isLoading }) => {
  const navigation = useNavigate();
  const { toast } = useToast();
  const { refetch } = useSoftware({
    options: {
      pageIndex: 1,
      pageSize: 10,
    },
  });

  const handleDelete = async (id: string) => {
    const response = await SoftwareApi.deleteSoftware(id);

    if (response === true) {
      toast({
        title: "Software deleted successfully",
        description: `Software has been deleted`,
      });
      refetch();
    } else {
      toast({
        title: "Failed to delete software",
        description: "Failed to delete software",
      });
    }
  };
  return (
    <div>
      <DataTable
        isLoading={isLoading}
        data={data}
        columns={SoftwareColumns({
          getId: (id: string) => navigation(`${id}`),
          editData: (data: SoftwareResponse) =>
            navigation(`${data.id}/edit`, { state: data }),
          deleteData: (id: string) => handleDelete(id),
        })}
      />
    </div>
  );
};

export default SoftwareTable;
