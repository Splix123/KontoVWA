// Libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

// Components
import Welcome from "./components/Welcome";
import Uebersicht from "./components/Uebersicht";

// Styles
import "./App.css";

// Enable React-Query
const queryClient = new QueryClient();

// Theme
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6857E9",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#14C8FA",
      contrastText: "#FFF",
    },
    text: {
      primary: "#000",
      secondary: "#FFF",
    },
    background: {
      paper: "#F0F1FA",
      default: "#F0F1FA",
    },
  },
  shape: {
    borderRadius: 20,
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/uebersicht" element={<Uebersicht />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
