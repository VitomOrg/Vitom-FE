import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import { SoftwareResponse } from "@/domains/models/softwares";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, BookText, PencilIcon, Trash2 } from "lucide-react";

interface SoftwareColumnsProps {
  getId: (id: string) => void;
  editData: (data: SoftwareResponse) => void;
  deleteData: (id: string) => void;
}

export const SoftwareColumns = ({
  getId,
  editData,
  deleteData,
}: SoftwareColumnsProps): ColumnDef<SoftwareResponse>[] => [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Description",
    accessorKey: "description",
  },
  {
    header: "Created At",
    accessorKey: "createdAt",
  },
  {
    header: "Purchases",
    accessorKey: "totalPurchases",
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
