// Libraries
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Popover, Stack, Typography } from "@mui/material";

// Types
import { Konto } from "../../types";
type Props = {
  konto: Konto;
};

// Stores
import kontenStore from "../store/kontenStore.store";

// Functions
async function deleteKonto(kontoId: number) {
  const response = await fetch(`http://localhost:3000/konto/${kontoId}`, {
    method: "DELETE",
  });
  return response.json();
}

async function deleteBuchungen(kontonummer: string) {
  const response = await fetch(
    `http://localhost:3000/buchung?kontonummer=${kontonummer}`,
    {
      method: "DELETE",
    }
  );
  return response.json();
}

// Icons
import {
  AccountBalance,
  Home,
  School,
  ShowChart,
  Category,
  Alarm,
} from "@mui/icons-material";
import { useMutation } from "react-query";

const icons = {
  AccountBalance: <AccountBalance sx={{ fontSize: 50 }} />,
  Home: <Home sx={{ fontSize: 50 }} />,
  School: <School sx={{ fontSize: 50 }} />,
  ShowChart: <ShowChart sx={{ fontSize: 50 }} />,
  Category: <Category sx={{ fontSize: 50 }} />,
  Alarm: <Alarm sx={{ fontSize: 50 }} />,
};

function KontoQuadrat({ konto }: Props) {
  const IconComponent = icons[konto.icon];

  //Mutations
  const { mutateAsync: deleteKontoMutation } = useMutation({
    mutationFn: deleteKonto,
  });

  const { mutateAsync: deleteBuchungenMutation } = useMutation({
    mutationFn: deleteBuchungen,
  });

  // States
  const { removeKonto } = kontenStore();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  // Handler
  const handleRightClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget as HTMLButtonElement);
  };

  const handleDelete = () => {
    deleteKontoMutation(konto.id);
    deleteBuchungenMutation(konto.kontonummer);
    removeKonto(konto.id);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        variant="text"
        sx={{
          backgroundColor: "common.white",
          width: 150,
          height: 150,
        }}
        component={Link}
        to={`/uebersicht/${konto.id}`}
        onContextMenu={(e) => handleRightClick(e)}
      >
        <Stack direction="column" alignItems="center" spacing={1}>
          <Typography variant="h5" fontWeight="bold" color="text.primary">
            {/* kontostand noch nicht richtig berechnet */}
            {konto.kontostand}€
          </Typography>
          {IconComponent}
          <Typography color="GrayText" style={{ fontSize: 15 }}>
            {konto.name}
          </Typography>
        </Stack>
      </Button>
      <Popover
        id={konto.name}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Button
          sx={{ p: 2 }}
          variant="text"
          color="error"
          onClick={handleDelete}
        >
          Konto Löschen?
        </Button>
      </Popover>
    </>
  );
}

export default KontoQuadrat;
