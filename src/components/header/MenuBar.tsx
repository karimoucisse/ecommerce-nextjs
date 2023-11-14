"use client";
import React, { useState } from "react";
import { Box, MenuItem, Menu, ListItemIcon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const MenuBar = ({ navItems }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flex: 1, display: { xs: "flex", md: "none" } }}>
      <MenuIcon onClick={() => handleClick} />
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        // transformOrigin={{ horizontal: "right", vertical: "bottom" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        {navItems.map((item) => (
          <Link href={item.url} key={item.name}>
            <MenuItem onClick={handleClose}>
              {/* <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon> */}
              {item.name}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Box>
  );
};

export default MenuBar;
