// Libraries
import {
  styled,
  Theme,
  CSSObject,
  Drawer as MuiDrawer,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

// Components
import UebersichtSidebarList from "./UebersichtSidebarList";

// Stores
import drawerStore from "../store/openStore.store";

// Icons
import { Menu, ChevronLeft } from "@mui/icons-material";
import { Outlet } from "react-router-dom";

const DRAWERWIDTH = 240;
const TEXTCOLOR = "#FFF";

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWERWIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DRAWERWIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: theme.palette.primary.main,
      "&::-webkit-scrollbar": {
        width: 0,
      },
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: theme.palette.primary.main,
      "&::-webkit-scrollbar": {
        width: 0,
      },
    },
  }),
}));

function Sidebar() {
  // States
  const { drawerOpen, setDrawerOpen } = drawerStore();

  // Handlers
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Drawer variant="permanent" open={drawerOpen} className="drawer">
        <DrawerHeader>
          {drawerOpen ? (
            <>
              <Typography variant="h6" marginRight={15} color={TEXTCOLOR}>
                Menü
              </Typography>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeft htmlColor={TEXTCOLOR} />
              </IconButton>
            </>
          ) : (
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ marginRight: 0.5 }}
            >
              <Menu htmlColor={TEXTCOLOR} />
            </IconButton>
          )}
        </DrawerHeader>
        <Divider variant="middle" />
        <UebersichtSidebarList />
      </Drawer>
      <Outlet />
    </>
  );
}

export default Sidebar;
