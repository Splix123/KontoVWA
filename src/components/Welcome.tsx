// libraries
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect } from "react";

// Components
import KontoQuadrat from "./KontoQuadrat";
import AddKontoQuadrat from "./AddKontoQuadrat";

// Stores
import drawerStore from "../store/DrawerStore.store";
// TODO: Remove when db is implemented
import kontenStore from "../store/kontenStore.store";

const data = [
  {
    id: 1,
    name: "Konto 1",
    kontostand: 1000,
    kontonummer: "DE123456789",
  },
  {
    id: 2,
    name: "Konto 2",
    kontostand: 500,
    kontonummer: "DE987654321",
  },
  {
    id: 3,
    name: "Konto 3",
    kontostand: 5000,
    kontonummer: "DE956783456",
  },
];

function Welcome() {
  // States
  const { open } = drawerStore();
  const { konten, setKonten } = kontenStore();
  // TODO: Remove when db is implemented
  useEffect(() => {
    if (data) {
      setKonten(data);
    }
  }, [setKonten]);

  const marginLeftValue = open ? 260 : 85;

  return (
    <div
      style={{
        marginLeft: marginLeftValue,
        marginTop: 7,
        transition: "ease-in-out 0.2s",
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
          {konten.map((konto) => (
            <Grid2>
              <KontoQuadrat
                key={konto.id}
                name={konto.name}
                kontostand={konto.kontostand}
                icon="Home"
              />
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
