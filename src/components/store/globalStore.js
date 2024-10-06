import { create } from "zustand";

export const useGlobalStore = create(set => ({
  cardModal: false,
  openCardModal: () => set({ cardModal: true}),
  closeCardModal: () => set({ cardModal: false })
}))