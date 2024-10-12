import { create } from "zustand";

interface RoleStore {
  role: string;
  setRole: (role: string) => void;
}

const useRoleStore = create<RoleStore>((set) => ({
  role: "customer",
  setRole: (role: string) => set({ role }),
}));

export default useRoleStore;
