// Libraries
import { Typography } from "@mui/material";

// Components
import KontoRechteck from "./components/KontoRechteck";

// Styles
import "./App.css";

function App() {
  return (
    <div>
      <Typography variant="h1">Wilkommen</Typography>
      <Typography variant="h3">Welches Konto möchten sie verwalten?</Typography>
      <KontoRechteck />
    </div>
  );
}

export default App;
