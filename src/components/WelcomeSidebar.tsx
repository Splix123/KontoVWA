import { Box, Drawer, Typography } from "@mui/material";

function WelcomeSidebar() {
  return (
    <Drawer variant="permanent">
      <Box bgcolor={"#6857E9"} width={"100%"} height={"100%"}>
      <img src="globe-white.svg" alt="Logo" width={200} style={{margin: 20}} />
      <Typography variant="h6" textAlign={"center"}>Marmitt Corp.</Typography>
      {/* Copyright 2023, Marmitt Corporation. All rights reserved */}
      <Typography variant="subtitle1" textAlign={"center"}></Typography>
      </Box>
    </Drawer>
  );
}

export default WelcomeSidebar;