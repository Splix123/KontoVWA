import { Drawer, Typography } from "@mui/material";

function WelcomeSidebar() {
  return (
    <Drawer variant="permanent">
      <img src="https://via.placeholder.com/150" alt="Logo" />
      <Typography variant="h6">Marmitt Corp.</Typography>
    </Drawer>
  );
}

export default WelcomeSidebar;
