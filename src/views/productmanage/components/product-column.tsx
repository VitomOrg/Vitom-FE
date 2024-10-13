import { ProductResponse } from "@/domains/models/products/product.response";
import { ColumnDef } from "@tanstack/react-table";

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
  },
  {
    header: "Created At",
    accessorKey: "createdAt",
  },
];
