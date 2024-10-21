import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import { ProductResponse } from "@/domains/models/products/product.response";
import { formatFromISOString, FormatType } from "@/lib";
import { ColumnDef } from "@tanstack/react-table";
import { BookText, MoreHorizontal, PencilIcon, Trash2 } from "lucide-react";

export const ProductColumns: ColumnDef<ProductResponse>[] = [
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Price",
    accessorKey: "price",
  },

  {
    header: "Types",
    accessorKey: "types",
    cell({ row }) {
      return (
        <div className="flex items-center">
          {row.original.types.map((type) => (
            <span
              key={type}
              className="px-2 py-1 mr-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {type}
            </span>
          ))}
        </div>
      );
    },
  },
  {
    header: "Created At",
    accessorKey: "createdAt",
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
            <DropdownMenuItem className="space-x-4">
              <BookText className="size-4" />
              <span>Detail</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="space-x-4">
              <PencilIcon className="size-4" />
              <span>Update</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="space-x-4">
              <Trash2 className="size-4" />
              <span>Remove</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
