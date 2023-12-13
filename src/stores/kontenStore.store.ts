// Libraries
import create from "zustand";

// Types
import { Konto } from "../../types";

type StoreType = {
  konten: Konto[];
  setKonten: (konten: Konto[]) => void;
  addKonto: (newKonto: Konto) => void;
  removeKonto: (id: number) => void;
};

const useStore = create<StoreType>((set) => ({
  konten: [],
  setKonten: (konten) => set({ konten }),
  addKonto: (newKonto) =>
    set((state) => ({ konten: [...state.konten, newKonto] })),
  removeKonto: (id) =>
    set((state) => ({
      konten: state.konten.filter((konto) => konto.id !== id),
    })),
}));

export default useStore;
