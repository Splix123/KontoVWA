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
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

// Components
import AddBuchungDialog from "./AddBuchungDialog";
import OnHoverButtons from "./OnHoverButtons";

// Stores
import kontenStore from "../store/kontenStore.store";
import buchungStore from "../store/buchungStore.store";
import openStore from "../store/openStore.store";
import { Buchung } from "../../types";

function Uebersicht() {
  //Fetch id from url
  const { kontoId } = useParams();
  const { konten } = kontenStore();
  const currentKonto = konten.find((konto) => konto.id === Number(kontoId));

  // TODO: implement loading and error screen - isLoading, isError
  const { data, isLoading } = useQuery({
    queryFn: () =>
      fetch(`http://localhost:3000/buchung`).then((response) => {
        return response.json();
      }),
    queryKey: ["konten"],
  });

  // States
  const { buchungen, setBuchungen, setLastId } = buchungStore();
  useEffect(() => {
    if (!isLoading && data) {
      setLastId(data[data.length - 1].id);
      setBuchungen(
        data.filter(
          (buchung: Buchung) =>
            buchung.kontonummer === currentKonto?.kontonummer
        )
      );
    }
  }, [isLoading, data, setBuchungen, currentKonto, setLastId]);
  const { addBuchungOpen, setAddBuchungOpen, drawerOpen } = openStore();
  const [hover, setHover] = useState({ rowId: 0, hovered: false });

  //Handlers
  const handleKeyN = (e: KeyboardEvent) => {
    if (!addBuchungOpen && e.key === "n") {
      setAddBuchungOpen(true);
    }
  };
  const navigate = useNavigate();
  const numberHandlers: ((e: KeyboardEvent) => void)[] = [];
  for (let i = 1; i <= 9; i++) {
    const handleKeyNumber = (e: KeyboardEvent) => {
      if (!addBuchungOpen && e.key === String(i)) {
        navigate(`/uebersicht/${i}`);
      }
    };
    numberHandlers.push(handleKeyNumber);
  }

  //Shortcuts
  useEffect(() => {
    document.addEventListener("keydown", handleKeyN);
    for (let i = 0; i < numberHandlers.length; i++) {
      document.addEventListener("keydown", numberHandlers[i]);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyN);
      for (let i = 0; i < numberHandlers.length; i++) {
        document.removeEventListener("keydown", numberHandlers[i]);
      }
    };
  });

  const marginLeftValue = drawerOpen ? 260 : 85;
  let saldo = 0;

  if (currentKonto === undefined) {
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
          {currentKonto.name}
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
              {buchungen.map((buchung) => {
                saldo += buchung.betrag;
                return (
                  <TableRow
                    key={buchung.id}
                    onMouseEnter={() =>
                      setHover({ rowId: buchung.lfd, hovered: true })
                    }
                    onMouseLeave={() => setHover({ rowId: 0, hovered: false })}
                  >
                    <TableCell>{buchung.lfd}</TableCell>
                    <TableCell>{buchung.buchungsdatum}</TableCell>
                    <TableCell>{buchung.buchungstext}</TableCell>
                    <TableCell
                      align="center"
                      style={{ color: buchung.betrag >= 0 ? "green" : "red" }}
                    >
                      {buchung.betrag}€
                    </TableCell>
                    <TableCell width={120} sx={{ padding: 0 }}>
                      {hover.hovered && hover.rowId === buchung.lfd && (
                        <OnHoverButtons buchungId={buchung.id} />
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
          // FIXME: This is not working
          position={"sticky"}
          bottom={2}
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
          <AddBuchungDialog kontonummer={currentKonto.kontonummer} />
        </Stack>
      </div>
    );
  }
}

export default Uebersicht;
