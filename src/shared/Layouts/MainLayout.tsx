import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { HTMLProps, ReactNode } from "react";
import GreenCarImage from "assets/car-green.svg";
import { Navbar } from "../components";

interface MainLayoutProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export function MainLayout(props: MainLayoutProps) {
  const { children, ...rest } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      height="100vh"
    >
      <Stack
        display="flex"
        position="relative"
        direction={{ xs: "column", sm: "row" }}
        width="100%"
        height="100%"
      >
        <Navbar />
        <Box bgcolor="white" sx={{ flexGrow: 3 }}>
          {children}
        </Box>
        <Box bgcolor="#fffbeb" sx={{ flexGrow: 1 }}></Box>
        <Box
          position="absolute"
          bottom="10%"
          left="0%"
          height="35%"
          width="45%"
        >
          <Image alt="Azki Car Insurance" src={GreenCarImage.src} fill />
        </Box>
      </Stack>
    </Box>
  );
}
