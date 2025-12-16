import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        color: "text.primary",
        borderBottom: "1px solid #eee",
      }}
    >
      <Toolbar
        sx={{
          height: "4rem",
          display: "flex",
          justifyContent: "space-between",
          px: 3,
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            letterSpacing: ".3rem",
          }}
        >
          MERN SHOP
        </Typography>

        {/* Right Section */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography fontWeight={300}>Hey 👋 User</Typography>

          <Button variant="contained" size="small">
            Admin
          </Button>

          <Badge badgeContent={2} color="error">
            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Badge>

          <Badge badgeContent={1} color="error">
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </Badge>

          <IconButton>
            <Avatar src="https://i.pravatar.cc/40" />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
