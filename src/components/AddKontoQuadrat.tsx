// Libraries
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useMutation } from "react-query";

// Icons
import AddCardIcon from "@mui/icons-material/AddCard";

// Types
import { Konto } from "../../types.d";

// Stores
import kontenStore from "../store/kontenStore.store";
import openStore from "../store/openStore.store";

// Mutation functions
async function addKontoFunction(konto: Konto) {
  const response = await fetch("http://localhost:3000/konto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(konto),
  });
  return response.json();
}

function AddKontoQuadrat() {
  //Mutations
  const { mutateAsync: addKontoMutation } = useMutation({
    mutationFn: addKontoFunction,
  });

  // States
  const { konten, addKonto } = kontenStore();
  const { addKontoOpen, setAddKontoOpen } = openStore();
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("Category");
  const [error, setError] = useState(false);

  // Handler
  const handleClickAddKonto = () => {
    setAddKontoOpen(true);
  };

  const handleAddKonto = () => {
    if (name === "") {
      setError(true);
    } else {
      const newKonto = {
        id: konten.length + 1,
        icon: icon as "Category" | "Home" | "School" | "ShowChart" | "Alarm",
        name: name,
        kontostand: 0,
        kontonummer: "DE0",
        buchungen: [],
      };
      addKontoMutation(newKonto);
      addKonto(newKonto);
      setAddKontoOpen(false);
    }
  };

  const handleClose = () => {
    setAddKontoOpen(false);
    setError(false);
  };

  return (
    <>
      <Button
        variant="text"
        sx={{
          backgroundColor: "common.white",
          width: 150,
          height: 150,
        }}
        onClick={handleClickAddKonto}
      >
        <Stack direction="column" alignItems="center" spacing={1}>
          <Typography variant="body1" fontWeight="bold">
            Konto
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            hinzufügen
          </Typography>
          <AddCardIcon sx={{ fontSize: 50 }} />
        </Stack>
      </Button>
      <Dialog open={addKontoOpen} onClose={handleClose}>
        <DialogTitle fontWeight="bold">Konto hinzufügen</DialogTitle>
        <DialogContent>
          <DialogContentText color="text.primary">
            Um ein neues Konto hinzuzufügen, fülle bitte die folgenden Felder
            aus:
          </DialogContentText>
          <TextField
            required
            error={error}
            autoFocus
            margin="normal"
            id="name"
            label="Kontoname"
            type="text"
            fullWidth
            variant="outlined"
            placeholder="z.B. Girokonto"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Select
            required
            value={icon}
            variant="outlined"
            fullWidth
            id="iconSelect"
            onChange={(e) => {
              setIcon(e.target.value);
            }}
          >
            <MenuItem value={"AccountBalance"}>Account</MenuItem>
            <MenuItem value={"Home"}>Haus</MenuItem>
            <MenuItem value={"School"}>Schule</MenuItem>
            <MenuItem value={"ShowChart"}>Investments</MenuItem>
            <MenuItem value={"Category"}>Kategorie</MenuItem>
            <MenuItem value={"Alarm"}>Wichtig</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Abbrechen</Button>
          <Button onClick={handleAddKonto}>Hinzufügen</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddKontoQuadrat;
