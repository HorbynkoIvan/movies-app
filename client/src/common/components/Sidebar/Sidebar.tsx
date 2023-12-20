import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { DRAWER_WIDTH } from "@common/constants";

type Props = {
  isDrawerOpen: boolean;
  handleDrawerClose: () => void;
};

export const Sidebar = ({ isDrawerOpen, handleDrawerClose }: Props) => {
  return (
    <Drawer open={isDrawerOpen} onClose={handleDrawerClose}>
      <Box
        sx={{
          width: DRAWER_WIDTH,
          boxShadow: "0px 6px 8px rgba(94, 129, 170, 0.08)",
          borderRadius: 3,
          mt: "73px",
          py: 3,
          backgroundColor: "#ffffff",
        }}>
        <List sx={{ width: "100%" }}>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
