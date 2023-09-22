import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import UserIcon from "assets/user.svg";
import LogoIcon from "assets/logo.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Link from "next/link";
import { ROUTES } from "../../constants/routes";

const Navbar = () => {
  const userState = useSelector((state: RootState) => state.user);
  const authenticated = !!userState.data;
  const name = userState.data?.firstName + " " + userState.data?.lastName;

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
          <Typography
            fontWeight="bold"
            sx={{ visibility: { xs: "hidden", sm: "visible" } }}
          >
            {"سامانه مقایسه و خرید آنلاین بیمه "}
          </Typography>
          {authenticated ? (
            <Stack direction="row" alignItems="center" spacing={1}>
              <Image
                alt="user-area"
                src={UserIcon.src}
                height={32}
                width={32}
              />
              <Typography fontWeight="bold">{name}</Typography>
            </Stack>
          ) : (
            <Box
              component={Link}
              href={ROUTES.HOME}
              sx={{ textDecoration: "none" }}
            >
              <Typography fontWeight="bold">{"ثبت نام"}</Typography>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
