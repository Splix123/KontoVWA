// Libraries
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

// Stores
import kontenStore from "../store/kontenStore.store";
import drawerStore from "../store/drawerStore.store";

function Uebersicht() {
  //Fetch id from url
  const { kontoId } = useParams();

  // States
  const { konten } = kontenStore();
  const { open } = drawerStore();
  const marginLeftValue = open ? 260 : 85;

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
        <Table style={{ marginTop: 30 }}>
          <TableHead>
            <TableRow>
              <TableCell>LFD</TableCell>
              <TableCell>Datum</TableCell>
              <TableCell>Kommentar</TableCell>
              <TableCell>Betrag</TableCell>
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
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Stack
          direction="row"
          justifyContent="space-between"
          style={{
            color: "#FFF",
            backgroundColor: "#6857E9",
            marginTop: 30,
            width: "40%",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <Typography variant="body1" fontWeight="bold">
            Aktueller Saldo:
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {saldo}€
          </Typography>
        </Stack>
      </div>
    );
  }
}

export default Uebersicht;
