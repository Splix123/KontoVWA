// libraries
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect } from "react";
import { useQuery } from "react-query";

// Components
import KontoQuadrat from "./KontoQuadrat";
import AddKontoQuadrat from "./AddKontoQuadrat";

// Stores
import kontenStore from "../store/kontenStore.store";

// Types
import { Konto } from "../../types";

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

  return (
    <div
      style={{
        marginLeft: 260,
        marginTop: 7,
      }}
    >
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
        </Grid2>
      </div>
    </div>
  );
}

export default Welcome;
