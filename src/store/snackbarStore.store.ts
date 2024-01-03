// Libraries
import create from "zustand";

type StoreType = {
  open: boolean;
  severity: "success" | "info" | "warning" | "error";
  message: string;
  setOpen: (open: boolean) => void;
  setSnack: (
    severity: "success" | "info" | "warning" | "error",
    message: string
  ) => void;
};

const useStore = create<StoreType>((set) => ({
  open: false,
  severity: "success",
  message: "",
  setOpen: (open) => set({ open }),
  setSnack: (severity, message) => set({ open: true, severity, message }),
}));

export default useStore;
