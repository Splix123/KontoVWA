// Libraries
import { Typography } from "@mui/material";

// Components
import Sidebar from "./components/Sidebar";
import KontoQuadrat from "./components/KontoQuadrat";
import AddKontoRechteck from "./components/AddKontoRechteck";

// Styles
import "./App.css";

// Stores
// TODO: Remove when db is implemented
import kontenStore from "./stores/KontenStore.store";

// TODO: Remove when db is implemented
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

function App() {
  // States
  const { konten, setKonten } = kontenStore();
  // TODO: Remove when db is implemented
  setKonten(data);

  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: 75, marginTop: 7 }}>
        <Typography variant="h4">Dashboard</Typography>
        <Typography variant="h6">Hi, wilkommen zur KontoVWA</Typography>
        {konten.map((konto) => (
          <KontoQuadrat
            key={konto.id}
            name={konto.name}
            kontostand={konto.kontostand}
            kontonummer={konto.kontonummer}
          />
        ))}
        <AddKontoRechteck />
      </div>
    </>
  );
}

export default App;
