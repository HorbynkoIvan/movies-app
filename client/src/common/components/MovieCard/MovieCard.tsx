import { useState, MouseEvent } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

const options = [
  { id: 1, title: "Title1" },
  { id: 2, title: "Title2" },
  { id: 3, title: "Title3" },
  { id: 4, title: "Title4" },
];

export const MovieCard = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ maxWidth: 250, position: "relative" }}>
      <IconButton
        sx={{ position: "absolute", top: 1, right: 1, backgroundColor: "#fff" }}
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
        {options.map((option) => (
          <MenuItem key={option.id} selected={option.id === 1} onClick={handleClose}>
            {option.title}
          </MenuItem>
        ))}
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
