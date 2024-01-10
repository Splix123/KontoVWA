// Libraries
import {
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link as routerLink } from "react-router-dom";

// Icons
import { AccountCircle } from "@mui/icons-material";

function Credits() {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Made by" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText primary="Ali Ansari" secondary="2123073" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText primary="Moritz Rühm" secondary="2121907" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText primary="Talha Kilic" secondary="2123676" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText primary="Dogukan Aygün" secondary="2120769" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText primary="Mikail Gercek" secondary="2022599" />
      </ListItem>
      <ListItem>
        <Link component={routerLink} to={`/`} variant="h6">
          Home
        </Link>
      </ListItem>
    </List>
  );
}

export default Credits;
