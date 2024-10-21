import { DataTable } from "@/components/common/data_table";
import { TypeResponse } from "@/domains/models/type";
import { TypesColumns } from "@/views/dashboard-layout/types-page/components/types-columns";
import React from "react";
import { useNavigate } from "react-router-dom";

interface TypesTableProps {
  data: TypeResponse[];
  isLoading: boolean;
}

const TypesTable: React.FC<TypesTableProps> = ({
  data,
  isLoading,
}) => {
  const navigation = useNavigate();
  return (
    <div>
      <DataTable
        isLoading={isLoading}
        data={data}
        columns={TypesColumns({
          getId: (id: string) => navigation(`${id}`),
          editData: (data: TypeResponse) =>
            navigation(`${data.id}/edit`, { state: data }),
          deleteData: (id: string) => console.log(id),
        })}
      />
    </div>
  );
};

export default TypesTable;
