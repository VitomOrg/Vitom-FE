import { RootRequest } from "@/domains/models/root/root.request";
import { create } from "zustand";

type PaginationStore = {
  page: RootRequest;
  setPage: (page: RootRequest) => void;
};

export const usePaginationStore = create<PaginationStore>((set) => ({
  page: {
    pageIndex: 1,
    pageSize: 10,
  } as RootRequest,
  setPage: (page) => set({ page }),
}));
