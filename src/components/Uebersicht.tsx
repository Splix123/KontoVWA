// Libraries
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
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

  const konto = konten.find((konto) => konto.id === Number(kontoId));
  return (
    <div
      style={{
        marginLeft: marginLeftValue,
        marginTop: 7,
        transition: "ease-in-out 0.2s",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>LFD</TableCell>
            <TableCell>Datum</TableCell>
            <TableCell>Kommentar</TableCell>
            <TableCell>Betrag</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {konto?.buchungen.map((buchung) => (
            <TableRow hover key={buchung.id}>
              <TableCell>{buchung.id}</TableCell>
              <TableCell>{buchung.buchungsdatum}</TableCell>
              <TableCell>{buchung.buchungstext}</TableCell>
              <TableCell>{buchung.betrag}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter sx={{ color: "text.primary" }}>
          <TableRow>
            <TableCell>Aktueller Saldo:</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>Hier noch saldo berechnen</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default Uebersicht;
