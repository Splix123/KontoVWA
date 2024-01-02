import { Box, Drawer, Link, Stack, Typography } from "@mui/material";
import { Link as routerLink } from "react-router-dom";

function WelcomeSidebar() {
  return (
    <Drawer variant="permanent">
      <Box bgcolor={"#6857E9"} width={"100%"} height={"100%"}>
        <Stack
          direction={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
          textAlign={"center"}
          height={"100%"}
        >
          <div>
            <img
              src="globe-white.svg"
              alt="Logo"
              width={200}
              style={{ margin: 20 }}
            />
            <Typography
              variant="overline"
              color={"#fff"}
              style={{ fontSize: 20 }}
              display={"block"}
            >
              KontoVWA 2.0
            </Typography>
          </div>
          <div>
            <Typography variant="caption" display={"block"}>
              Copyright 2023, Marmitt Corporation.
            </Typography>
            <Typography variant="caption" display={"block"}>
              All rights reserved
            </Typography>
            <Link
              component={routerLink}
              to={`/credits`}
              color={"inherit"}
              variant="caption"
              underline="hover"
            >
              MADE BY
            </Link>
          </div>
        </Stack>
      </Box>
    </Drawer>
  );
}

export default WelcomeSidebar;
