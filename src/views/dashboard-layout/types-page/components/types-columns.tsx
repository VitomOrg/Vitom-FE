import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import { TypeResponse } from "@/domains/models/type";
import { formatFromISOString, FormatType } from "@/lib";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, BookText, PencilIcon, Trash2 } from "lucide-react";

interface TypeColumn {
  getId: (id: string) => void;
  editData: (data: TypeResponse) => void;
  deleteData: (id: string) => void;
}

export const TypesColumns = ({
  getId,
  editData,
  deleteData,
}: TypeColumn): ColumnDef<TypeResponse>[] => [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Description",
    accessorKey: "description",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell({ row }) {
      return (
        <div className="flex items-center">
          {formatFromISOString(row.original.createdAt, FormatType.DATE)}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell({ row }) {
      console.log(row.original);
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
