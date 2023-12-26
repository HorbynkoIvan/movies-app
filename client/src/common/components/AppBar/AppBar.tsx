import { AppBar as AppBarMui, Toolbar, IconButton, Button, Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

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
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          Logo
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "block" } }}>
          <Link to={"/"}>
            <Button sx={{ color: "#fff" }}>Home</Button>
          </Link>
          <Link to={"/settings"}>
            <Button sx={{ color: "#fff" }}>Settings</Button>
          </Link>
        </Box>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBarMui>
  );
};
