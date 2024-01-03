// libraries
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

// Components
import WelcomeSidebar from "./WelcomeSidebar";
import KontoQuadrat from "./KontoQuadrat";
import AddKontoQuadrat from "./AddKontoQuadrat";
import DateiLadenQuadrat from "./DateiLadenQuadrat";

// Stores
import kontenStore from "../store/kontenStore.store";
import openStore from "../store/openStore.store";

// Types
import { Konto } from "../../types";
import CustomSnackbar from "./CustomSnackbar";

function Welcome() {
  //Fetch data
  // TODO: implement loading and error screen - isLoading, isError
  const { data, isLoading } = useQuery({
    queryFn: () =>
      fetch(`http://localhost:3000/konto`).then((response) => {
        return response.json();
      }),
    queryKey: ["konten"],
  });

  // States
  const { konten, setKonten } = kontenStore();
  useEffect(() => {
    if (!isLoading && data) {
      setKonten(data);
    }
  }, [isLoading, data, setKonten]);
  const { addKontoOpen, setAddKontoOpen } = openStore();

  //Handlers
  const handleKeyN = (e: KeyboardEvent) => {
    if (!addKontoOpen && e.key === "n") {
      setAddKontoOpen(true);
    }
  };
  const handleKeyR = (e: KeyboardEvent) => {
    if (!addKontoOpen && e.key === "r") {
      // TODO: implement reading from file
      console.log("r");
    }
  };
  const navigate = useNavigate();
  const numberHandlers: ((e: KeyboardEvent) => void)[] = [];
  for (let i = 1; i <= 9; i++) {
    const handleKeyNumber = (e: KeyboardEvent) => {
      if (!addKontoOpen && e.key === String(i)) {
        navigate(`/uebersicht/${i}`);
      }
    };
    numberHandlers.push(handleKeyNumber);
  }

  //Shortcuts
  useEffect(() => {
    document.addEventListener("keydown", handleKeyN);
    document.addEventListener("keydown", handleKeyR);
    for (let i = 0; i < numberHandlers.length; i++) {
      document.addEventListener("keydown", numberHandlers[i]);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyN);
      document.removeEventListener("keydown", handleKeyR);
      for (let i = 0; i < numberHandlers.length; i++) {
        document.removeEventListener("keydown", numberHandlers[i]);
      }
    };
  });

  return (
    <div
      style={{
        marginLeft: 260,
        marginTop: 7,
      }}
    >
      <WelcomeSidebar />
      <Typography variant="h4" fontWeight="bold">
        Kontoauswahl
      </Typography>
      <Typography variant="overline" color={"GrayText"}>
        Hi, wilkommen zur KontoVWA!
      </Typography>
      <div style={{ marginTop: 30 }}>
        <Grid2 container rowSpacing={4} columnSpacing={4}>
          {konten.map((konto: Konto) => (
            <Grid2 key={konto.id}>
              <KontoQuadrat konto={konto} />
            </Grid2>
          ))}
          <Grid2>
            <AddKontoQuadrat />
          </Grid2>
          <Grid2>
            <DateiLadenQuadrat />
          </Grid2>
        </Grid2>
      </div>
      <CustomSnackbar />
    </div>
  );
}

export default Welcome;
