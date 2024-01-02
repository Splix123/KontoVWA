import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

function AddBuchung() {
  return (
    <Dialog open={openDialog} onClose={handleClose}>
      <DialogTitle fontWeight="bold">Neue Buchung</DialogTitle>
      <DialogContent>
        <DialogContentText color="text.primary">
          Geben Sie ihre Buchungsdaten bitte hier ein
        </DialogContentText>
        <TextField
          required
          error={error}
          autoFocus
          margin="normal"
          id="betrag"
          label="Betrag"
          type="number"
          fullWidth
          variant="outlined"
          placeholder="z.B. 500 oder -500"
          onChange={(e) => {
            setBetrag(e.target.value);
          }}
        />
        <DatePicker value={datum} onChange={(newDatum) => setDatum(newDatum)} />
        <TextField
          margin="normal"
          id="text"
          label="Buchungstext"
          type="text"
          fullWidth
          variant="outlined"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Abbrechen</Button>
        <Button onClick={handleAddBuchung}>Buchen</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddBuchung;
