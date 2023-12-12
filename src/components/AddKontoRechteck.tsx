import { Button, Stack, Typography } from "@mui/material";

function AddKontoRechteck() {
  // Handler
  const AddkontoClickHandler = () => {
    console.log("Button wurde angeklickt");
  };

  return (
    <>
      <Button variant="outlined" startIcon={} onClick={AddkontoClickHandler}>
        Ein Konto hinzufügen
      </Button>
    </>
  );
}

export default AddKontoRechteck;
