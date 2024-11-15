import { create } from "zustand";

export const useStore = create((set) => ({
  isExpanded: false,
  isManualExpand: false,
  isMobileMenuOpen: false,
  setIsExpanded: (value) => set({ isExpanded: value }),
  setIsManualExpand: (value) => set({ isManualExpand: value }),
  setIsMobileMenuOpen: (value) => set({ isMobileMenuOpen: value }),
  toggleManualExpand: () =>
    set((state) => ({
      isManualExpand: !state.isManualExpand,
      isExpanded: !state.isExpanded,
    })),
}));
