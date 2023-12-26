import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import { AppBar, Sidebar } from "@common/components";
import { useNavigation } from "@common/hooks/useNavigation";

export const MainLayout = () => {
  const { isDrawerOpen, handleDrawerOpen, handleDrawerClose } = useNavigation();

  return (
    <Box>
      <AppBar handleDrawerOpen={handleDrawerOpen} />
      <Sidebar isDrawerOpen={isDrawerOpen} handleDrawerClose={handleDrawerClose} />

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.grey[100],
          height: "100vh",
        }}>
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};
