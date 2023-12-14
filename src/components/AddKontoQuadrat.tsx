// Libraries
import { Button, Stack, Typography } from "@mui/material";

// Icons
import AddCardIcon from "@mui/icons-material/AddCard";

function AddKontoQuadrat() {
  // Handler
  const AddkontoClickHandler = () => {
    console.log("Button wurde angeklickt");
  };

  return (
    <>
      <Button
        variant="text"
        sx={{
          backgroundColor: "common.white",
          width: 150,
          height: 150,
        }}
        onClick={AddkontoClickHandler}
      >
        <Stack direction="column" alignItems="center" spacing={1}>
          <Typography variant="body1" fontWeight="bold">
            Konto
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            hinzufügen
          </Typography>
          <AddCardIcon sx={{ fontSize: 50 }} />
        </Stack>
      </Button>
    </>
  );
}

export default AddKontoQuadrat;
