// Libraries
import create from "zustand";

// Types
import { Konto } from "../../types";

type StoreType = {
  konten: Konto[];
  setKonten: (konten: Konto[]) => void;
  addKonto: (newKonto: Konto) => void;
  removeKonto: (kontoId: number) => void;
};

const useStore = create<StoreType>((set) => ({
  konten: [],

  setKonten: (konten) => set({ konten }),

  addKonto: (newKonto) =>
    set((state) => ({ konten: [...state.konten, newKonto] })),

  removeKonto: (kontoId) =>
    set((state) => ({
      konten: state.konten.filter((konto) => konto.id !== kontoId),
    })),
}));

export default useStore;
