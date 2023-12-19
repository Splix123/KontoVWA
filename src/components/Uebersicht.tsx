// Libraries
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";

// Components
import AddBuchungDialog from "./AddBuchungDialog";
import OnHoverButtons from "./OnHoverButtons";

// Stores
import kontenStore from "../store/kontenStore.store";
import drawerStore from "../store/drawerStore.store";

function Uebersicht() {
  //Fetch id from url
  const { kontoId } = useParams();

  // States
  const { konten } = kontenStore();
  const { open } = drawerStore();
  const [hover, setHover] = useState({ rowId: 0, hovered: false });

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
        <TableContainer style={{ marginTop: 30 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>LFD</TableCell>
                <TableCell>Datum</TableCell>
                <TableCell>Kommentar</TableCell>
                <TableCell align="center">Betrag</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {konto?.buchungen.map((buchung) => {
                saldo += buchung.betrag;
                return (
                  <TableRow
                    hover
                    key={buchung.id}
                    onMouseOver={() => {
                      setHover({ rowId: buchung.id, hovered: true });
                    }}
                    onMouseOut={() => {
                      setHover({ rowId: 0, hovered: false });
                    }}
                  >
                    <TableCell>{buchung.id}</TableCell>
                    <TableCell>{buchung.buchungsdatum}</TableCell>
                    <TableCell>{buchung.buchungstext}</TableCell>
                    <TableCell
                      align="center"
                      style={{ color: buchung.betrag >= 0 ? "green" : "red" }}
                    >
                      {buchung.betrag}€
                    </TableCell>
                    <TableCell width={120} sx={{ padding: 0 }}>
                      {hover.hovered && hover.rowId === buchung.id && (
                        <OnHoverButtons buchungsId={hover.rowId} />
                      )}
                    </TableCell>
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
          <AddBuchungDialog />
        </Stack>
      </div>
    );
  }
}

export default Uebersicht;
