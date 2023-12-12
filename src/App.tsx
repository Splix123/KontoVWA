// Libraries
import { Typography } from "@mui/material";

// Components
import Sidebar from "./components/Sidebar";
import KontoRechteck from "./components/KontoRechteck";
import AddKontoRechteck from "./components/AddKontoRechteck";

// Styles
import "./App.css";

function App() {
  return (
    <div>
      <Sidebar />
      <Typography variant="h1">Dashboard</Typography>
      <Typography variant="h2">Hi, wilkommen zur KontoVWA</Typography>
      <Typography variant="h3">Welches Konto möchten sie verwalten?</Typography>
      <KontoRechteck />
      <AddKontoRechteck />
    </div>
  );
}

export default App;
