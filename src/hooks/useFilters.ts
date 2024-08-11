import { create } from "zustand";

type Filters = {
  search: string;
  region: string;
  setSearch: (search: string) => void;
  setRegion: (region: string) => void;
};

export const useFilters = create<Filters>((set) => ({
  search: "",
  region: "",
  setSearch: (value) => set(() => ({ search: value })),
  setRegion: (value) => set(() => ({ region: value })),
}));
