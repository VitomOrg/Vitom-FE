import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import { BlogResponse } from "@/domains/models/blogs";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, BookText, PencilIcon, Trash2 } from "lucide-react";

interface PostColumnsProps {
  getId: (id: string) => void;
  editData: (data: BlogResponse) => void;
  deleteData: (id: string) => void;
}

const PostColumns = ({
  getId,
  editData,
  deleteData,
}: PostColumnsProps): ColumnDef<BlogResponse>[] => [
  {
    header: "Image",
    accessorKey: "imageUrl",
    cell: ({ row }) => {
      return (
        <img
          src={row.original.imageUrl[0]}
          alt={row.original.title}
          className="object-cover size-14 rounded-xl"
        />
      );
    },
  },
  {
    header: "Name",
    accessorKey: "title",
  },
  {
    header: "Owner",
    accessorKey: "username",
  },
  {
    id: "action",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <MoreHorizontal className="cursor-pointer size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="space-x-4"
              onClick={() => getId(row.original.id)}
            >
              <BookText className="size-4" />
              <span>Detail</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="space-x-4"
              onClick={() => editData(row.original)}
            >
              <PencilIcon className="size-4" />
              <span>Update</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="space-x-4"
              onAbort={() => deleteData(row.original.id)}
            >
              <Trash2 className="size-4" />
              <span>Remove</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default PostColumns;
