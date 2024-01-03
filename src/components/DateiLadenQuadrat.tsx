// Libraries
import { Button, Stack, Typography, styled } from "@mui/material";

// Icons
import { CloudUploadOutlined } from "@mui/icons-material";

// Stores
import fileStore from "../store/fileStore.store";

// Hiiden Input
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function DateiLadenQuadrat() {
  // States
  // TODO: finish implementing file upload
  const { setFile } = fileStore();

  // Handler
  const fileInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Button
      component="label"
      variant="text"
      sx={{
        backgroundColor: "common.white",
        width: 150,
        height: 150,
      }}
    >
      <Stack direction="column" alignItems="center" spacing={1}>
        <Typography variant="body1" fontWeight="bold">
          Datei
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          hochladen
        </Typography>
        <VisuallyHiddenInput
          type="file"
          accept=".IDX"
          onChange={fileInputHandler}
        />
        <CloudUploadOutlined sx={{ fontSize: 50 }} />
      </Stack>
    </Button>
  );
}

export default DateiLadenQuadrat;
