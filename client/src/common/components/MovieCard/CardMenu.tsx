import { useState, MouseEvent } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";

export const CardMenu = ({ options }: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        sx={{ position: "absolute", top: 5, right: 5, backgroundColor: "rgba(255,255,255, 0.3)" }}
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
        {options.map((option: any) => (
          <MenuItem key={option.id} selected={option.id === 1} onClick={handleClose}>
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
