// Libraries
import create from "zustand";

// Types
import { Buchung } from "../../types";

type StoreType = {
  buchungen: Buchung[];
  setBuchungen: (buchungen: Buchung[]) => void;
  addBuchung: (newBuchung: Buchung) => void;
  removeBuchung: (id: number) => void;
  lastId: number;
  setLastId: (numberOfBuchungen: number) => void;
};

const useStore = create<StoreType>((set) => ({
  buchungen: [],
  setBuchungen: (buchungen) => set({ buchungen }),
  addBuchung: (newBuchung) =>
    set((state) => ({ buchungen: [...state.buchungen, newBuchung] })),
  removeBuchung: (id) =>
    set((state) => ({
      buchungen: state.buchungen.filter((buchung) => buchung.id !== id),
    })),
  lastId: 0,
  setLastId: (lastId) => set({ lastId }),
}));

export default useStore;
