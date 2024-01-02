// Libraries
import create from "zustand";

type StoreType = {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  addKontoOpen: boolean;
  setAddKontoOpen: (open: boolean) => void;
  addBuchungOpen: boolean;
  setAddBuchungOpen: (open: boolean) => void;
};

const useStore = create<StoreType>((set) => ({
  drawerOpen: false,
  setDrawerOpen: (open) => set({ drawerOpen: open }),
  addKontoOpen: false,
  setAddKontoOpen: (open) => set({ addKontoOpen: open }),
  addBuchungOpen: false,
  setAddBuchungOpen: (open) => set({ addBuchungOpen: open }),
}));

export default useStore;
