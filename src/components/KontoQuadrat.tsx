// Libraries
import { Button, Stack, Typography } from "@mui/material";

// Types
type props = {
  name: string;
  kontostand: number;
  kontonummer: string;
};

function KontoQuadrat({ name, kontostand, kontonummer }: props) {
  // Handler
  const kontoClickHandler = () => {
    console.log("Konto wurde angeklickt");
  };

  return (
    <>
      <Button variant="contained" onClick={kontoClickHandler}>
        <Stack direction="column">
          <Typography variant="h5">{name}</Typography>
          <Typography variant="h6">{kontostand}</Typography>
          <Typography variant="h6">{kontonummer}</Typography>
        </Stack>
      </Button>
    </>
  );
}

export default KontoQuadrat;
