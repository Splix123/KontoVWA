// Libraries
import create from "zustand";

// Types
import { Konto, Buchung } from "../../types";

type StoreType = {
  konten: Konto[];
  setKonten: (konten: Konto[]) => void;
  addKonto: (newKonto: Konto) => void;
  removeKonto: (kontoId: number) => void;
  addBuchung: (kontoId: number, buchung: Buchung) => void;
  removeBuchung: (kontoId: number, buchungId: number) => void;
  updateBuchung: (kontoId: number, buchungId: number) => void;
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
  addBuchung: (kontoId, buchung) =>
    set((state) => ({
      konten: state.konten.map((konto) =>
        konto.id === kontoId
          ? {
              ...konto,
              buchungen: [...konto.buchungen, buchung],
            }
          : konto
      ),
    })),
  removeBuchung: (kontoId, buchungId) =>
    set((state) => ({
      konten: state.konten.map((konto) =>
        konto.id === kontoId
          ? {
              ...konto,
              buchungen: konto.buchungen.filter(
                (buchung) => buchung.id !== buchungId
              ),
            }
          : konto
      ),
    })),
  updateBuchung: (kontoId, buchungId) =>
    set((state) => ({
      konten: state.konten.map((konto) =>
        konto.id === kontoId
          ? {
              ...konto,
              buchungen: konto.buchungen.map((buchung) =>
                buchung.id === buchungId ? { ...buchung, ...buchung } : buchung
              ),
            }
          : konto
      ),
    })),
}));

export default useStore;
