import { Box, Grid, Paper, styled } from "@mui/material";

import { MovieCard } from "@common/components";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const SelectedMovies = styled(Paper)(({ theme }) => ({
  height: "calc(100vh - 140px)",
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  position: "sticky",
  top: 2,
}));

export const Home = () => (
  <Box sx={{ flexGrow: 1, mt: 2 }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Item>filters section</Item>
      </Grid>
      <Grid item xs={12} md={8}>
        <Item>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MovieCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MovieCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MovieCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MovieCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <MovieCard />
            </Grid>
          </Grid>
        </Item>
      </Grid>
      <Grid item xs={12} md={4}>
        <SelectedMovies>Selected movies</SelectedMovies>
      </Grid>
    </Grid>
  </Box>
);
