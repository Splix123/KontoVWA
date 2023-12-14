// Libraries
import {
  Badge,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// Stores
import drawerStore from "../store/drawerStore.store";
import kontenStore from "../store/kontenStore.store";

// Icons
import { AccountBalanceWallet } from "@mui/icons-material";

function UebersichtSidebarList() {
  // States
  const { open } = drawerStore();
  const { konten } = kontenStore();

  return (
    <List>
      {konten.map((konto) => (
        <ListItem key={konto.id} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 120,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {/* TODO: Replace with proper icon */}
              <Badge badgeContent={konto.id} color="secondary">
                <AccountBalanceWallet htmlColor="#FFF" />
              </Badge>
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ color: "text.secondary" }}
              primary={konto.name}
              secondaryTypographyProps={{ color: "lightgray" }}
              secondary={konto.kontonummer}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default UebersichtSidebarList;
