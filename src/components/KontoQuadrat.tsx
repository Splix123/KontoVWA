// Libraries
import { useState } from "react";
import { Button, Popover, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Types
import { Konto } from "../../types";
type Props = {
  konto: Konto;
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

function KontoQuadrat({ konto }: Props) {
  const IconComponent = icons[konto.icon];

  // States
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  // Handler
  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget as HTMLButtonElement);
  };

  const handleDelete = () => {
    // deleteUserMutation(selectedUser);
    // removeKonto(konto.id);
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
          Delete User
        </Button>
      </Popover>
    </>
  );
}

export default KontoQuadrat;
