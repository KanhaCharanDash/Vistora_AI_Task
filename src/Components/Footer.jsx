import React from "react";
import { Box, IconButton, TextField, Typography, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// replace with your actual image paths
const {
  QRCodePng,
  appStorePng,
  googlePlayPng,
  facebookPng,
  instagramPng,
  twitterPng,
  linkedinPng,
} =[]

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
      {/* Upper Section */}
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="space-around"
        rowGap="2rem"
      >
        {/* Subscribe */}
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

        {/* Support */}
        <Stack rowGap="1rem" padding="1rem">
          <Typography variant="h6">Support</Typography>
          <Typography fontWeight={300}>
            11th Main Street, Dhaka, CA 1515
          </Typography>
          <Typography fontWeight={300}>exclusive@gmail.com</Typography>
          <Typography fontWeight={300}>+88015-88888-9999</Typography>
        </Stack>

        {/* Account */}
        <Stack rowGap="1rem" padding="1rem">
          <Typography variant="h6">Account</Typography>
          <Typography fontWeight={300}>My Account</Typography>
          <Typography fontWeight={300}>Login / Register</Typography>
          <Typography fontWeight={300}>Cart</Typography>
          <Typography fontWeight={300}>Wishlist</Typography>
          <Typography fontWeight={300}>Shop</Typography>
        </Stack>

        {/* Quick Links */}
        <Stack rowGap="1rem" padding="1rem">
          <Typography variant="h6">Quick Links</Typography>
          <Typography fontWeight={300}>Privacy Policy</Typography>
          <Typography fontWeight={300}>Terms Of Use</Typography>
          <Typography fontWeight={300}>FAQ</Typography>
          <Typography fontWeight={300}>Contact</Typography>
        </Stack>

        {/* App Download */}
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

          {/* Social Icons */}
          <Stack direction="row" columnGap="2rem" mt={1}>
            <img src={facebookPng} alt="Facebook" />
            <img src={twitterPng} alt="Twitter" />
            <img src={instagramPng} alt="Instagram" />
            <img src={linkedinPng} alt="LinkedIn" />
          </Stack>
        </Stack>
      </Stack>

      {/* Lower Section */}
      <Stack alignSelf="center">
        <Typography color="GrayText">
          © Mern Store 2025. All rights reserved
        </Typography>
      </Stack>
    </Stack>
  );
};
