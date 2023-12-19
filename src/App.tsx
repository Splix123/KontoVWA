// Libraries
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/de";

// Components
import Welcome from "./components/Welcome";
import UebersichtSidebar from "./components/UebersichtSidebar";
import Uebersicht from "./components/Uebersicht";
import ErrorPage from "./components/ErrorPage";

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
      contrastText: "#000",
    },
    text: {
      primary: "#000",
      secondary: "#000",
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

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/uebersicht",
    element: <UebersichtSidebar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/uebersicht/:kontoId",
        element: <Uebersicht />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
          <RouterProvider router={router} />
        </LocalizationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
