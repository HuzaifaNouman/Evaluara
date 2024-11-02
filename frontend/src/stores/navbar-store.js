import { create } from "zustand";

export const useNavbarTitle = create((set) => ({
  title: "Overview",
  setTitle: (newTitle) => set({ title: newTitle }),
}));
