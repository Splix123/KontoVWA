import { Button, Stack, Typography } from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";

function AddKontoRechteck() {
  // Handler
  const AddkontoClickHandler = () => {
    console.log("Button wurde angeklickt");
  };

  return (
    <>
      <Button variant="outlined" onClick={AddkontoClickHandler}>
        <Stack direction="column">
          <Typography variant="h5">Konto </Typography>
          <Typography variant="h5">hinzufügen</Typography>
          <AddCardIcon />
        </Stack>
      </Button>
    </>
  );
}

export default AddKontoRechteck;
