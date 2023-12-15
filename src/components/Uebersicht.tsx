// Libraries
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

// Stores
import kontenStore from "../store/kontenStore.store";
import drawerStore from "../store/drawerStore.store";

// Icons
import { Add } from "@mui/icons-material";
import { useState } from "react";

function Uebersicht() {
  //Fetch id from url
  const { kontoId } = useParams();

  // States
  const { konten } = kontenStore();
  const { open } = drawerStore();
  const [openDialog, setOpenDialog] = useState(false);
  const [betrag, setBetrag] = useState("");
  const [error, setError] = useState(false);
  const [datum, setDatum] = useState("");
  const [text, setText] = useState("");
  const marginLeftValue = open ? 260 : 85;

  // Handler
  const handleClickAddBuchung = () => {
    setOpenDialog(true);
  };

  const handleAddBuchung = () => {
    if (betrag === "") {
      setError(true);
    } else {
      // const newBuchung = {
      //   id: 0,
      //   betrag: betrag,
      //   buchungsdatum: datum,
      //   buchungstext: text,
      // };
      // addBuchungMutation(newBuchung);
      // addBuchung(newBuchung);
      setOpenDialog(false);
    }
  };

  const handleClose = () => {
    setOpenDialog(false);
    setError(false);
  };

  let saldo = 0;

  const konto = konten.find((konto) => konto.id === Number(kontoId));
  if (konto === undefined) {
    return (
      <Typography
        style={{
          marginLeft: marginLeftValue,
          marginTop: 7,
          transition: "ease-in-out 0.2s",
        }}
        textAlign={"center"}
        variant="h3"
      >
        Sie versuchen ein Konto anzuschauen, dass es anscheinend nicht gibt.
        Probieren sie ein anderes
      </Typography>
    );
  } else {
    return (
      <div
        style={{
          marginLeft: marginLeftValue,
          marginTop: 7,
          transition: "ease-in-out 0.2s",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Dashboard
        </Typography>
        <Typography variant="overline" color={"GrayText"}>
          {konto.name}
        </Typography>
        <TableContainer style={{ marginTop: 30 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>LFD</TableCell>
                <TableCell>Datum</TableCell>
                <TableCell>Kommentar</TableCell>
                <TableCell>Betrag</TableCell>
                <TableCell>Bearbeiten</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {konto?.buchungen.map((buchung) => {
                saldo += buchung.betrag;
                return (
                  <TableRow hover key={buchung.id}>
                    <TableCell>{buchung.id}</TableCell>
                    <TableCell>{buchung.buchungsdatum}</TableCell>
                    <TableCell>{buchung.buchungstext}</TableCell>
                    <TableCell
                      style={{ color: buchung.betrag >= 0 ? "green" : "red" }}
                    >
                      {buchung.betrag}€
                    </TableCell>
                    <TableCell>Bearbeiten</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack
          direction="row"
          justifyContent="space-between"
          style={{ marginTop: 30 }}
        >
          <Box boxShadow={4} width={"40%"} borderRadius={25} color={"#FFF"}>
            <Stack
              position="sticky"
              bottom={0}
              direction="row"
              justifyContent="space-between"
              alignContent="center"
              style={{
                backgroundColor: "#6857E9",
                borderRadius: 25,
                paddingLeft: 20,
                paddingRight: 20,
                height: "100%",
                alignItems: "center",
              }}
            >
              <Typography variant="body1" fontWeight="bold">
                Aktueller Saldo:
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                {saldo}€
              </Typography>
            </Stack>
          </Box>
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
        </Stack>
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
            <TextField
              margin="normal"
              id="date"
              label="date"
              type="number"
              fullWidth
              variant="outlined"
              placeholder="500 oder -500"
              onChange={(e) => {
                setBetrag(e.target.value);
              }}
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
      </div>
    );
  }
}

export default Uebersicht;
