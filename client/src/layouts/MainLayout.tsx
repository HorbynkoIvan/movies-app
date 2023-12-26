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

      <Container maxWidth="xl">
        <Outlet />
      </Container>
      {/* <Box*/}
      {/*  component="main"*/}
      {/*  sx={{*/}
      {/*    width: "100%",*/}
      {/*    flexGrow: 1,*/}
      {/*    mt: "73px",*/}
      {/*  }}>*/}
      {/*  <Outlet />*/}
      {/* </Box>*/}
    </Box>
  );
};
