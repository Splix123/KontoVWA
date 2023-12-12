import { Button, Stack, Typography } from "@mui/material";

function KontoRechteck() {
  // Handler
  const kontoClickHandler = () => {
    console.log("Konto wurde angeklickt");
  };

  return (
    <>
      <Button variant="contained" onClick={kontoClickHandler}>
        <Stack direction="column">
          <Typography variant="h5">{"Arbeit"}</Typography>
          <Typography variant="h6">{"1000€"}</Typography>
          <Typography variant="h6">{"123456789"}</Typography>
        </Stack>
      </Button>
    </>
  );
}

export default KontoRechteck;
