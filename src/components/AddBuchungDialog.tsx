// Libraries
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useMutation } from "react-query";

// Stores
import buchungStore from "../store/buchungStore.store";
import openStore from "../store/openStore.store";

// Types
import { Buchung } from "../../types.d";
type Props = {
  kontonummer: string;
};

// Icons
import { Add } from "@mui/icons-material";

// Functions
async function addBuchungFunction(buchung: Buchung) {
  const response = await fetch(`http://localhost:3000/buchung`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buchung),
  });
  return response.json();
}

function AddBuchung({ kontonummer }: Props) {
  //Mutations
  const { mutateAsync: addBuchungMutation } = useMutation({
    mutationFn: addBuchungFunction,
  });

  // States
  const { buchungen, addBuchung, lastId } = buchungStore();
  const { addBuchungOpen, setAddBuchungOpen } = openStore();
  const [betrag, setBetrag] = useState("");
  const [error, setError] = useState(false);
  const [datum, setDatum] = useState<Dayjs | null>(dayjs());
  const [text, setText] = useState("");

  // Handler
  const handleClickAddBuchung = () => {
    setAddBuchungOpen(true);
  };

  const handleAddBuchung = () => {
    if (betrag === "") {
      setError(true);
    } else {
      const newBuchung = {
        id: lastId + 1,
        lfd: buchungen.length + 1,
        betrag: Number(betrag),
        buchungsdatum: dayjs(datum).format("DD.MM.YYYY"),
        buchungstext: text,
        kontonummer: kontonummer,
      };
      addBuchungMutation(newBuchung);
      addBuchung(newBuchung);
      setAddBuchungOpen(false);
    }
  };

  const handleClose = () => {
    setAddBuchungOpen(false);
    setError(false);
  };

  return (
    <>
      <Fab
        color="primary"
        variant="extended"
        aria-label="add"
        style={{ marginRight: 20 }}
        onClick={handleClickAddBuchung}
      >
        <Add />
        Buchung hinzufügen
      </Fab>
      <Dialog open={addBuchungOpen} onClose={handleClose}>
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
          <DatePicker
            value={datum}
            onChange={(newDatum) => setDatum(newDatum)}
          />
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
    </>
  );
}

export default AddBuchung;
