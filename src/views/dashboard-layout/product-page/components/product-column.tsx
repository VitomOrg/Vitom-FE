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

interface ProductColumnProps {
  getId: (id: string) => void;
  updateProduct: (id: string, data: ProductResponse) => void;
  removeProduct: (id: string) => void;
}

export const ProductColumns = ({
  getId,
  updateProduct,
  removeProduct,
}: ProductColumnProps): ColumnDef<ProductResponse>[] => [
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
              key={type.id}
              className="px-2 py-1 mr-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {type.name}
            </span>
          ))}
        </div>
      );
    },
  },
  {
    header: "Softwares",
    accessorKey: "softwares",
    cell({ row }) {
      return (
        <div className="flex items-center">
          {row.original.softwares.map((software) => (
            <span
              key={software.id}
              className="px-2 py-1 mr-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {software.name}
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
              onClick={() => {
                getId(row.original.id);
              }}
            >
              <BookText className="size-4" />
              <span>Detail</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="space-x-4"
              onClick={() => {
                updateProduct(row.original.id, row.original);
              }}
            >
              <PencilIcon className="size-4" />
              <span>Update</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="space-x-4"
              onClick={() => {
                removeProduct(row.original.id);
              }}
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
