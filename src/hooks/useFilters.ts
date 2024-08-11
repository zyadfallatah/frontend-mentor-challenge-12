import { create } from "zustand";

type Filters = {
  search: string;
  setSearch: (value: string) => void;
};

export const useFilters = create<Filters>((set) => ({
  search: "",
  region: "",
  setSearch: (value) => set(() => ({ search: value })),
}));
