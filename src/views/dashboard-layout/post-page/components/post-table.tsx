import { DataTable } from "@/components/common/data_table";
import { useToast } from "@/components/ui";
import { BlogResponse } from "@/domains/models/blogs";
import { BlogApi } from "@/domains/services/blogs.service";
import useBlog from "@/domains/stores/query-hook/blogs/useBlog";
import PostColumns from "@/views/dashboard-layout/post-page/components/post-columns";
import React from "react";
import { useNavigate } from "react-router-dom";

interface PostTableProps {
  data: BlogResponse[];
  isLoading: boolean;
}

const PostTable: React.FC<PostTableProps> = ({ data, isLoading }) => {
  const navigation = useNavigate();
  const { refetch } = useBlog({});
  const { toast } = useToast();

  const handleDelete = async (id: string) => {
    const response = await BlogApi.deleteBlog(id);

    if (response) {
      toast({
        title: "Success",
        description: "Delete post successfully",
      });
      refetch();
    } else {
      toast({
        title: "Error",
        description: "Delete post failed",
      });
    }
  };

  return (
    <div>
      <DataTable
        isLoading={isLoading}
        data={data}
        columns={PostColumns({
          getId: (id: string) => navigation(`${id}`),
          editData: (data: BlogResponse) =>
            navigation(`${data.id}/edit`, { state: data }),
          deleteData: (id: string) => handleDelete(id),
        })}
      />
    </div>
  );
};

export default PostTable;
