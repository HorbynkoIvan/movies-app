import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem } from "@mui/material";

export const MovieCard = () => {
  return (
    <Card sx={{ maxWidth: 250, position: "relative" }}>
      <IconButton
        sx={{ position: "absolute", top: 1, right: 1, color: "fff" }}
        aria-label="more"
        id="long-button"
        // aria-controls={open ? "long-menu" : undefined}
        // aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        // onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        // anchorEl={anchorEl}
        open={true}
        onClose={() => {}}>
        <MenuItem onClick={() => {}}>jdhvchadsvahjd</MenuItem>
      </Menu>
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
