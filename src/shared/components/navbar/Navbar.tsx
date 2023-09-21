import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import UserIcon from "assets/user.svg";
import LogoIcon from "assets/logo.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <Box position="absolute" top={18} width="100%">
      <Container>
        <Stack
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Image alt="azki-logo" src={LogoIcon.src} height={32} width={32} />
          <Typography fontWeight="bold" sx={{ visibility: { xs: "hidden", sm: "visible" }}}>
            {"سامانه مقایسه و خرید آنلاین بیمه "}
          </Typography>
          <Stack direction="row" alignItems="center">
            <Image alt="user-area" src={UserIcon.src} height={32} width={32} />
            <Typography paddingRight={1} fontWeight="bold">
              {"جان دو"}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
