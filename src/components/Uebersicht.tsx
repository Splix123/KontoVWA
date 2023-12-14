// Libraries
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";

// Components
import Sidebar from "./UebersichtSidebar";

function Uebersicht() {
  return (
    <>
      <Sidebar />
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
          <TableRow hover>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell>4</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter sx={{ color: "text.primary" }}>
          <TableRow>
            <TableCell>Aktueller Saldo:</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>5</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}

export default Uebersicht;
