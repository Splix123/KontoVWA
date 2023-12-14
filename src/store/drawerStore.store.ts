// Libraries
import create from "zustand";

type StoreType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const useStore = create<StoreType>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));

export default useStore;
