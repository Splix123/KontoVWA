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
        <ListItemText primary="Ali Ansari" secondary="0" />
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
        <ListItemText primary="Talha" secondary="0" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText primary="Dogukan" secondary="0" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText primary="Mikail" secondary="0" />
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
