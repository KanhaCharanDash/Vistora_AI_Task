import React from "react";
import { Box, IconButton, TextField, Typography, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import {
  QRCodePng,
  appStorePng,
  googlePlayPng,
  facebookPng,
  instagramPng,
  twitterPng,
  linkedinPng,
} from "./images";

export const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#0f172a",
        paddingTop: "3rem",
        paddingLeft: "3rem",
        paddingRight: "3rem",
        paddingBottom: "1.5rem",
        rowGap: "5rem",
        color: "#f8fafc",
      }}
    >

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="space-around"
        rowGap="2rem"
      >
     
        <Stack rowGap="1rem" padding="1rem">
          <Typography variant="h6" fontSize="1.5rem">
            Exclusive
          </Typography>
          <Typography variant="h6">Subscribe</Typography>
          <Typography fontWeight={300}>
            Get 10% off your first order
          </Typography>
          <TextField
            placeholder="Enter your email"
            sx={{
              border: "1px solid white",
              borderRadius: "6px",
              input: { color: "white" },
            }}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SendIcon sx={{ color: "white" }} />
                </IconButton>
              ),
            }}
          />
        </Stack>


        <Stack rowGap="1rem" padding="1rem">
          <Typography variant="h6">Support</Typography>
          <Typography fontWeight={300}>
            OUTR, Bhubaneswar
          </Typography>
          <Typography fontWeight={300}>kanhacharandash111@gmail.com</Typography>
          <Typography fontWeight={300}>+91 8144286284</Typography>
        </Stack>

       
      <Stack rowGap="1rem" padding="1rem">
  <Typography variant="h6">Account</Typography>

  <Typography
    component={Link}
    to="/account"
    fontWeight={300}
    sx={{ textDecoration: "none", color: "inherit" }}
  >
    My Account
  </Typography>

  <Typography
    component={Link}
    to="/login"
    fontWeight={300}
    sx={{ textDecoration: "none", color: "inherit" }}
  >
    Login / Register
  </Typography>

  <Typography
    component={Link}
    to="/cart"
    fontWeight={300}
    sx={{ textDecoration: "none", color: "inherit" }}
  >
    Cart
  </Typography>

  <Typography
    component={Link}
    to="/wishlist"
    fontWeight={300}
    sx={{ textDecoration: "none", color: "inherit" }}
  >
    Wishlist
  </Typography>

  <Typography
    component={Link}
    to="/"
    fontWeight={300}
    sx={{ textDecoration: "none", color: "inherit" }}
  >
    Shop
  </Typography>
</Stack>


       
        <Stack rowGap="1rem" padding="1rem">
          <Typography variant="h6">Quick Links</Typography>
          <Typography fontWeight={300}>Privacy Policy</Typography>
          <Typography fontWeight={300}>Terms Of Use</Typography>
          <Typography fontWeight={300}>FAQ</Typography>
          <Typography fontWeight={300}>Contact</Typography>
        </Stack>

        <Stack rowGap="1rem" padding="1rem">
          <Typography variant="h6">Download App</Typography>
          <Typography fontWeight={500} color="gray">
            Save $3 with App (New User Only)
          </Typography>

          <Stack direction="row" columnGap="0.5rem">
            <Box width="100px" height="100px">
              <img
                src={QRCodePng}
                alt="QR Code"
                width="100%"
                height="100%"
                style={{ objectFit: "contain" }}
              />
            </Box>

            <Stack justifyContent="space-around">
              <img
                src={googlePlayPng}
                alt="Google Play"
                style={{ cursor: "pointer" }}
              />
              <img
                src={appStorePng}
                alt="App Store"
                style={{ cursor: "pointer" }}
              />
            </Stack>
          </Stack>

     
       <Stack direction="row" columnGap="2rem" mt={1}>
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={facebookPng} alt="Facebook" style={{ cursor: "pointer" }} />
  </a>

  <a
    href="https://twitter.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={twitterPng} alt="Twitter" style={{ cursor: "pointer" }} />
  </a>

  <a
    href="https://www.instagram.com/kanhacharandash/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={instagramPng} alt="Instagram" style={{ cursor: "pointer" }} />
  </a>

  <a
    href="https://www.linkedin.com/in/kanha-charan-dash/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={linkedinPng} alt="LinkedIn" style={{ cursor: "pointer" }} />
  </a>
</Stack>

        </Stack>
      </Stack>

     
      <Stack alignSelf="center">
        <Typography color="GrayText">
          © Mern Store 2025. All rights reserved
        </Typography>
      </Stack>
    </Stack>
  );
};
