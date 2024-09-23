import { ProductPageRequest } from "@/domains/models/products/product-page.request";
import { create } from "zustand";

type ProductStore = {
  filter: ProductPageRequest;
  setFilter: (filter: ProductPageRequest) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  filter: {
    pageIndex: 1,
    pageSize: 10,
  } as ProductPageRequest,
  setFilter: (filter) => set({ filter }),
}));
