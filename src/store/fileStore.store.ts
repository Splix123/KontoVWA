// Libraries
import create from "zustand";

type StoreType = {
  file: File | null;
  setFile: (file: File) => void;
};

const useStore = create<StoreType>((set) => ({
  file: null,
  setFile: (file) => set({ file }),
}));

export default useStore;
