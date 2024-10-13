import { create } from "zustand";

interface SearchStore {
  search: string;
  abc: string;
  setSearch: (search: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  search: "",
  abc: "",
  setSearch: (search) => set({ search }),
}));
