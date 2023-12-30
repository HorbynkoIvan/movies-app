import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import { CardMenu } from "@common/components/MovieCard/CardMenu";

const options = [
  { id: 1, title: "Title1" },
  { id: 2, title: "Title2" },
  { id: 3, title: "Title3" },
  { id: 4, title: "Title4" },
];

export const MovieCard = () => {
  return (
    <Card sx={{ maxWidth: 250, position: "relative" }}>
      <CardMenu options={options} />
      <CardMedia
        component="img"
        height="250"
        image="https://www.themoviedb.org/t/p/w440_and_h660_face/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          Lorem ipsum dolor sit amet.
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Lorem ipsum dolor.
        </Typography>
      </CardContent>
    </Card>
  );
};
