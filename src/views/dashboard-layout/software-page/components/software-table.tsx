import { DataTable } from "@/components/common/data_table";
import { SoftwareResponse } from "@/domains/models/softwares";
import { SoftwareColumns } from "@/views/dashboard-layout/software-page/components/software-columns";
import React from "react";
import { useNavigate } from "react-router-dom";

interface SoftwareTableProps {
  data: SoftwareResponse[];
  isLoading: boolean;
}

const SoftwareTable: React.FC<SoftwareTableProps> = ({ data, isLoading }) => {
  const navigation = useNavigate();
  return (
    <div>
      <DataTable
        isLoading={isLoading}
        data={data}
        columns={SoftwareColumns({
          getId: (id: string) => navigation(`${id}`),
          editData: (data: SoftwareResponse) =>
            navigation(`${data.id}/edit`, { state: data }),
          deleteData: (id: string) => console.log(id),
        })}
      />
    </div>
  );
};

export default SoftwareTable;
