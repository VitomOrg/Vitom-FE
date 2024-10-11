import { ProductPageRequest } from "@/domains/models/products/product-page.request";
import { create } from "zustand";

type ProductStore = {
  filter: ProductPageRequest;
  setFilter: (filter: ProductPageRequest) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  filter: {
    ascByCreatedAt: true,
    pageIndex: 1,
    pageSize: 8,
  } as ProductPageRequest,
  setFilter: (filter) => set({ filter }),
}));
