import { DataTable } from "@/components/common/data_table";
import { BlogResponse } from "@/domains/models/blogs";
import PostColumns from "@/views/dashboard-layout/post-page/components/post-columns";
import React from "react";
import { useNavigate } from "react-router-dom";

interface PostTableProps {
  data: BlogResponse[];
  isLoading: boolean;
}

const PostTable: React.FC<PostTableProps> = ({ data, isLoading }) => {
  const navigation = useNavigate();
  return (
    <div>
      <DataTable
        isLoading={isLoading}
        data={data}
        columns={PostColumns({
          getId: (id: string) => navigation(`${id}`),
          editData: (data: BlogResponse) =>
            navigation(`${data.id}/edit`, { state: data }),
          deleteData: (id: string) => console.log(id),
        })}
      />
    </div>
  );
};

export default PostTable;
