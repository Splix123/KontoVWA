// Libraries
import {
  Badge,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

// Stores
import drawerStore from "../store/openStore.store";
import kontenStore from "../store/kontenStore.store";

// Icons
// TODO: Replace with proper icon
import { AccountBalanceWallet, Apps } from "@mui/icons-material";

function UebersichtSidebarList() {
  // States
  const { drawerOpen } = drawerStore();
  const { konten } = kontenStore();

  return (
    <List>
      <ListItem disablePadding sx={{ display: "block" }}>
        <ListItemButton
          component={Link}
          to={`/`}
          sx={{
            minHeight: 120,
            justifyContent: drawerOpen ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: drawerOpen ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <Apps htmlColor="#FFF" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ color: "common.white" }}
            primary={"Kontoauswahl"}
            sx={{ opacity: drawerOpen ? 1 : 0 }}
          />
        </ListItemButton>
      </ListItem>
      {konten.map((konto) => (
        <ListItem key={konto.id} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            component={Link}
            to={`/uebersicht/${konto.id}`}
            sx={{
              minHeight: 120,
              justifyContent: drawerOpen ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: drawerOpen ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {/* TODO: Replace with proper icon */}
              <Badge badgeContent={konto.id} color="secondary">
                <AccountBalanceWallet htmlColor="#FFF" />
              </Badge>
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ color: "common.white" }}
              primary={konto.name}
              secondaryTypographyProps={{ color: "lightgray" }}
              secondary={konto.kontonummer}
              sx={{ opacity: drawerOpen ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default UebersichtSidebarList;
