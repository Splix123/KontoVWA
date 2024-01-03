// Librairies
import { Alert, Snackbar } from "@mui/material";

// Stores
import snackbarStore from "../store/snackbarStore.store";

function CustomSnackbar() {
  // States
  const { open, setOpen, severity, message } = snackbarStore();

  // Handlers
  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert severity={severity} onClose={handleClose} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default CustomSnackbar;
