import { AppBar as AppBarMui, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  handleDrawerOpen: () => void;
};

export const AppBar = ({ handleDrawerOpen }: Props) => {
  return (
    <AppBarMui position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xl: "none", lg: "none" } }}
          onClick={handleDrawerOpen}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBarMui>
  );
};
