// Libraries
import { Button, Stack, Typography } from "@mui/material";

// Types
type props = {
  name: string;
  kontostand: number;
  icon: "Home" | "School" | "ShowChart" | "Category" | "Alarm";
};

// Icons
import {
  AccountBalance,
  Home,
  School,
  ShowChart,
  Category,
  Alarm,
} from "@mui/icons-material";

const icons = {
  AccountBalance: <AccountBalance sx={{ fontSize: 50 }} />,
  Home: <Home sx={{ fontSize: 50 }} />,
  School: <School sx={{ fontSize: 50 }} />,
  ShowChart: <ShowChart sx={{ fontSize: 50 }} />,
  Category: <Category sx={{ fontSize: 50 }} />,
  Alarm: <Alarm sx={{ fontSize: 50 }} />,
};

function KontoQuadrat({ name, kontostand, icon }: props) {
  // Handler
  const kontoClickHandler = () => {
    console.log("Konto wurde angeklickt");
  };

  const IconComponent = icons[icon];

  return (
    <>
      <Button
        variant="text"
        sx={{
          backgroundColor: "common.white",
          width: 150,
          height: 150,
        }}
        onClick={kontoClickHandler}
      >
        <Stack direction="column" alignItems="center" spacing={1}>
          <Typography variant="h5" fontWeight="bold" color="text.primary">
            {kontostand}€
          </Typography>
          {IconComponent}
          <Typography color="GrayText" style={{ fontSize: 15 }}>
            {name}
          </Typography>
        </Stack>
      </Button>
    </>
  );
}

export default KontoQuadrat;
