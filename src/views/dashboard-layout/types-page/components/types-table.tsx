import { DataTable } from "@/components/common/data_table";
import { useToast } from "@/components/ui";
import { TypeResponse } from "@/domains/models/type";
import { TypeApi } from "@/domains/services";
import useTypes from "@/domains/stores/query-hook/types/use-types";
import { TypesColumns } from "@/views/dashboard-layout/types-page/components/types-columns";
import React from "react";
import { useNavigate } from "react-router-dom";

interface TypesTableProps {
  data: TypeResponse[];
  isLoading: boolean;
}

const TypesTable: React.FC<TypesTableProps> = ({ data, isLoading }) => {
  const navigation = useNavigate();

  const { toast } = useToast();
  const { refetch } = useTypes({});

  const handleDelete = async (id: string) => {
    const response = await TypeApi.deleteType(id);

    if (response === true) {
      toast({
        title: "success",
        description: "Type deleted successfully",
      });
      refetch();
    } else {
      toast({
        title: "error",
        description: "Type not deleted",
      });
    }
  };

  return (
    <div>
      <DataTable
        isLoading={isLoading}
        data={data}
        columns={TypesColumns({
          getId: (id: string) => navigation(`${id}`),
          editData: (data: TypeResponse) =>
            navigation(`${data.id}/edit`, { state: data }),
          deleteData: (id: string) => handleDelete(id),
        })}
      />
    </div>
  );
};

export default TypesTable;
