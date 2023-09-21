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
      overflow="hidden"
    >
      <Stack
        display="flex"
        position="relative"
        direction={{ xs: "column", sm: "row" }}
        width="100%"
        height="100%"
      >
        <Box
          bgcolor="#fffbeb"
          position="absolute"
          left={0}
          top={{ xs: "75%", md: 0 }}
          bottom={0}
          right={{ xs: 0, md: "75%" }}
        ></Box>
        <Box
          position="absolute"
          bottom={{ xs: "10%", sm: "5%" }}
          left="5%"
          height="35%"
          width={{ xs: "65%", sm: "45%" }}
        >
          <Image alt="Azki Car Insurance" src={GreenCarImage.src} fill />
        </Box>
        <Navbar />
        {children}
      </Stack>
    </Box>
  );
}
